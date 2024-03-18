/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Environment } from "../HIR";
import {
  HIRFunction,
  Identifier,
  IdentifierId,
  Instruction,
  makeInstructionId,
  Place,
  ReactiveScope,
} from "../HIR/HIR";
import {
  doesPatternContainSpreadElement,
  eachInstructionOperand,
  eachPatternOperand,
} from "../HIR/visitors";
import DisjointSet from "../Utils/DisjointSet";
import { assertExhaustive } from "../Utils/utils";

/*
 * Note: this is the 1st of 4 passes that determine how to break a function into discrete
 * reactive scopes (independently memoizeable units of code):
 * 1. InferReactiveScopeVariables (this pass, on HIR) determines operands that mutate
 *     together and assigns them a unique reactive scope.
 * 2. AlignReactiveScopesToBlockScopes (on ReactiveFunction) aligns reactive scopes
 *     to block scopes.
 * 3. MergeOverlappingReactiveScopes (on ReactiveFunction) ensures that reactive
 *     scopes do not overlap, merging any such scopes.
 * 4. BuildReactiveBlocks (on ReactiveFunction) groups the statements for each scope into
 *     a ReactiveScopeBlock.
 *
 * For each mutable variable, infers a reactive scope which will construct that
 * variable. Variables that co-mutate are assigned to the same reactive scope.
 * This pass does *not* infer the set of instructions necessary to compute each
 * variable/scope, only the set of variables that will be computed by each scope.
 *
 * Examples:
 * ```javascript
 * // Mutable arguments
 * let x = {};
 * let y = [];
 * foo(x, y); // both args mutable, could alias each other
 * y.push(x); // y is part of callee, counts as operand
 *
 * let z = {};
 * y.push(z);
 *
 * // Mutable assignment
 * let x = {};
 * let y = [];
 * x.y = y; // trivial aliasing
 * ```
 *
 * More generally, all mutable operands (incl lvalue) of an instruction must go in the
 * same scope.
 *
 * ## Implementation
 *
 * 1. Iterate over all instructions in all blocks (order does not matter, single pass),
 *     and create disjoint sets ({@link DisjointSet}) for each set of operands that
 *     mutate together per above rules.
 * 2. Iterate the contents of each set, and assign a new {@link ScopeId} to each set,
 *     and update the `scope` property of each item in that set to that scope id.
 *
 * ## Other Issues Uncovered
 *
 * Mutable lifetimes need to account for aliasing (known todo, already described in InferMutableLifetimes.ts)
 *
 * ```javascript
 * let x = {};
 * let y = [];
 * x.y = y; // RHS is not considered mutable here bc not further mutation
 * mutate(x); // bc y is aliased here, it should still be considered mutable above
 * ```
 */
export function inferReactiveScopeVariables(fn: HIRFunction): void {
  /*
   * Represents the set of reactive scopes as disjoint sets of identifiers
   * that mutate together.
   */
  const scopeIdentifiers = findDisjointMutableValues(fn);

  // Maps each scope (by its identifying member) to a ScopeId value
  const scopes: Map<Identifier, ReactiveScope> = new Map();

  /*
   * Iterate over all the identifiers and assign a unique ScopeId
   * for each scope (based on the set identifier).
   *
   * At the same time, group the identifiers in each scope and
   * build a MutableRange that describes the span of mutations
   * across all identifiers in each scope.
   */
  scopeIdentifiers.forEach((identifier, groupIdentifier) => {
    let scope = scopes.get(groupIdentifier);
    if (scope === undefined) {
      scope = {
        id: fn.env.nextScopeId,
        range: identifier.mutableRange,
        dependencies: new Set(),
        declarations: new Map(),
        reassignments: new Set(),
        earlyReturnValue: null,
        merged: new Set(),
      };
      scopes.set(groupIdentifier, scope);
    } else {
      scope.range.start = makeInstructionId(
        Math.min(scope.range.start, identifier.mutableRange.start)
      );
      scope.range.end = makeInstructionId(
        Math.max(scope.range.end, identifier.mutableRange.end)
      );
    }
    identifier.scope = scope;
  });
}

// Is the operand mutable at this given instruction
export function isMutable({ id }: Instruction, place: Place): boolean {
  const range = place.identifier.mutableRange;
  return id >= range.start && id < range.end;
}

function mayAllocate(env: Environment, instruction: Instruction): boolean {
  const { value } = instruction;
  switch (value.kind) {
    case "Destructure": {
      return doesPatternContainSpreadElement(value.lvalue.pattern);
    }
    case "PostfixUpdate":
    case "PrefixUpdate":
    case "Await":
    case "DeclareLocal":
    case "DeclareContext":
    case "StoreLocal":
    case "LoadGlobal":
    case "TypeCastExpression":
    case "LoadLocal":
    case "LoadContext":
    case "StoreContext":
    case "PropertyDelete":
    case "ComputedLoad":
    case "ComputedDelete":
    case "JSXText":
    case "TemplateLiteral":
    case "Primitive":
    case "NextIterableOf":
    case "NextPropertyOf":
    case "Debugger":
    case "Memoize":
    case "UnaryExpression":
    case "BinaryExpression":
    case "PropertyLoad": {
      return false;
    }
    case "CallExpression":
    case "MethodCall": {
      return instruction.lvalue.identifier.type.kind !== "Primitive";
    }
    case "RegExpLiteral":
    case "PropertyStore":
    case "ComputedStore":
    case "ArrayExpression":
    case "JsxExpression":
    case "JsxFragment":
    case "NewExpression":
    case "ObjectExpression":
    case "UnsupportedNode":
    case "ObjectMethod":
    case "FunctionExpression":
    case "TaggedTemplateExpression": {
      return true;
    }
    default: {
      assertExhaustive(value, `Unexpected value kind '${(value as any).kind}'`);
    }
  }
}

export function findDisjointMutableValues(
  fn: HIRFunction
): DisjointSet<Identifier> {
  const scopeIdentifiers = new DisjointSet<Identifier>();
  const declarations: Map<IdentifierId, Place> | null = fn.env.config
    .enableForest
    ? new Map()
    : null;
  for (const [_, block] of fn.body.blocks) {
    /*
     * If a phi is mutated after creation, then we need to alias all of its operands such that they
     * are assigned to the same scope.
     */
    for (const phi of block.phis) {
      if (
        // The phi was reset because it was not mutated after creation
        phi.id.mutableRange.start + 1 !== phi.id.mutableRange.end &&
        phi.id.mutableRange.end >
          (block.instructions.at(0)?.id ?? block.terminal.id)
      ) {
        for (const [, phiId] of phi.operands) {
          scopeIdentifiers.union([phi.id, phiId]);
        }
      } else if (fn.env.config.enableForest) {
        for (const [, phiId] of phi.operands) {
          scopeIdentifiers.union([phi.id, phiId]);
        }
      }
    }

    for (const instr of block.instructions) {
      const operands: Array<Identifier> = [];
      const range = instr.lvalue.identifier.mutableRange;
      if (range.end > range.start + 1 || mayAllocate(fn.env, instr)) {
        operands.push(instr.lvalue!.identifier);
      }
      if (instr.value.kind === "DeclareLocal") {
        if (declarations !== null) {
          declarations.set(
            instr.value.lvalue.place.identifier.id,
            instr.value.lvalue.place
          );
        }
      } else if (
        instr.value.kind === "StoreLocal" ||
        instr.value.kind === "StoreContext"
      ) {
        if (
          instr.value.lvalue.place.identifier.mutableRange.end >
          instr.value.lvalue.place.identifier.mutableRange.start + 1
        ) {
          operands.push(instr.value.lvalue.place.identifier);
        }
        if (
          isMutable(instr, instr.value.value) &&
          instr.value.value.identifier.mutableRange.start > 0
        ) {
          operands.push(instr.value.value.identifier);
        }
        if (declarations !== null) {
          const declaration = declarations.get(
            instr.value.lvalue.place.identifier.id
          );
          if (declaration !== undefined) {
            declaration.identifier.mutableRange.end = makeInstructionId(
              Math.max(
                declaration.identifier.mutableRange.end,
                instr.value.lvalue.place.identifier.mutableRange.end
              )
            );
            instr.value.lvalue.place.identifier.mutableRange.start =
              makeInstructionId(
                Math.min(
                  declaration.identifier.mutableRange.start,
                  instr.value.lvalue.place.identifier.mutableRange.start
                )
              );
            operands.push(declaration.identifier);
          }
        }
      } else if (instr.value.kind === "Destructure") {
        for (const place of eachPatternOperand(instr.value.lvalue.pattern)) {
          if (
            place.identifier.mutableRange.end >
            place.identifier.mutableRange.start + 1
          ) {
            operands.push(place.identifier);
          }
        }
        if (
          isMutable(instr, instr.value.value) &&
          instr.value.value.identifier.mutableRange.start > 0
        ) {
          operands.push(instr.value.value.identifier);
        }
      } else if (instr.value.kind === "MethodCall") {
        for (const operand of eachInstructionOperand(instr)) {
          if (
            isMutable(instr, operand) &&
            /*
             * exclude global variables from being added to scopes, we can't recreate them!
             * TODO: improve handling of module-scoped variables and globals
             */
            operand.identifier.mutableRange.start > 0
          ) {
            operands.push(operand.identifier);
          }
        }
        /*
         * Ensure that the ComputedLoad to resolve the method is in the same scope as the
         * call itself
         */
        operands.push(instr.value.property.identifier);
      } else {
        for (const operand of eachInstructionOperand(instr)) {
          if (
            isMutable(instr, operand) &&
            /*
             * exclude global variables from being added to scopes, we can't recreate them!
             * TODO: improve handling of module-scoped variables and globals
             */
            operand.identifier.mutableRange.start > 0
          ) {
            operands.push(operand.identifier);
          }
        }
      }
      if (operands.length !== 0) {
        scopeIdentifiers.union(operands);
      }
    }
  }
  return scopeIdentifiers;
}