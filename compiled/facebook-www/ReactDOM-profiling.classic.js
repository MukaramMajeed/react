/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @preserve-invariant-messages
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
"use strict";
"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  "function" ===
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
var Scheduler = require("scheduler"),
  React = require("react"),
  assign = Object.assign;
function formatProdErrorMessage(code) {
  var url = "https://react.dev/errors/" + code;
  if (1 < arguments.length) {
    url += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var i = 2; i < arguments.length; i++)
      url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return (
    "Minified React error #" +
    code +
    "; visit " +
    url +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ReactSharedInternals =
    React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  dynamicFeatureFlags = require("ReactFeatureFlags"),
  disableInputAttributeSyncing =
    dynamicFeatureFlags.disableInputAttributeSyncing,
  disableIEWorkarounds = dynamicFeatureFlags.disableIEWorkarounds,
  enableTrustedTypesIntegration =
    dynamicFeatureFlags.enableTrustedTypesIntegration,
  enableLegacyFBSupport = dynamicFeatureFlags.enableLegacyFBSupport,
  enableDebugTracing = dynamicFeatureFlags.enableDebugTracing,
  enableUseRefAccessWarning = dynamicFeatureFlags.enableUseRefAccessWarning,
  enableLazyContextPropagation =
    dynamicFeatureFlags.enableLazyContextPropagation,
  enableUnifiedSyncLane = dynamicFeatureFlags.enableUnifiedSyncLane,
  enableRetryLaneExpiration = dynamicFeatureFlags.enableRetryLaneExpiration,
  enableTransitionTracing = dynamicFeatureFlags.enableTransitionTracing,
  enableDeferRootSchedulingToMicrotask =
    dynamicFeatureFlags.enableDeferRootSchedulingToMicrotask,
  alwaysThrottleRetries = dynamicFeatureFlags.alwaysThrottleRetries,
  enableDO_NOT_USE_disableStrictPassiveEffect =
    dynamicFeatureFlags.enableDO_NOT_USE_disableStrictPassiveEffect,
  disableSchedulerTimeoutInWorkLoop =
    dynamicFeatureFlags.disableSchedulerTimeoutInWorkLoop,
  enableUseDeferredValueInitialArg =
    dynamicFeatureFlags.enableUseDeferredValueInitialArg,
  retryLaneExpirationMs = dynamicFeatureFlags.retryLaneExpirationMs,
  syncLaneExpirationMs = dynamicFeatureFlags.syncLaneExpirationMs,
  transitionLaneExpirationMs = dynamicFeatureFlags.transitionLaneExpirationMs,
  enableInfiniteRenderLoopDetection =
    dynamicFeatureFlags.enableInfiniteRenderLoopDetection,
  enableRenderableContext = dynamicFeatureFlags.enableRenderableContext,
  enableProfilerNestedUpdateScheduledHook =
    dynamicFeatureFlags.enableProfilerNestedUpdateScheduledHook,
  enableSchedulingProfiler = dynamicFeatureFlags.enableSchedulingProfiler,
  REACT_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  REACT_SCOPE_TYPE = Symbol.for("react.scope"),
  REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for("react.debug_trace_mode"),
  REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
  REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"),
  REACT_CACHE_TYPE = Symbol.for("react.cache"),
  REACT_TRACING_MARKER_TYPE = Symbol.for("react.tracing_marker"),
  REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
function getComponentNameFromType(type) {
  if (null == type) return null;
  if ("function" === typeof type)
    return type.$$typeof === REACT_CLIENT_REFERENCE
      ? null
      : type.displayName || type.name || null;
  if ("string" === typeof type) return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PORTAL_TYPE:
      return "Portal";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
    case REACT_CACHE_TYPE:
      return "Cache";
    case REACT_TRACING_MARKER_TYPE:
      if (enableTransitionTracing) return "TracingMarker";
  }
  if ("object" === typeof type)
    switch (type.$$typeof) {
      case REACT_PROVIDER_TYPE:
        if (enableRenderableContext) break;
        else return (type._context.displayName || "Context") + ".Provider";
      case REACT_CONTEXT_TYPE:
        return enableRenderableContext
          ? (type.displayName || "Context") + ".Provider"
          : (type.displayName || "Context") + ".Consumer";
      case REACT_CONSUMER_TYPE:
        if (enableRenderableContext)
          return (type._context.displayName || "Context") + ".Consumer";
        break;
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type ||
          ((type = innerType.displayName || innerType.name || ""),
          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
        return type;
      case REACT_MEMO_TYPE:
        return (
          (innerType = type.displayName || null),
          null !== innerType
            ? innerType
            : getComponentNameFromType(type.type) || "Memo"
        );
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {}
    }
  return null;
}
function getComponentNameFromFiber(fiber) {
  var type = fiber.type;
  switch (fiber.tag) {
    case 24:
      return "Cache";
    case 9:
      return enableRenderableContext
        ? (type._context.displayName || "Context") + ".Consumer"
        : (type.displayName || "Context") + ".Consumer";
    case 10:
      return enableRenderableContext
        ? (type.displayName || "Context") + ".Provider"
        : (type._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (fiber = type.render),
        (fiber = fiber.displayName || fiber.name || ""),
        type.displayName ||
          ("" !== fiber ? "ForwardRef(" + fiber + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 26:
    case 27:
    case 5:
      return type;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return getComponentNameFromType(type);
    case 8:
      return type === REACT_STRICT_MODE_TYPE ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof type)
        return type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      break;
    case 23:
      return "LegacyHidden";
  }
  return null;
}
function getNearestMountedFiber(fiber) {
  var node = fiber,
    nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      (node = fiber),
        0 !== (node.flags & 4098) && (nearestMounted = node.return),
        (fiber = node.return);
    while (fiber);
  }
  return 3 === node.tag ? nearestMounted : null;
}
function getSuspenseInstanceFromFiber(fiber) {
  if (13 === fiber.tag) {
    var suspenseState = fiber.memoizedState;
    null === suspenseState &&
      ((fiber = fiber.alternate),
      null !== fiber && (suspenseState = fiber.memoizedState));
    if (null !== suspenseState) return suspenseState.dehydrated;
  }
  return null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error(formatProdErrorMessage(188));
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate) throw Error(formatProdErrorMessage(188));
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    var parentA = a.return;
    if (null === parentA) break;
    var parentB = parentA.alternate;
    if (null === parentB) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error(formatProdErrorMessage(188));
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$1 = parentA.child; child$1; ) {
        if (child$1 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$1 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$1 = child$1.sibling;
      }
      if (!didFindChild) {
        for (child$1 = parentB.child; child$1; ) {
          if (child$1 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$1 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$1 = child$1.sibling;
        }
        if (!didFindChild) throw Error(formatProdErrorMessage(189));
      }
    }
    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
  }
  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiber(parent) {
  parent = findCurrentFiberUsingSlowPath(parent);
  return null !== parent ? findCurrentHostFiberImpl(parent) : null;
}
function findCurrentHostFiberImpl(node) {
  var tag = node.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
  for (node = node.child; null !== node; ) {
    tag = findCurrentHostFiberImpl(node);
    if (null !== tag) return tag;
    node = node.sibling;
  }
  return null;
}
function isFiberSuspenseAndTimedOut(fiber) {
  var memoizedState = fiber.memoizedState;
  return (
    13 === fiber.tag &&
    null !== memoizedState &&
    null === memoizedState.dehydrated
  );
}
function doesFiberContain(parentFiber, childFiber) {
  for (
    var parentFiberAlternate = parentFiber.alternate;
    null !== childFiber;

  ) {
    if (childFiber === parentFiber || childFiber === parentFiberAlternate)
      return !0;
    childFiber = childFiber.return;
  }
  return !1;
}
var currentReplayingEvent = null,
  ReactCurrentDispatcher$2 = ReactSharedInternals.ReactCurrentDispatcher,
  sharedNotPendingObject = {
    pending: !1,
    data: null,
    method: null,
    action: null
  },
  valueStack = [],
  index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
function pop(cursor) {
  0 > index ||
    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
var contextStackCursor$1 = createCursor(null),
  contextFiberStackCursor = createCursor(null),
  rootInstanceStackCursor = createCursor(null),
  hostTransitionProviderCursor = createCursor(null),
  HostTransitionContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor$1, null);
  fiber = nextRootInstance.nodeType;
  switch (fiber) {
    case 9:
    case 11:
      nextRootInstance = (nextRootInstance = nextRootInstance.documentElement)
        ? (nextRootInstance = nextRootInstance.namespaceURI)
          ? getOwnHostContext(nextRootInstance)
          : 0
        : 0;
      break;
    default:
      if (
        ((fiber = 8 === fiber ? nextRootInstance.parentNode : nextRootInstance),
        (nextRootInstance = fiber.tagName),
        (fiber = fiber.namespaceURI))
      )
        (fiber = getOwnHostContext(fiber)),
          (nextRootInstance = getChildHostContextProd(fiber, nextRootInstance));
      else
        switch (nextRootInstance) {
          case "svg":
            nextRootInstance = 1;
            break;
          case "math":
            nextRootInstance = 2;
            break;
          default:
            nextRootInstance = 0;
        }
  }
  pop(contextStackCursor$1);
  push(contextStackCursor$1, nextRootInstance);
}
function popHostContainer() {
  pop(contextStackCursor$1);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
  var context = contextStackCursor$1.current;
  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
  context !== JSCompiler_inline_result &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor$1, JSCompiler_inline_result));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor$1), pop(contextFiberStackCursor));
  hostTransitionProviderCursor.current === fiber &&
    (pop(hostTransitionProviderCursor),
    (HostTransitionContext._currentValue = null));
}
var scheduleCallback$3 = Scheduler.unstable_scheduleCallback,
  cancelCallback$1 = Scheduler.unstable_cancelCallback,
  shouldYield = Scheduler.unstable_shouldYield,
  requestPaint = Scheduler.unstable_requestPaint,
  now$1 = Scheduler.unstable_now,
  getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
  ImmediatePriority = Scheduler.unstable_ImmediatePriority,
  UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
  NormalPriority$1 = Scheduler.unstable_NormalPriority,
  LowPriority = Scheduler.unstable_LowPriority,
  IdlePriority = Scheduler.unstable_IdlePriority,
  log$1 = Scheduler.log,
  unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue,
  rendererID = null,
  injectedHook = null,
  injectedProfilingHooks = null,
  isDevToolsPresent = "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;
function onCommitRoot(root, eventPriority) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
    try {
      var didError = 128 === (root.current.flags & 128);
      switch (eventPriority) {
        case 2:
          var schedulerPriority = ImmediatePriority;
          break;
        case 8:
          schedulerPriority = UserBlockingPriority;
          break;
        case 32:
          schedulerPriority = NormalPriority$1;
          break;
        case 268435456:
          schedulerPriority = IdlePriority;
          break;
        default:
          schedulerPriority = NormalPriority$1;
      }
      injectedHook.onCommitFiberRoot(
        rendererID,
        root,
        schedulerPriority,
        didError
      );
    } catch (err) {}
}
function setIsStrictModeForDevtools(newIsStrictMode) {
  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
    try {
      injectedHook.setStrictMode(rendererID, newIsStrictMode);
    } catch (err) {}
}
function injectProfilingHooks(profilingHooks) {
  injectedProfilingHooks = profilingHooks;
}
function getLaneLabelMap() {
  if (enableSchedulingProfiler) {
    for (var map = new Map(), lane = 1, index$2 = 0; 31 > index$2; index$2++) {
      var label = getLabelForLane(lane);
      map.set(lane, label);
      lane *= 2;
    }
    return map;
  }
  return null;
}
function markCommitStopped() {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markCommitStopped &&
    injectedProfilingHooks.markCommitStopped();
}
function markComponentRenderStarted(fiber) {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markComponentRenderStarted &&
    injectedProfilingHooks.markComponentRenderStarted(fiber);
}
function markComponentRenderStopped() {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markComponentRenderStopped &&
    injectedProfilingHooks.markComponentRenderStopped();
}
function markComponentLayoutEffectUnmountStarted(fiber) {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" ===
      typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStarted &&
    injectedProfilingHooks.markComponentLayoutEffectUnmountStarted(fiber);
}
function markComponentLayoutEffectUnmountStopped() {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" ===
      typeof injectedProfilingHooks.markComponentLayoutEffectUnmountStopped &&
    injectedProfilingHooks.markComponentLayoutEffectUnmountStopped();
}
function markRenderStarted(lanes) {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markRenderStarted &&
    injectedProfilingHooks.markRenderStarted(lanes);
}
function markRenderStopped() {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markRenderStopped &&
    injectedProfilingHooks.markRenderStopped();
}
function markStateUpdateScheduled(fiber, lane) {
  enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markStateUpdateScheduled &&
    injectedProfilingHooks.markStateUpdateScheduled(fiber, lane);
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
  log = Math.log,
  LN2 = Math.LN2;
function clz32Fallback(x) {
  x >>>= 0;
  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
}
var SyncUpdateLanes = enableUnifiedSyncLane ? 42 : 2;
function getLabelForLane(lane) {
  if (enableSchedulingProfiler) {
    if (lane & 1) return "SyncHydrationLane";
    if (lane & 2) return "Sync";
    if (lane & 4) return "InputContinuousHydration";
    if (lane & 8) return "InputContinuous";
    if (lane & 16) return "DefaultHydration";
    if (lane & 32) return "Default";
    if (lane & 64) return "TransitionHydration";
    if (lane & 4194176) return "Transition";
    if (lane & 62914560) return "Retry";
    if (lane & 67108864) return "SelectiveHydration";
    if (lane & 134217728) return "IdleHydration";
    if (lane & 268435456) return "Idle";
    if (lane & 536870912) return "Offscreen";
    if (lane & 1073741824) return "Deferred";
  }
}
var nextTransitionLane = 128,
  nextRetryLane = 4194304;
function getHighestPriorityLanes(lanes) {
  if (enableUnifiedSyncLane) {
    var pendingSyncLanes = lanes & SyncUpdateLanes;
    if (0 !== pendingSyncLanes) return pendingSyncLanes;
  }
  switch (lanes & -lanes) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return lanes & 4194176;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return lanes & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return lanes;
  }
}
function getNextLanes(root, wipLanes) {
  var pendingLanes = root.pendingLanes;
  if (0 === pendingLanes) return 0;
  var nextLanes = 0,
    suspendedLanes = root.suspendedLanes;
  root = root.pingedLanes;
  var nonIdlePendingLanes = pendingLanes & 134217727;
  0 !== nonIdlePendingLanes
    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
      0 !== pendingLanes
        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
        : ((root &= nonIdlePendingLanes),
          0 !== root && (nextLanes = getHighestPriorityLanes(root))))
    : ((pendingLanes &= ~suspendedLanes),
      0 !== pendingLanes
        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
        : 0 !== root && (nextLanes = getHighestPriorityLanes(root)));
  return 0 === nextLanes
    ? 0
    : 0 !== wipLanes &&
      wipLanes !== nextLanes &&
      0 === (wipLanes & suspendedLanes) &&
      ((suspendedLanes = nextLanes & -nextLanes),
      (root = wipLanes & -wipLanes),
      suspendedLanes >= root ||
        (32 === suspendedLanes && 0 !== (root & 4194176)))
    ? wipLanes
    : nextLanes;
}
function computeExpirationTime(lane, currentTime) {
  switch (lane) {
    case 1:
    case 2:
    case 4:
    case 8:
      return currentTime + syncLaneExpirationMs;
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return currentTime + transitionLaneExpirationMs;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return enableRetryLaneExpiration
        ? currentTime + retryLaneExpirationMs
        : -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function getLanesToRetrySynchronouslyOnError(root, originallyAttemptedLanes) {
  if (root.errorRecoveryDisabledLanes & originallyAttemptedLanes) return 0;
  root = root.pendingLanes & -536870913;
  return 0 !== root ? root : root & 536870912 ? 536870912 : 0;
}
function includesBlockingLane(root, lanes) {
  return 0 !== (root.current.mode & 32) ? !1 : 0 !== (lanes & 60);
}
function claimNextTransitionLane() {
  var lane = nextTransitionLane;
  nextTransitionLane <<= 1;
  0 === (nextTransitionLane & 4194176) && (nextTransitionLane = 128);
  return lane;
}
function claimNextRetryLane() {
  var lane = nextRetryLane;
  nextRetryLane <<= 1;
  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
  return lane;
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootFinished(root, remainingLanes, spawnedLane) {
  var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
  root.pendingLanes = remainingLanes;
  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  root.errorRecoveryDisabledLanes &= remainingLanes;
  root.shellSuspendCounter = 0;
  remainingLanes = root.entanglements;
  for (
    var expirationTimes = root.expirationTimes,
      hiddenUpdates = root.hiddenUpdates;
    0 < noLongerPendingLanes;

  ) {
    var index$6 = 31 - clz32(noLongerPendingLanes),
      lane = 1 << index$6;
    remainingLanes[index$6] = 0;
    expirationTimes[index$6] = -1;
    var hiddenUpdatesForLane = hiddenUpdates[index$6];
    if (null !== hiddenUpdatesForLane)
      for (
        hiddenUpdates[index$6] = null, index$6 = 0;
        index$6 < hiddenUpdatesForLane.length;
        index$6++
      ) {
        var update = hiddenUpdatesForLane[index$6];
        null !== update && (update.lane &= -536870913);
      }
    noLongerPendingLanes &= ~lane;
  }
  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
}
function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
  root.pendingLanes |= spawnedLane;
  root.suspendedLanes &= ~spawnedLane;
  var spawnedLaneIndex = 31 - clz32(spawnedLane);
  root.entangledLanes |= spawnedLane;
  root.entanglements[spawnedLaneIndex] =
    root.entanglements[spawnedLaneIndex] |
    1073741824 |
    (entangledLanes & 4194218);
}
function markRootEntangled(root, entangledLanes) {
  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    var index$7 = 31 - clz32(rootEntangledLanes),
      lane = 1 << index$7;
    (lane & entangledLanes) | (root[index$7] & entangledLanes) &&
      (root[index$7] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
function upgradePendingLanesToSync(root, lanesToUpgrade) {
  root.pendingLanes |= 2;
  for (root.entangledLanes |= 2; lanesToUpgrade; ) {
    var lane = 1 << (31 - clz32(lanesToUpgrade));
    root.entanglements[1] |= lane;
    lanesToUpgrade &= ~lane;
  }
}
function addFiberToLanesMap(root, fiber, lanes) {
  if (isDevToolsPresent)
    for (root = root.pendingUpdatersLaneMap; 0 < lanes; ) {
      var index$9 = 31 - clz32(lanes),
        lane = 1 << index$9;
      root[index$9].add(fiber);
      lanes &= ~lane;
    }
}
function movePendingFibersToMemoized(root, lanes) {
  if (isDevToolsPresent)
    for (
      var pendingUpdatersLaneMap = root.pendingUpdatersLaneMap,
        memoizedUpdaters = root.memoizedUpdaters;
      0 < lanes;

    ) {
      var index$10 = 31 - clz32(lanes);
      root = 1 << index$10;
      index$10 = pendingUpdatersLaneMap[index$10];
      0 < index$10.size &&
        (index$10.forEach(function (fiber) {
          var alternate = fiber.alternate;
          (null !== alternate && memoizedUpdaters.has(alternate)) ||
            memoizedUpdaters.add(fiber);
        }),
        index$10.clear());
      lanes &= ~root;
    }
}
function getTransitionsForLanes(root, lanes) {
  if (!enableTransitionTracing) return null;
  for (var transitionsForLanes = []; 0 < lanes; ) {
    var index$12 = 31 - clz32(lanes),
      lane = 1 << index$12;
    index$12 = root.transitionLanes[index$12];
    null !== index$12 &&
      index$12.forEach(function (transition) {
        transitionsForLanes.push(transition);
      });
    lanes &= ~lane;
  }
  return 0 === transitionsForLanes.length ? null : transitionsForLanes;
}
function clearTransitionsForLanes(root, lanes) {
  if (enableTransitionTracing)
    for (; 0 < lanes; ) {
      var index$13 = 31 - clz32(lanes),
        lane = 1 << index$13;
      null !== root.transitionLanes[index$13] &&
        (root.transitionLanes[index$13] = null);
      lanes &= ~lane;
    }
}
var currentUpdatePriority = 0;
function runWithPriority(priority, fn) {
  var previousPriority = currentUpdatePriority;
  try {
    return (currentUpdatePriority = priority), fn();
  } finally {
    currentUpdatePriority = previousPriority;
  }
}
function lanesToEventPriority(lanes) {
  lanes &= -lanes;
  return 2 < lanes
    ? 8 < lanes
      ? 0 !== (lanes & 134217727)
        ? 32
        : 268435456
      : 8
    : 2;
}
var hasOwnProperty = Object.prototype.hasOwnProperty,
  allNativeEvents = new Set();
allNativeEvents.add("beforeblur");
allNativeEvents.add("afterblur");
var registrationNameDependencies = {};
function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies);
  registerDirectEvent(registrationName + "Capture", dependencies);
}
function registerDirectEvent(registrationName, dependencies) {
  registrationNameDependencies[registrationName] = dependencies;
  for (
    registrationName = 0;
    registrationName < dependencies.length;
    registrationName++
  )
    allNativeEvents.add(dependencies[registrationName]);
}
var canUseDOM = !(
    "undefined" === typeof window ||
    "undefined" === typeof window.document ||
    "undefined" === typeof window.document.createElement
  ),
  VALID_ATTRIBUTE_NAME_REGEX = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ),
  illegalAttributeNameCache = {},
  validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
    return !0;
  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
    return (validatedAttributeNameCache[attributeName] = !0);
  illegalAttributeNameCache[attributeName] = !0;
  return !1;
}
function setValueForAttribute(node, name, value) {
  if (isAttributeNameSafe(name))
    if (null === value) node.removeAttribute(name);
    else {
      switch (typeof value) {
        case "undefined":
        case "function":
        case "symbol":
          node.removeAttribute(name);
          return;
        case "boolean":
          var prefix$14 = name.toLowerCase().slice(0, 5);
          if ("data-" !== prefix$14 && "aria-" !== prefix$14) {
            node.removeAttribute(name);
            return;
          }
      }
      node.setAttribute(
        name,
        enableTrustedTypesIntegration ? value : "" + value
      );
    }
}
function setValueForKnownAttribute(node, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttribute(name, enableTrustedTypesIntegration ? value : "" + value);
  }
}
function setValueForNamespacedAttribute(node, namespace, name, value) {
  if (null === value) node.removeAttribute(name);
  else {
    switch (typeof value) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        node.removeAttribute(name);
        return;
    }
    node.setAttributeNS(
      namespace,
      name,
      enableTrustedTypesIntegration ? value : "" + value
    );
  }
}
var prefix;
function describeBuiltInComponentFrame(name) {
  if (void 0 === prefix)
    try {
      throw Error();
    } catch (x) {
      var match = x.stack.trim().match(/\n( *(at )?)/);
      prefix = (match && match[1]) || "";
    }
  return "\n" + prefix + name;
}
var reentry = !1;
function describeNativeComponentFrame(fn, construct) {
  if (!fn || reentry) return "";
  reentry = !0;
  var previousPrepareStackTrace = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  var RunInRootFrame = {
    DetermineComponentFrameRoot: function () {
      try {
        if (construct) {
          var Fake = function () {
            throw Error();
          };
          Object.defineProperty(Fake.prototype, "props", {
            set: function () {
              throw Error();
            }
          });
          if ("object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              var control = x;
            }
            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x$15) {
              control = x$15;
            }
            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x$16) {
            control = x$16;
          }
          (Fake = fn()) &&
            "function" === typeof Fake.catch &&
            Fake.catch(function () {});
        }
      } catch (sample) {
        if (sample && control && "string" === typeof sample.stack)
          return [sample.stack, control.stack];
      }
      return [null, null];
    }
  };
  RunInRootFrame.DetermineComponentFrameRoot.displayName =
    "DetermineComponentFrameRoot";
  var namePropDescriptor = Object.getOwnPropertyDescriptor(
    RunInRootFrame.DetermineComponentFrameRoot,
    "name"
  );
  namePropDescriptor &&
    namePropDescriptor.configurable &&
    Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
      value: "DetermineComponentFrameRoot"
    });
  try {
    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
      sampleStack = _RunInRootFrame$Deter[0],
      controlStack = _RunInRootFrame$Deter[1];
    if (sampleStack && controlStack) {
      var sampleLines = sampleStack.split("\n"),
        controlLines = controlStack.split("\n");
      for (
        namePropDescriptor = RunInRootFrame = 0;
        RunInRootFrame < sampleLines.length &&
        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

      )
        RunInRootFrame++;
      for (
        ;
        namePropDescriptor < controlLines.length &&
        !controlLines[namePropDescriptor].includes(
          "DetermineComponentFrameRoot"
        );

      )
        namePropDescriptor++;
      if (
        RunInRootFrame === sampleLines.length ||
        namePropDescriptor === controlLines.length
      )
        for (
          RunInRootFrame = sampleLines.length - 1,
            namePropDescriptor = controlLines.length - 1;
          1 <= RunInRootFrame &&
          0 <= namePropDescriptor &&
          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

        )
          namePropDescriptor--;
      for (
        ;
        1 <= RunInRootFrame && 0 <= namePropDescriptor;
        RunInRootFrame--, namePropDescriptor--
      )
        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
            do
              if (
                (RunInRootFrame--,
                namePropDescriptor--,
                0 > namePropDescriptor ||
                  sampleLines[RunInRootFrame] !==
                    controlLines[namePropDescriptor])
              ) {
                var frame =
                  "\n" +
                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
                fn.displayName &&
                  frame.includes("<anonymous>") &&
                  (frame = frame.replace("<anonymous>", fn.displayName));
                return frame;
              }
            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
          }
          break;
        }
    }
  } finally {
    (reentry = !1), (Error.prepareStackTrace = previousPrepareStackTrace);
  }
  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
    : "";
}
function describeFiber(fiber) {
  switch (fiber.tag) {
    case 26:
    case 27:
    case 5:
      return describeBuiltInComponentFrame(fiber.type);
    case 16:
      return describeBuiltInComponentFrame("Lazy");
    case 13:
      return describeBuiltInComponentFrame("Suspense");
    case 19:
      return describeBuiltInComponentFrame("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (fiber = describeNativeComponentFrame(fiber.type, !1)), fiber;
    case 11:
      return (
        (fiber = describeNativeComponentFrame(fiber.type.render, !1)), fiber
      );
    case 1:
      return (fiber = describeNativeComponentFrame(fiber.type, !0)), fiber;
    default:
      return "";
  }
}
function getStackByFiberInDevAndProd(workInProgress) {
  try {
    var info = "";
    do
      (info += describeFiber(workInProgress)),
        (workInProgress = workInProgress.return);
    while (workInProgress);
    return info;
  } catch (x) {
    return "\nError generating stack: " + x.message + "\n" + x.stack;
  }
}
function getToStringValue(value) {
  switch (typeof value) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return value;
    case "object":
      return value;
    default:
      return "";
  }
}
function isCheckable(elem) {
  var type = elem.type;
  return (
    (elem = elem.nodeName) &&
    "input" === elem.toLowerCase() &&
    ("checkbox" === type || "radio" === type)
  );
}
function trackValueOnNode(node) {
  var valueField = isCheckable(node) ? "checked" : "value",
    descriptor = Object.getOwnPropertyDescriptor(
      node.constructor.prototype,
      valueField
    ),
    currentValue = "" + node[valueField];
  if (
    !node.hasOwnProperty(valueField) &&
    "undefined" !== typeof descriptor &&
    "function" === typeof descriptor.get &&
    "function" === typeof descriptor.set
  ) {
    var get = descriptor.get,
      set = descriptor.set;
    Object.defineProperty(node, valueField, {
      configurable: !0,
      get: function () {
        return get.call(this);
      },
      set: function (value) {
        currentValue = "" + value;
        set.call(this, value);
      }
    });
    Object.defineProperty(node, valueField, {
      enumerable: descriptor.enumerable
    });
    return {
      getValue: function () {
        return currentValue;
      },
      setValue: function (value) {
        currentValue = "" + value;
      },
      stopTracking: function () {
        node._valueTracker = null;
        delete node[valueField];
      }
    };
  }
}
function track(node) {
  node._valueTracker || (node._valueTracker = trackValueOnNode(node));
}
function updateValueIfChanged(node) {
  if (!node) return !1;
  var tracker = node._valueTracker;
  if (!tracker) return !0;
  var lastValue = tracker.getValue();
  var value = "";
  node &&
    (value = isCheckable(node)
      ? node.checked
        ? "true"
        : "false"
      : node.value);
  node = value;
  return node !== lastValue ? (tracker.setValue(node), !0) : !1;
}
function getActiveElement(doc) {
  doc = doc || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof doc) return null;
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
  return value.replace(
    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
    function (ch) {
      return "\\" + ch.charCodeAt(0).toString(16) + " ";
    }
  );
}
function updateInput(
  element,
  value,
  defaultValue,
  lastDefaultValue,
  checked,
  defaultChecked,
  type,
  name
) {
  element.name = "";
  null != type &&
  "function" !== typeof type &&
  "symbol" !== typeof type &&
  "boolean" !== typeof type
    ? (element.type = type)
    : element.removeAttribute("type");
  if (null != value)
    if ("number" === type) {
      if ((0 === value && "" === element.value) || element.value != value)
        element.value = "" + getToStringValue(value);
    } else
      element.value !== "" + getToStringValue(value) &&
        (element.value = "" + getToStringValue(value));
  else
    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
  disableInputAttributeSyncing
    ? null != defaultValue
      ? setDefaultValue(element, type, getToStringValue(defaultValue))
      : null != lastDefaultValue && element.removeAttribute("value")
    : null != value
    ? setDefaultValue(element, type, getToStringValue(value))
    : null != defaultValue
    ? setDefaultValue(element, type, getToStringValue(defaultValue))
    : null != lastDefaultValue && element.removeAttribute("value");
  disableInputAttributeSyncing
    ? null == defaultChecked
      ? element.removeAttribute("checked")
      : (element.defaultChecked = !!defaultChecked)
    : null == checked &&
      null != defaultChecked &&
      (element.defaultChecked = !!defaultChecked);
  null != checked &&
    (element.checked =
      checked && "function" !== typeof checked && "symbol" !== typeof checked);
  null != name &&
  "function" !== typeof name &&
  "symbol" !== typeof name &&
  "boolean" !== typeof name
    ? (element.name = "" + getToStringValue(name))
    : element.removeAttribute("name");
}
function initInput(
  element,
  value,
  defaultValue,
  checked,
  defaultChecked,
  type,
  name,
  isHydrating
) {
  null != type &&
    "function" !== typeof type &&
    "symbol" !== typeof type &&
    "boolean" !== typeof type &&
    (element.type = type);
  if (null != value || null != defaultValue) {
    if (
      (type = "submit" === type || "reset" === type) &&
      (void 0 === value || null === value)
    )
      return;
    var defaultValueStr =
        null != defaultValue ? "" + getToStringValue(defaultValue) : "",
      initialValue =
        null != value ? "" + getToStringValue(value) : defaultValueStr;
    isHydrating ||
      (disableInputAttributeSyncing
        ? null == value ||
          (!type && "" + getToStringValue(value) === element.value) ||
          (element.value = "" + getToStringValue(value))
        : initialValue !== element.value && (element.value = initialValue));
    disableInputAttributeSyncing
      ? null != defaultValue && (element.defaultValue = defaultValueStr)
      : (element.defaultValue = initialValue);
  }
  value = null != checked ? checked : defaultChecked;
  value = "function" !== typeof value && "symbol" !== typeof value && !!value;
  element.checked = isHydrating ? element.checked : !!value;
  disableInputAttributeSyncing
    ? null != defaultChecked && (element.defaultChecked = !!defaultChecked)
    : (element.defaultChecked = !!value);
  null != name &&
    "function" !== typeof name &&
    "symbol" !== typeof name &&
    "boolean" !== typeof name &&
    (element.name = name);
}
function setDefaultValue(node, type, value) {
  ("number" === type && getActiveElement(node.ownerDocument) === node) ||
    node.defaultValue === "" + value ||
    (node.defaultValue = "" + value);
}
var isArrayImpl = Array.isArray;
function updateOptions(node, multiple, propValue, setDefaultSelected) {
  node = node.options;
  if (multiple) {
    multiple = {};
    for (var i = 0; i < propValue.length; i++)
      multiple["$" + propValue[i]] = !0;
    for (propValue = 0; propValue < node.length; propValue++)
      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
        node[propValue].selected !== i && (node[propValue].selected = i),
        i && setDefaultSelected && (node[propValue].defaultSelected = !0);
  } else {
    propValue = "" + getToStringValue(propValue);
    multiple = null;
    for (i = 0; i < node.length; i++) {
      if (node[i].value === propValue) {
        node[i].selected = !0;
        setDefaultSelected && (node[i].defaultSelected = !0);
        return;
      }
      null !== multiple || node[i].disabled || (multiple = node[i]);
    }
    null !== multiple && (multiple.selected = !0);
  }
}
function updateTextarea(element, value, defaultValue) {
  if (
    null != value &&
    ((value = "" + getToStringValue(value)),
    value !== element.value && (element.value = value),
    null == defaultValue)
  ) {
    element.defaultValue !== value && (element.defaultValue = value);
    return;
  }
  element.defaultValue =
    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
}
function initTextarea(element, value, defaultValue, children) {
  if (null == value) {
    if (null != children) {
      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
      if (isArrayImpl(children)) {
        if (1 < children.length) throw Error(formatProdErrorMessage(93));
        children = children[0];
      }
      defaultValue = children;
    }
    null == defaultValue && (defaultValue = "");
    value = defaultValue;
  }
  defaultValue = getToStringValue(value);
  element.defaultValue = defaultValue;
  children = element.textContent;
  children === defaultValue &&
    "" !== children &&
    null !== children &&
    (element.value = children);
}
var reusableSVGContainer;
function setInnerHTMLImpl(node, html) {
  if ("http://www.w3.org/2000/svg" !== node.namespaceURI || "innerHTML" in node)
    node.innerHTML = html;
  else {
    reusableSVGContainer =
      reusableSVGContainer || document.createElement("div");
    reusableSVGContainer.innerHTML =
      "<svg>" + html.valueOf().toString() + "</svg>";
    for (html = reusableSVGContainer.firstChild; node.firstChild; )
      node.removeChild(node.firstChild);
    for (; html.firstChild; ) node.appendChild(html.firstChild);
  }
}
var setInnerHTML = setInnerHTMLImpl;
"undefined" !== typeof MSApp &&
  MSApp.execUnsafeLocalFunction &&
  (setInnerHTML = function (node, html) {
    return MSApp.execUnsafeLocalFunction(function () {
      return setInnerHTMLImpl(node, html);
    });
  });
var setInnerHTML$1 = setInnerHTML;
function setTextContent(node, text) {
  if (text) {
    var firstChild = node.firstChild;
    if (
      firstChild &&
      firstChild === node.lastChild &&
      3 === firstChild.nodeType
    ) {
      firstChild.nodeValue = text;
      return;
    }
  }
  node.textContent = text;
}
var unitlessNumbers = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " "
  )
);
function setValueForStyle(style, styleName, value) {
  var isCustomProperty = 0 === styleName.indexOf("--");
  null == value || "boolean" === typeof value || "" === value
    ? isCustomProperty
      ? style.setProperty(styleName, "")
      : "float" === styleName
      ? (style.cssFloat = "")
      : (style[styleName] = "")
    : isCustomProperty
    ? style.setProperty(styleName, value)
    : "number" !== typeof value || 0 === value || unitlessNumbers.has(styleName)
    ? "float" === styleName
      ? (style.cssFloat = value)
      : (style[styleName] = ("" + value).trim())
    : (style[styleName] = value + "px");
}
function setValueForStyles(node, styles, prevStyles) {
  if (null != styles && "object" !== typeof styles)
    throw Error(formatProdErrorMessage(62));
  node = node.style;
  if (null != prevStyles) {
    for (var styleName in prevStyles)
      !prevStyles.hasOwnProperty(styleName) ||
        (null != styles && styles.hasOwnProperty(styleName)) ||
        (0 === styleName.indexOf("--")
          ? node.setProperty(styleName, "")
          : "float" === styleName
          ? (node.cssFloat = "")
          : (node[styleName] = ""));
    for (var styleName$22 in styles)
      (styleName = styles[styleName$22]),
        styles.hasOwnProperty(styleName$22) &&
          prevStyles[styleName$22] !== styleName &&
          setValueForStyle(node, styleName$22, styleName);
  } else
    for (var styleName$23 in styles)
      styles.hasOwnProperty(styleName$23) &&
        setValueForStyle(node, styleName$23, styles[styleName$23]);
}
function isCustomElement(tagName) {
  if (-1 === tagName.indexOf("-")) return !1;
  switch (tagName) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var aliases = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]),
  isJavaScriptProtocol =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function sanitizeURL(url) {
  return isJavaScriptProtocol.test("" + url)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : url;
}
function getEventTarget(nativeEvent) {
  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
  nativeEvent.correspondingUseElement &&
    (nativeEvent = nativeEvent.correspondingUseElement);
  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
}
var restoreTarget = null,
  restoreQueue = null;
function restoreStateOfTarget(target) {
  var internalInstance = getInstanceFromNode(target);
  if (internalInstance && (target = internalInstance.stateNode)) {
    var props = getFiberCurrentPropsFromNode(target);
    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
      case "input":
        updateInput(
          target,
          props.value,
          props.defaultValue,
          props.defaultValue,
          props.checked,
          props.defaultChecked,
          props.type,
          props.name
        );
        internalInstance = props.name;
        if ("radio" === props.type && null != internalInstance) {
          for (props = target; props.parentNode; ) props = props.parentNode;
          props = props.querySelectorAll(
            'input[name="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                "" + internalInstance
              ) +
              '"][type="radio"]'
          );
          for (
            internalInstance = 0;
            internalInstance < props.length;
            internalInstance++
          ) {
            var otherNode = props[internalInstance];
            if (otherNode !== target && otherNode.form === target.form) {
              var otherProps = getFiberCurrentPropsFromNode(otherNode);
              if (!otherProps) throw Error(formatProdErrorMessage(90));
              updateInput(
                otherNode,
                otherProps.value,
                otherProps.defaultValue,
                otherProps.defaultValue,
                otherProps.checked,
                otherProps.defaultChecked,
                otherProps.type,
                otherProps.name
              );
            }
          }
          for (
            internalInstance = 0;
            internalInstance < props.length;
            internalInstance++
          )
            (otherNode = props[internalInstance]),
              otherNode.form === target.form && updateValueIfChanged(otherNode);
        }
        break a;
      case "textarea":
        updateTextarea(target, props.value, props.defaultValue);
        break a;
      case "select":
        (internalInstance = props.value),
          null != internalInstance &&
            updateOptions(target, !!props.multiple, internalInstance, !1);
    }
  }
}
function enqueueStateRestore(target) {
  restoreTarget
    ? restoreQueue
      ? restoreQueue.push(target)
      : (restoreQueue = [target])
    : (restoreTarget = target);
}
function restoreStateIfNeeded() {
  if (restoreTarget) {
    var target = restoreTarget,
      queuedTargets = restoreQueue;
    restoreQueue = restoreTarget = null;
    restoreStateOfTarget(target);
    if (queuedTargets)
      for (target = 0; target < queuedTargets.length; target++)
        restoreStateOfTarget(queuedTargets[target]);
  }
}
var emptyContextObject = {},
  contextStackCursor = createCursor(emptyContextObject),
  didPerformWorkStackCursor = createCursor(!1),
  previousContext = emptyContextObject;
function getMaskedContext(workInProgress, unmaskedContext) {
  var contextTypes = workInProgress.type.contextTypes;
  if (!contextTypes) return emptyContextObject;
  var instance = workInProgress.stateNode;
  if (
    instance &&
    instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext
  )
    return instance.__reactInternalMemoizedMaskedChildContext;
  var context = {},
    key;
  for (key in contextTypes) context[key] = unmaskedContext[key];
  instance &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext =
      unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
  return context;
}
function isContextProvider(type) {
  type = type.childContextTypes;
  return null !== type && void 0 !== type;
}
function popContext() {
  pop(didPerformWorkStackCursor);
  pop(contextStackCursor);
}
function pushTopLevelContextObject(fiber, context, didChange) {
  if (contextStackCursor.current !== emptyContextObject)
    throw Error(formatProdErrorMessage(168));
  push(contextStackCursor, context);
  push(didPerformWorkStackCursor, didChange);
}
function processChildContext(fiber, type, parentContext) {
  var instance = fiber.stateNode;
  type = type.childContextTypes;
  if ("function" !== typeof instance.getChildContext) return parentContext;
  instance = instance.getChildContext();
  for (var contextKey in instance)
    if (!(contextKey in type))
      throw Error(
        formatProdErrorMessage(
          108,
          getComponentNameFromFiber(fiber) || "Unknown",
          contextKey
        )
      );
  return assign({}, parentContext, instance);
}
function pushContextProvider(workInProgress) {
  workInProgress =
    ((workInProgress = workInProgress.stateNode) &&
      workInProgress.__reactInternalMemoizedMergedChildContext) ||
    emptyContextObject;
  previousContext = contextStackCursor.current;
  push(contextStackCursor, workInProgress);
  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current);
  return !0;
}
function invalidateContextProvider(workInProgress, type, didChange) {
  var instance = workInProgress.stateNode;
  if (!instance) throw Error(formatProdErrorMessage(169));
  didChange
    ? ((workInProgress = processChildContext(
        workInProgress,
        type,
        previousContext
      )),
      (instance.__reactInternalMemoizedMergedChildContext = workInProgress),
      pop(didPerformWorkStackCursor),
      pop(contextStackCursor),
      push(contextStackCursor, workInProgress))
    : pop(didPerformWorkStackCursor);
  push(didPerformWorkStackCursor, didChange);
}
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  forkStack = [],
  forkStackIndex = 0,
  treeForkProvider = null,
  treeForkCount = 0,
  idStack = [],
  idStackIndex = 0,
  treeContextProvider = null,
  treeContextId = 1,
  treeContextOverflow = "";
function pushTreeFork(workInProgress, totalChildren) {
  forkStack[forkStackIndex++] = treeForkCount;
  forkStack[forkStackIndex++] = treeForkProvider;
  treeForkProvider = workInProgress;
  treeForkCount = totalChildren;
}
function pushTreeId(workInProgress, totalChildren, index) {
  idStack[idStackIndex++] = treeContextId;
  idStack[idStackIndex++] = treeContextOverflow;
  idStack[idStackIndex++] = treeContextProvider;
  treeContextProvider = workInProgress;
  var baseIdWithLeadingBit = treeContextId;
  workInProgress = treeContextOverflow;
  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
  baseIdWithLeadingBit &= ~(1 << baseLength);
  index += 1;
  var length = 32 - clz32(totalChildren) + baseLength;
  if (30 < length) {
    var numberOfOverflowBits = baseLength - (baseLength % 5);
    length = (
      baseIdWithLeadingBit &
      ((1 << numberOfOverflowBits) - 1)
    ).toString(32);
    baseIdWithLeadingBit >>= numberOfOverflowBits;
    baseLength -= numberOfOverflowBits;
    treeContextId =
      (1 << (32 - clz32(totalChildren) + baseLength)) |
      (index << baseLength) |
      baseIdWithLeadingBit;
    treeContextOverflow = length + workInProgress;
  } else
    (treeContextId =
      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
      (treeContextOverflow = workInProgress);
}
function pushMaterializedTreeId(workInProgress) {
  null !== workInProgress.return &&
    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
}
function popTreeContext(workInProgress) {
  for (; workInProgress === treeForkProvider; )
    (treeForkProvider = forkStack[--forkStackIndex]),
      (forkStack[forkStackIndex] = null),
      (treeForkCount = forkStack[--forkStackIndex]),
      (forkStack[forkStackIndex] = null);
  for (; workInProgress === treeContextProvider; )
    (treeContextProvider = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null),
      (treeContextOverflow = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null),
      (treeContextId = idStack[--idStackIndex]),
      (idStack[idStackIndex] = null);
}
var hydrationParentFiber = null,
  nextHydratableInstance = null,
  isHydrating = !1,
  hydrationErrors = null,
  rootOrSingletonContext = !1;
function deleteHydratableInstance(returnFiber, instance) {
  var fiber = createFiber(5, null, null, 0);
  fiber.elementType = "DELETED";
  fiber.stateNode = instance;
  fiber.return = returnFiber;
  instance = returnFiber.deletions;
  null === instance
    ? ((returnFiber.deletions = [fiber]), (returnFiber.flags |= 16))
    : instance.push(fiber);
}
function insertNonHydratedInstance(returnFiber, fiber) {
  fiber.flags = (fiber.flags & -4097) | 2;
}
function tryHydrateInstance(fiber, nextInstance) {
  nextInstance = canHydrateInstance(
    nextInstance,
    fiber.type,
    fiber.pendingProps,
    rootOrSingletonContext
  );
  return null !== nextInstance
    ? ((fiber.stateNode = nextInstance),
      (hydrationParentFiber = fiber),
      (nextHydratableInstance = getNextHydratable(nextInstance.firstChild)),
      (rootOrSingletonContext = !1),
      !0)
    : !1;
}
function tryHydrateText(fiber, nextInstance) {
  nextInstance = canHydrateTextInstance(
    nextInstance,
    fiber.pendingProps,
    rootOrSingletonContext
  );
  return null !== nextInstance
    ? ((fiber.stateNode = nextInstance),
      (hydrationParentFiber = fiber),
      (nextHydratableInstance = null),
      !0)
    : !1;
}
function tryHydrateSuspense(fiber, nextInstance) {
  a: {
    var instance = nextInstance;
    for (nextInstance = rootOrSingletonContext; 8 !== instance.nodeType; ) {
      if (!nextInstance) {
        nextInstance = null;
        break a;
      }
      instance = getNextHydratableSibling(instance);
      if (null === instance) {
        nextInstance = null;
        break a;
      }
    }
    nextInstance = instance;
  }
  return null !== nextInstance
    ? ((instance =
        null !== treeContextProvider
          ? { id: treeContextId, overflow: treeContextOverflow }
          : null),
      (fiber.memoizedState = {
        dehydrated: nextInstance,
        treeContext: instance,
        retryLane: 536870912
      }),
      (instance = createFiber(18, null, null, 0)),
      (instance.stateNode = nextInstance),
      (instance.return = fiber),
      (fiber.child = instance),
      (hydrationParentFiber = fiber),
      (nextHydratableInstance = null),
      !0)
    : !1;
}
function shouldClientRenderOnMismatch(fiber) {
  return 0 !== (fiber.mode & 1) && 0 === (fiber.flags & 128);
}
function throwOnHydrationMismatch() {
  throw Error(formatProdErrorMessage(418));
}
function popToNextHostParent(fiber) {
  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
    switch (hydrationParentFiber.tag) {
      case 3:
      case 27:
        rootOrSingletonContext = !0;
        return;
      case 5:
      case 13:
        rootOrSingletonContext = !1;
        return;
      default:
        hydrationParentFiber = hydrationParentFiber.return;
    }
}
function popHydrationState(fiber) {
  if (fiber !== hydrationParentFiber) return !1;
  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = !0), !1;
  var shouldClear = !1,
    JSCompiler_temp;
  if ((JSCompiler_temp = 3 !== fiber.tag && 27 !== fiber.tag)) {
    if ((JSCompiler_temp = 5 === fiber.tag))
      (JSCompiler_temp = fiber.type),
        (JSCompiler_temp =
          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
          shouldSetTextContent(fiber.type, fiber.memoizedProps));
    JSCompiler_temp = !JSCompiler_temp;
  }
  JSCompiler_temp && (shouldClear = !0);
  if (shouldClear && (shouldClear = nextHydratableInstance))
    if (shouldClientRenderOnMismatch(fiber))
      warnIfUnhydratedTailNodes(), throwOnHydrationMismatch();
    else
      for (; shouldClear; )
        deleteHydratableInstance(fiber, shouldClear),
          (shouldClear = getNextHydratableSibling(shouldClear));
  popToNextHostParent(fiber);
  if (13 === fiber.tag) {
    fiber = fiber.memoizedState;
    fiber = null !== fiber ? fiber.dehydrated : null;
    if (!fiber) throw Error(formatProdErrorMessage(317));
    a: {
      fiber = fiber.nextSibling;
      for (shouldClear = 0; fiber; ) {
        if (8 === fiber.nodeType)
          if (((JSCompiler_temp = fiber.data), "/$" === JSCompiler_temp)) {
            if (0 === shouldClear) {
              nextHydratableInstance = getNextHydratableSibling(fiber);
              break a;
            }
            shouldClear--;
          } else
            ("$" !== JSCompiler_temp &&
              "$!" !== JSCompiler_temp &&
              "$?" !== JSCompiler_temp) ||
              shouldClear++;
        fiber = fiber.nextSibling;
      }
      nextHydratableInstance = null;
    }
  } else
    nextHydratableInstance = hydrationParentFiber
      ? getNextHydratableSibling(fiber.stateNode)
      : null;
  return !0;
}
function warnIfUnhydratedTailNodes() {
  for (var nextInstance = nextHydratableInstance; nextInstance; )
    nextInstance = getNextHydratableSibling(nextInstance);
}
function resetHydrationState() {
  nextHydratableInstance = hydrationParentFiber = null;
  isHydrating = !1;
}
function queueHydrationError(error) {
  null === hydrationErrors
    ? (hydrationErrors = [error])
    : hydrationErrors.push(error);
}
var concurrentQueues = [],
  concurrentQueuesIndex = 0,
  concurrentlyUpdatedLanes = 0;
function finishQueueingConcurrentUpdates() {
  for (
    var endIndex = concurrentQueuesIndex,
      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
    i < endIndex;

  ) {
    var fiber = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var queue = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var update = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var lane = concurrentQueues[i];
    concurrentQueues[i++] = null;
    if (null !== queue && null !== update) {
      var pending = queue.pending;
      null === pending
        ? (update.next = update)
        : ((update.next = pending.next), (pending.next = update));
      queue.pending = update;
    }
    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
  }
}
function enqueueUpdate$1(fiber, queue, update, lane) {
  concurrentQueues[concurrentQueuesIndex++] = fiber;
  concurrentQueues[concurrentQueuesIndex++] = queue;
  concurrentQueues[concurrentQueuesIndex++] = update;
  concurrentQueues[concurrentQueuesIndex++] = lane;
  concurrentlyUpdatedLanes |= lane;
  fiber.lanes |= lane;
  fiber = fiber.alternate;
  null !== fiber && (fiber.lanes |= lane);
}
function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
  enqueueUpdate$1(fiber, queue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function enqueueConcurrentRenderForLane(fiber, lane) {
  enqueueUpdate$1(fiber, null, null, lane);
  return getRootForUpdatedFiber(fiber);
}
function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
  sourceFiber.lanes |= lane;
  var alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  for (var isHidden = !1, parent = sourceFiber.return; null !== parent; )
    (parent.childLanes |= lane),
      (alternate = parent.alternate),
      null !== alternate && (alternate.childLanes |= lane),
      22 === parent.tag &&
        ((sourceFiber = parent.stateNode),
        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)),
      (sourceFiber = parent),
      (parent = parent.return);
  isHidden &&
    null !== update &&
    3 === sourceFiber.tag &&
    ((parent = sourceFiber.stateNode),
    (isHidden = 31 - clz32(lane)),
    (parent = parent.hiddenUpdates),
    (sourceFiber = parent[isHidden]),
    null === sourceFiber
      ? (parent[isHidden] = [update])
      : sourceFiber.push(update),
    (update.lane = lane | 536870912));
}
function getRootForUpdatedFiber(sourceFiber) {
  throwIfInfiniteUpdateLoopDetected();
  for (var parent = sourceFiber.return; null !== parent; )
    (sourceFiber = parent), (parent = sourceFiber.return);
  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
}
var firstScheduledRoot = null,
  lastScheduledRoot = null,
  didScheduleMicrotask = !1,
  mightHavePendingSyncWork = !1,
  isFlushingWork = !1,
  currentEventTransitionLane = 0;
function ensureRootIsScheduled(root) {
  root !== lastScheduledRoot &&
    null === root.next &&
    (null === lastScheduledRoot
      ? (firstScheduledRoot = lastScheduledRoot = root)
      : (lastScheduledRoot = lastScheduledRoot.next = root));
  mightHavePendingSyncWork = !0;
  didScheduleMicrotask ||
    ((didScheduleMicrotask = !0),
    scheduleImmediateTask(processRootScheduleInMicrotask));
  enableDeferRootSchedulingToMicrotask ||
    scheduleTaskForRootDuringMicrotask(root, now$1());
}
function flushSyncWorkAcrossRoots_impl(onlyLegacy) {
  if (!isFlushingWork && mightHavePendingSyncWork) {
    var errors = null;
    isFlushingWork = !0;
    do {
      var didPerformSomeWork = !1;
      for (var root$29 = firstScheduledRoot; null !== root$29; ) {
        if (!onlyLegacy || 0 === root$29.tag) {
          var workInProgressRootRenderLanes$31 = workInProgressRootRenderLanes,
            nextLanes = getNextLanes(
              root$29,
              root$29 === workInProgressRoot
                ? workInProgressRootRenderLanes$31
                : 0
            );
          if (0 !== (nextLanes & 3))
            try {
              didPerformSomeWork = !0;
              workInProgressRootRenderLanes$31 = root$29;
              if (0 !== (executionContext & 6))
                throw Error(formatProdErrorMessage(327));
              if (!flushPassiveEffects()) {
                currentUpdateIsNested = nestedUpdateScheduled;
                nestedUpdateScheduled = !1;
                var exitStatus = renderRootSync(
                  workInProgressRootRenderLanes$31,
                  nextLanes
                );
                if (
                  0 !== workInProgressRootRenderLanes$31.tag &&
                  2 === exitStatus
                ) {
                  var originallyAttemptedLanes = nextLanes,
                    errorRetryLanes = getLanesToRetrySynchronouslyOnError(
                      workInProgressRootRenderLanes$31,
                      originallyAttemptedLanes
                    );
                  0 !== errorRetryLanes &&
                    ((nextLanes = errorRetryLanes),
                    (exitStatus = recoverFromConcurrentError(
                      workInProgressRootRenderLanes$31,
                      originallyAttemptedLanes,
                      errorRetryLanes
                    )));
                }
                if (1 === exitStatus)
                  throw (
                    ((originallyAttemptedLanes = workInProgressRootFatalError),
                    prepareFreshStack(workInProgressRootRenderLanes$31, 0),
                    markRootSuspended(
                      workInProgressRootRenderLanes$31,
                      nextLanes,
                      0
                    ),
                    ensureRootIsScheduled(workInProgressRootRenderLanes$31),
                    originallyAttemptedLanes)
                  );
                6 === exitStatus
                  ? markRootSuspended(
                      workInProgressRootRenderLanes$31,
                      nextLanes,
                      workInProgressDeferredLane
                    )
                  : ((workInProgressRootRenderLanes$31.finishedWork =
                      workInProgressRootRenderLanes$31.current.alternate),
                    (workInProgressRootRenderLanes$31.finishedLanes =
                      nextLanes),
                    commitRoot(
                      workInProgressRootRenderLanes$31,
                      workInProgressRootRecoverableErrors,
                      workInProgressTransitions,
                      workInProgressRootDidIncludeRecursiveRenderUpdate,
                      workInProgressDeferredLane
                    ));
              }
              ensureRootIsScheduled(workInProgressRootRenderLanes$31);
            } catch (error) {
              null === errors ? (errors = [error]) : errors.push(error);
            }
        }
        root$29 = root$29.next;
      }
    } while (didPerformSomeWork);
    isFlushingWork = !1;
    if (null !== errors) {
      if (1 < errors.length) {
        if ("function" === typeof AggregateError)
          throw new AggregateError(errors);
        for (onlyLegacy = 1; onlyLegacy < errors.length; onlyLegacy++)
          scheduleImmediateTask(throwError.bind(null, errors[onlyLegacy]));
      }
      throw errors[0];
    }
  }
}
function throwError(error) {
  throw error;
}
function processRootScheduleInMicrotask() {
  mightHavePendingSyncWork = didScheduleMicrotask = !1;
  for (
    var currentTime = now$1(), prev = null, root = firstScheduledRoot;
    null !== root;

  ) {
    var next = root.next;
    if (0 !== currentEventTransitionLane && shouldAttemptEagerTransition()) {
      var root$jscomp$0 = root,
        lane = currentEventTransitionLane;
      root$jscomp$0.pendingLanes |= 2;
      root$jscomp$0.entangledLanes |= 2;
      root$jscomp$0.entanglements[1] |= lane;
    }
    root$jscomp$0 = scheduleTaskForRootDuringMicrotask(root, currentTime);
    0 === root$jscomp$0
      ? ((root.next = null),
        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
        null === next && (lastScheduledRoot = prev))
      : ((prev = root),
        0 !== (root$jscomp$0 & 3) && (mightHavePendingSyncWork = !0));
    root = next;
  }
  currentEventTransitionLane = 0;
  flushSyncWorkAcrossRoots_impl(!1);
}
function scheduleTaskForRootDuringMicrotask(root, currentTime) {
  var pendingLanes = root.pendingLanes,
    suspendedLanes = root.suspendedLanes,
    pingedLanes = root.pingedLanes,
    expirationTimes = root.expirationTimes;
  for (
    pendingLanes = enableRetryLaneExpiration
      ? pendingLanes
      : pendingLanes & -62914561;
    0 < pendingLanes;

  ) {
    var index$4 = 31 - clz32(pendingLanes),
      lane = 1 << index$4,
      expirationTime = expirationTimes[index$4];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
        expirationTimes[index$4] = computeExpirationTime(lane, currentTime);
    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
    pendingLanes &= ~lane;
  }
  currentTime = workInProgressRoot;
  suspendedLanes = workInProgressRootRenderLanes;
  suspendedLanes = getNextLanes(
    root,
    root === currentTime ? suspendedLanes : 0
  );
  pingedLanes = root.callbackNode;
  if (
    0 === suspendedLanes ||
    (root === currentTime && 2 === workInProgressSuspendedReason) ||
    null !== root.cancelPendingCommit
  )
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackNode = null),
      (root.callbackPriority = 0)
    );
  if (0 !== (suspendedLanes & 3))
    return (
      null !== pingedLanes &&
        null !== pingedLanes &&
        cancelCallback$1(pingedLanes),
      (root.callbackPriority = 2),
      (root.callbackNode = null),
      2
    );
  currentTime = suspendedLanes & -suspendedLanes;
  if (currentTime === root.callbackPriority) return currentTime;
  null !== pingedLanes && cancelCallback$1(pingedLanes);
  switch (lanesToEventPriority(suspendedLanes)) {
    case 2:
      suspendedLanes = ImmediatePriority;
      break;
    case 8:
      suspendedLanes = UserBlockingPriority;
      break;
    case 32:
      suspendedLanes = NormalPriority$1;
      break;
    case 268435456:
      suspendedLanes = IdlePriority;
      break;
    default:
      suspendedLanes = NormalPriority$1;
  }
  pingedLanes = performConcurrentWorkOnRoot.bind(null, root);
  suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
  root.callbackPriority = currentTime;
  root.callbackNode = suspendedLanes;
  return currentTime;
}
function scheduleImmediateTask(cb) {
  scheduleMicrotask(function () {
    0 !== (executionContext & 6)
      ? scheduleCallback$3(ImmediatePriority, cb)
      : cb();
  });
}
function requestTransitionLane() {
  0 === currentEventTransitionLane &&
    (currentEventTransitionLane = claimNextTransitionLane());
  return currentEventTransitionLane;
}
var currentEntangledListeners = null,
  currentEntangledPendingCount = 0,
  currentEntangledLane = 0,
  currentEntangledActionThenable = null;
function entangleAsyncAction(transition, thenable) {
  if (null === currentEntangledListeners) {
    var entangledListeners = (currentEntangledListeners = []);
    currentEntangledPendingCount = 0;
    currentEntangledLane = requestTransitionLane();
    currentEntangledActionThenable = {
      status: "pending",
      value: void 0,
      then: function (resolve) {
        entangledListeners.push(resolve);
      }
    };
  }
  currentEntangledPendingCount++;
  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
  return thenable;
}
function pingEngtangledActionScope() {
  if (
    null !== currentEntangledListeners &&
    0 === --currentEntangledPendingCount
  ) {
    null !== currentEntangledActionThenable &&
      (currentEntangledActionThenable.status = "fulfilled");
    var listeners = currentEntangledListeners;
    currentEntangledListeners = null;
    currentEntangledLane = 0;
    currentEntangledActionThenable = null;
    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
  }
}
function chainThenableValue(thenable, result) {
  var listeners = [],
    thenableWithOverride = {
      status: "pending",
      value: null,
      reason: null,
      then: function (resolve) {
        listeners.push(resolve);
      }
    };
  thenable.then(
    function () {
      thenableWithOverride.status = "fulfilled";
      thenableWithOverride.value = result;
      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
    },
    function (error) {
      thenableWithOverride.status = "rejected";
      thenableWithOverride.reason = error;
      for (error = 0; error < listeners.length; error++)
        (0, listeners[error])(void 0);
    }
  );
  return thenableWithOverride;
}
var hasForceUpdate = !1;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function cloneUpdateQueue(current, workInProgress) {
  current = current.updateQueue;
  workInProgress.updateQueue === current &&
    (workInProgress.updateQueue = {
      baseState: current.baseState,
      firstBaseUpdate: current.firstBaseUpdate,
      lastBaseUpdate: current.lastBaseUpdate,
      shared: current.shared,
      callbacks: null
    });
}
function createUpdate(lane) {
  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
}
function enqueueUpdate(fiber, update, lane) {
  var updateQueue = fiber.updateQueue;
  if (null === updateQueue) return null;
  updateQueue = updateQueue.shared;
  if (0 !== (executionContext & 2)) {
    var pending = updateQueue.pending;
    null === pending
      ? (update.next = update)
      : ((update.next = pending.next), (pending.next = update));
    updateQueue.pending = update;
    update = getRootForUpdatedFiber(fiber);
    markUpdateLaneFromFiberToRoot(fiber, null, lane);
    return update;
  }
  enqueueUpdate$1(fiber, updateQueue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function entangleTransitions(root, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194176))) {
    var queueLanes = fiber.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root, lane);
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  var queue = workInProgress.updateQueue,
    current = workInProgress.alternate;
  if (
    null !== current &&
    ((current = current.updateQueue), queue === current)
  ) {
    var newFirst = null,
      newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        var clone = {
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: null,
          next: null
        };
        null === newLast
          ? (newFirst = newLast = clone)
          : (newLast = newLast.next = clone);
        queue = queue.next;
      } while (null !== queue);
      null === newLast
        ? (newFirst = newLast = capturedUpdate)
        : (newLast = newLast.next = capturedUpdate);
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      callbacks: current.callbacks
    };
    workInProgress.updateQueue = queue;
    return;
  }
  workInProgress = queue.lastBaseUpdate;
  null === workInProgress
    ? (queue.firstBaseUpdate = capturedUpdate)
    : (workInProgress.next = capturedUpdate);
  queue.lastBaseUpdate = capturedUpdate;
}
var didReadFromEntangledAsyncAction = !1;
function suspendIfUpdateReadFromEntangledAsyncAction() {
  if (didReadFromEntangledAsyncAction) {
    var entangledActionThenable = currentEntangledActionThenable;
    if (null !== entangledActionThenable) throw entangledActionThenable;
  }
}
function processUpdateQueue(
  workInProgress$jscomp$0,
  props,
  instance$jscomp$0,
  renderLanes
) {
  didReadFromEntangledAsyncAction = !1;
  var queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = !1;
  var firstBaseUpdate = queue.firstBaseUpdate,
    lastBaseUpdate = queue.lastBaseUpdate,
    pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue,
      firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    null === lastBaseUpdate
      ? (firstBaseUpdate = firstPendingUpdate)
      : (lastBaseUpdate.next = firstPendingUpdate);
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current &&
      ((current = current.updateQueue),
      (pendingQueue = current.lastBaseUpdate),
      pendingQueue !== lastBaseUpdate &&
        (null === pendingQueue
          ? (current.firstBaseUpdate = firstPendingUpdate)
          : (pendingQueue.next = firstPendingUpdate),
        (current.lastBaseUpdate = lastPendingUpdate)));
  }
  if (null !== firstBaseUpdate) {
    var newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      var updateLane = pendingQueue.lane & -536870913,
        isHiddenUpdate = updateLane !== pendingQueue.lane;
      if (
        isHiddenUpdate
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        0 !== updateLane &&
          updateLane === currentEntangledLane &&
          (didReadFromEntangledAsyncAction = !0);
        null !== current &&
          (current = current.next =
            {
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
        a: {
          var workInProgress = workInProgress$jscomp$0,
            update = pendingQueue;
          updateLane = props;
          var instance = instance$jscomp$0;
          switch (update.tag) {
            case 1:
              workInProgress = update.payload;
              if ("function" === typeof workInProgress) {
                newState = workInProgress.call(instance, newState, updateLane);
                break a;
              }
              newState = workInProgress;
              break a;
            case 3:
              workInProgress.flags = (workInProgress.flags & -65537) | 128;
            case 0:
              workInProgress = update.payload;
              updateLane =
                "function" === typeof workInProgress
                  ? workInProgress.call(instance, newState, updateLane)
                  : workInProgress;
              if (null === updateLane || void 0 === updateLane) break a;
              newState = assign({}, newState, updateLane);
              break a;
            case 2:
              hasForceUpdate = !0;
          }
        }
        updateLane = pendingQueue.callback;
        null !== updateLane &&
          ((workInProgress$jscomp$0.flags |= 64),
          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
          (isHiddenUpdate = queue.callbacks),
          null === isHiddenUpdate
            ? (queue.callbacks = [updateLane])
            : isHiddenUpdate.push(updateLane));
      } else
        (isHiddenUpdate = {
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }),
          null === current
            ? ((firstPendingUpdate = current = isHiddenUpdate),
              (lastPendingUpdate = newState))
            : (current = current.next = isHiddenUpdate),
          (lastBaseUpdate |= updateLane);
      pendingQueue = pendingQueue.next;
      if (null === pendingQueue)
        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
          break;
        else
          (isHiddenUpdate = pendingQueue),
            (pendingQueue = isHiddenUpdate.next),
            (isHiddenUpdate.next = null),
            (queue.lastBaseUpdate = isHiddenUpdate),
            (queue.shared.pending = null);
    } while (1);
    null === current && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    null === firstBaseUpdate && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function callCallback(callback, context) {
  if ("function" !== typeof callback)
    throw Error(formatProdErrorMessage(191, callback));
  callback.call(context);
}
function commitCallbacks(updateQueue, context) {
  var callbacks = updateQueue.callbacks;
  if (null !== callbacks)
    for (
      updateQueue.callbacks = null, updateQueue = 0;
      updateQueue < callbacks.length;
      updateQueue++
    )
      callCallback(callbacks[updateQueue], context);
}
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return !0;
  if (
    "object" !== typeof objA ||
    null === objA ||
    "object" !== typeof objB ||
    null === objB
  )
    return !1;
  var keysA = Object.keys(objA),
    keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return !1;
  for (keysB = 0; keysB < keysA.length; keysB++) {
    var currentKey = keysA[keysB];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !objectIs(objA[currentKey], objB[currentKey])
    )
      return !1;
  }
  return !0;
}
var SuspenseException = Error(formatProdErrorMessage(460)),
  SuspenseyCommitException = Error(formatProdErrorMessage(474)),
  noopSuspenseyCommitThenable = { then: function () {} };
function isThenableResolved(thenable) {
  thenable = thenable.status;
  return "fulfilled" === thenable || "rejected" === thenable;
}
function noop$2() {}
function trackUsedThenable(thenableState, thenable, index) {
  index = thenableState[index];
  void 0 === index
    ? thenableState.push(thenable)
    : index !== thenable && (thenable.then(noop$2, noop$2), (thenable = index));
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      thenableState = thenable.reason;
      if (thenableState === SuspenseException)
        throw Error(formatProdErrorMessage(483));
      throw thenableState;
    default:
      if ("string" === typeof thenable.status) thenable.then(noop$2, noop$2);
      else {
        thenableState = workInProgressRoot;
        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
          throw Error(formatProdErrorMessage(482));
        thenableState = thenable;
        thenableState.status = "pending";
        thenableState.then(
          function (fulfilledValue) {
            if ("pending" === thenable.status) {
              var fulfilledThenable = thenable;
              fulfilledThenable.status = "fulfilled";
              fulfilledThenable.value = fulfilledValue;
            }
          },
          function (error) {
            if ("pending" === thenable.status) {
              var rejectedThenable = thenable;
              rejectedThenable.status = "rejected";
              rejectedThenable.reason = error;
            }
          }
        );
      }
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          thenableState = thenable.reason;
          if (thenableState === SuspenseException)
            throw Error(formatProdErrorMessage(483));
          throw thenableState;
      }
      suspendedThenable = thenable;
      throw SuspenseException;
  }
}
var suspendedThenable = null;
function getSuspendedThenable() {
  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
  var thenable = suspendedThenable;
  suspendedThenable = null;
  return thenable;
}
var thenableState$1 = null,
  thenableIndexCounter$1 = 0;
function unwrapThenable(thenable) {
  var index = thenableIndexCounter$1;
  thenableIndexCounter$1 += 1;
  null === thenableState$1 && (thenableState$1 = []);
  return trackUsedThenable(thenableState$1, thenable, index);
}
function convertStringRefToCallbackRef(
  returnFiber,
  current,
  element,
  mixedRef
) {
  function ref(value) {
    var refs = inst.refs;
    null === value ? delete refs[stringRef] : (refs[stringRef] = value);
  }
  returnFiber = element._owner;
  if (!returnFiber) {
    if ("string" !== typeof mixedRef) throw Error(formatProdErrorMessage(284));
    throw Error(formatProdErrorMessage(290, mixedRef));
  }
  if (1 !== returnFiber.tag) throw Error(formatProdErrorMessage(309));
  var stringRef = "" + mixedRef,
    inst = returnFiber.stateNode;
  if (!inst) throw Error(formatProdErrorMessage(147, stringRef));
  if (
    null !== current &&
    null !== current.ref &&
    "function" === typeof current.ref &&
    current.ref._stringRef === stringRef
  )
    return current.ref;
  ref._stringRef = stringRef;
  return ref;
}
function coerceRef(returnFiber, current, workInProgress, element) {
  var mixedRef = element.ref;
  returnFiber =
    null !== mixedRef &&
    "function" !== typeof mixedRef &&
    "object" !== typeof mixedRef
      ? convertStringRefToCallbackRef(returnFiber, current, element, mixedRef)
      : mixedRef;
  workInProgress.ref = returnFiber;
}
function throwOnInvalidObjectType(returnFiber, newChild) {
  returnFiber = Object.prototype.toString.call(newChild);
  throw Error(
    formatProdErrorMessage(
      31,
      "[object Object]" === returnFiber
        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
        : returnFiber
    )
  );
}
function resolveLazy(lazyType) {
  var init = lazyType._init;
  return init(lazyType._payload);
}
function createChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      var deletions = returnFiber.deletions;
      null === deletions
        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
        : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return null;
  }
  function mapRemainingChildren(returnFiber, currentFirstChild) {
    for (returnFiber = new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key
        ? returnFiber.set(currentFirstChild.key, currentFirstChild)
        : returnFiber.set(currentFirstChild.index, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return returnFiber;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects)
      return (newFiber.flags |= 1048576), lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return (
        (newIndex = newIndex.index),
        newIndex < lastPlacedIndex
          ? ((newFiber.flags |= 33554434), lastPlacedIndex)
          : newIndex
      );
    newFiber.flags |= 33554434;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects &&
      null === newFiber.alternate &&
      (newFiber.flags |= 33554434);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (null === current || 6 !== current.tag)
      return (
        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return updateFragment(
        returnFiber,
        current,
        element.props.children,
        lanes,
        element.key
      );
    if (
      null !== current &&
      (current.elementType === elementType ||
        ("object" === typeof elementType &&
          null !== elementType &&
          elementType.$$typeof === REACT_LAZY_TYPE &&
          resolveLazy(elementType) === current.type))
    )
      return (
        (lanes = useFiber(current, element.props)),
        coerceRef(returnFiber, current, lanes, element),
        (lanes.return = returnFiber),
        lanes
      );
    lanes = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    coerceRef(returnFiber, current, lanes, element);
    lanes.return = returnFiber;
    return lanes;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (
      null === current ||
      4 !== current.tag ||
      current.stateNode.containerInfo !== portal.containerInfo ||
      current.stateNode.implementation !== portal.implementation
    )
      return (
        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (null === current || 7 !== current.tag)
      return (
        (current = createFiberFromFragment(
          fragment,
          returnFiber.mode,
          lanes,
          key
        )),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild
    )
      return (
        (newChild = createFiberFromText(
          "" + newChild,
          returnFiber.mode,
          lanes
        )),
        (newChild.return = returnFiber),
        newChild
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            )),
            coerceRef(returnFiber, null, lanes, newChild),
            (lanes.return = returnFiber),
            lanes
          );
        case REACT_PORTAL_TYPE:
          return (
            (newChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (newChild.return = returnFiber),
            newChild
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          return createChild(returnFiber, init(newChild._payload), lanes);
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (newChild = createFiberFromFragment(
            newChild,
            returnFiber.mode,
            lanes,
            null
          )),
          (newChild.return = returnFiber),
          newChild
        );
      if ("function" === typeof newChild.then)
        return createChild(returnFiber, unwrapThenable(newChild), lanes);
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return createChild(
          returnFiber,
          readContextDuringReconcilation(returnFiber, newChild, lanes),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    var key = null !== oldFiber ? oldFiber.key : null;
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild
    )
      return null !== key
        ? null
        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return newChild.key === key
            ? updateElement(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_PORTAL_TYPE:
          return newChild.key === key
            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_LAZY_TYPE:
          return (
            (key = newChild._init),
            updateSlot(returnFiber, oldFiber, key(newChild._payload), lanes)
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return null !== key
          ? null
          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      if ("function" === typeof newChild.then)
        return updateSlot(
          returnFiber,
          oldFiber,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateSlot(
          returnFiber,
          oldFiber,
          readContextDuringReconcilation(returnFiber, newChild, lanes),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChild,
    lanes
  ) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild
    )
      return (
        (existingChildren = existingChildren.get(newIdx) || null),
        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updateElement(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_PORTAL_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updatePortal(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          return updateFromMap(
            existingChildren,
            returnFiber,
            newIdx,
            init(newChild._payload),
            lanes
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (existingChildren = existingChildren.get(newIdx) || null),
          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
        );
      if ("function" === typeof newChild.then)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return updateFromMap(
          existingChildren,
          returnFiber,
          newIdx,
          readContextDuringReconcilation(returnFiber, newChild, lanes),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null;
      null !== oldFiber && newIdx < newChildren.length;
      newIdx++
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        resultingFirstChild
      );
    if (null === oldFiber) {
      for (; newIdx < newChildren.length; newIdx++)
        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
          null !== oldFiber &&
            ((currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            )),
            null === previousNewFiber
              ? (resultingFirstChild = oldFiber)
              : (previousNewFiber.sibling = oldFiber),
            (previousNewFiber = oldFiber));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(returnFiber, oldFiber);
      newIdx < newChildren.length;
      newIdx++
    )
      (nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      )),
        null !== nextOldFiber &&
          (shouldTrackSideEffects &&
            null !== nextOldFiber.alternate &&
            oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ),
          (currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          )),
          null === previousNewFiber
            ? (resultingFirstChild = nextOldFiber)
            : (previousNewFiber.sibling = nextOldFiber),
          (previousNewFiber = nextOldFiber));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(
    returnFiber,
    currentFirstChild,
    newChildrenIterable,
    lanes
  ) {
    var iteratorFn = getIteratorFn(newChildrenIterable);
    if ("function" !== typeof iteratorFn)
      throw Error(formatProdErrorMessage(150));
    newChildrenIterable = iteratorFn.call(newChildrenIterable);
    if (null == newChildrenIterable) throw Error(formatProdErrorMessage(151));
    for (
      var previousNewFiber = (iteratorFn = null),
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null,
        step = newChildrenIterable.next();
      null !== oldFiber && !step.done;
      newIdx++, step = newChildrenIterable.next()
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (iteratorFn = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return (
        deleteRemainingChildren(returnFiber, oldFiber),
        isHydrating && pushTreeFork(returnFiber, newIdx),
        iteratorFn
      );
    if (null === oldFiber) {
      for (; !step.done; newIdx++, step = newChildrenIterable.next())
        (step = createChild(returnFiber, step.value, lanes)),
          null !== step &&
            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
            null === previousNewFiber
              ? (iteratorFn = step)
              : (previousNewFiber.sibling = step),
            (previousNewFiber = step));
      isHydrating && pushTreeFork(returnFiber, newIdx);
      return iteratorFn;
    }
    for (
      oldFiber = mapRemainingChildren(returnFiber, oldFiber);
      !step.done;
      newIdx++, step = newChildrenIterable.next()
    )
      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
        null !== step &&
          (shouldTrackSideEffects &&
            null !== step.alternate &&
            oldFiber.delete(null === step.key ? newIdx : step.key),
          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
          null === previousNewFiber
            ? (iteratorFn = step)
            : (previousNewFiber.sibling = step),
          (previousNewFiber = step));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    isHydrating && pushTreeFork(returnFiber, newIdx);
    return iteratorFn;
  }
  function reconcileChildFibersImpl(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes
  ) {
    "object" === typeof newChild &&
      null !== newChild &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      null === newChild.key &&
      (newChild = newChild.props.children);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          a: {
            for (
              var key = newChild.key, child = currentFirstChild;
              null !== child;

            ) {
              if (child.key === key) {
                key = newChild.type;
                if (key === REACT_FRAGMENT_TYPE) {
                  if (7 === child.tag) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    currentFirstChild = useFiber(
                      child,
                      newChild.props.children
                    );
                    currentFirstChild.return = returnFiber;
                    returnFiber = currentFirstChild;
                    break a;
                  }
                } else if (
                  child.elementType === key ||
                  ("object" === typeof key &&
                    null !== key &&
                    key.$$typeof === REACT_LAZY_TYPE &&
                    resolveLazy(key) === child.type)
                ) {
                  deleteRemainingChildren(returnFiber, child.sibling);
                  currentFirstChild = useFiber(child, newChild.props);
                  coerceRef(returnFiber, child, currentFirstChild, newChild);
                  currentFirstChild.return = returnFiber;
                  returnFiber = currentFirstChild;
                  break a;
                }
                deleteRemainingChildren(returnFiber, child);
                break;
              } else deleteChild(returnFiber, child);
              child = child.sibling;
            }
            newChild.type === REACT_FRAGMENT_TYPE
              ? ((currentFirstChild = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                )),
                (currentFirstChild.return = returnFiber),
                (returnFiber = currentFirstChild))
              : ((lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                )),
                coerceRef(returnFiber, currentFirstChild, lanes, newChild),
                (lanes.return = returnFiber),
                (returnFiber = lanes));
          }
          return placeSingleChild(returnFiber);
        case REACT_PORTAL_TYPE:
          a: {
            for (child = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === child)
                if (
                  4 === currentFirstChild.tag &&
                  currentFirstChild.stateNode.containerInfo ===
                    newChild.containerInfo &&
                  currentFirstChild.stateNode.implementation ===
                    newChild.implementation
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  currentFirstChild = useFiber(
                    currentFirstChild,
                    newChild.children || []
                  );
                  currentFirstChild.return = returnFiber;
                  returnFiber = currentFirstChild;
                  break a;
                } else {
                  deleteRemainingChildren(returnFiber, currentFirstChild);
                  break;
                }
              else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            currentFirstChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            );
            currentFirstChild.return = returnFiber;
            returnFiber = currentFirstChild;
          }
          return placeSingleChild(returnFiber);
        case REACT_LAZY_TYPE:
          return (
            (child = newChild._init),
            reconcileChildFibersImpl(
              returnFiber,
              currentFirstChild,
              child(newChild._payload),
              lanes
            )
          );
      }
      if (isArrayImpl(newChild))
        return reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if (getIteratorFn(newChild))
        return reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if ("function" === typeof newChild.then)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          unwrapThenable(newChild),
          lanes
        );
      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
        return reconcileChildFibersImpl(
          returnFiber,
          currentFirstChild,
          readContextDuringReconcilation(returnFiber, newChild, lanes),
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild
      ? ((newChild = "" + newChild),
        null !== currentFirstChild && 6 === currentFirstChild.tag
          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
            (currentFirstChild = useFiber(currentFirstChild, newChild)),
            (currentFirstChild.return = returnFiber),
            (returnFiber = currentFirstChild))
          : (deleteRemainingChildren(returnFiber, currentFirstChild),
            (currentFirstChild = createFiberFromText(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (currentFirstChild.return = returnFiber),
            (returnFiber = currentFirstChild)),
        placeSingleChild(returnFiber))
      : deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return function (returnFiber, currentFirstChild, newChild, lanes) {
    thenableIndexCounter$1 = 0;
    returnFiber = reconcileChildFibersImpl(
      returnFiber,
      currentFirstChild,
      newChild,
      lanes
    );
    thenableState$1 = null;
    return returnFiber;
  };
}
var reconcileChildFibers = createChildReconciler(!0),
  mountChildFibers = createChildReconciler(!1),
  currentTreeHiddenStackCursor = createCursor(null),
  prevEntangledRenderLanesCursor = createCursor(0);
function pushHiddenContext(fiber, context) {
  fiber = entangledRenderLanes;
  push(prevEntangledRenderLanesCursor, fiber);
  push(currentTreeHiddenStackCursor, context);
  entangledRenderLanes = fiber | context.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
}
function popHiddenContext() {
  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
  pop(currentTreeHiddenStackCursor);
  pop(prevEntangledRenderLanesCursor);
}
var suspenseHandlerStackCursor = createCursor(null),
  shellBoundary = null;
function pushPrimaryTreeSuspenseHandler(handler) {
  var current = handler.alternate,
    props = handler.pendingProps;
  push(suspenseStackCursor, suspenseStackCursor.current & 1);
  !0 !== props.unstable_avoidThisFallback ||
  (null !== current && null === currentTreeHiddenStackCursor.current)
    ? (push(suspenseHandlerStackCursor, handler),
      null === shellBoundary &&
        (null === current || null !== currentTreeHiddenStackCursor.current
          ? (shellBoundary = handler)
          : null !== current.memoizedState && (shellBoundary = handler)))
    : null === shellBoundary
    ? push(suspenseHandlerStackCursor, handler)
    : push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function pushOffscreenSuspenseHandler(fiber) {
  if (22 === fiber.tag) {
    if (
      (push(suspenseStackCursor, suspenseStackCursor.current),
      push(suspenseHandlerStackCursor, fiber),
      null === shellBoundary)
    ) {
      var current = fiber.alternate;
      null !== current &&
        null !== current.memoizedState &&
        (shellBoundary = fiber);
    }
  } else reuseSuspenseHandlerOnStack(fiber);
}
function reuseSuspenseHandlerOnStack() {
  push(suspenseStackCursor, suspenseStackCursor.current);
  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function popSuspenseHandler(fiber) {
  pop(suspenseHandlerStackCursor);
  shellBoundary === fiber && (shellBoundary = null);
  pop(suspenseStackCursor);
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (
        null !== state &&
        ((state = state.dehydrated),
        null === state || "$?" === state.data || "$!" === state.data)
      )
        return node;
    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
  ReactCurrentBatchConfig$3 = ReactSharedInternals.ReactCurrentBatchConfig,
  renderLanes = 0,
  currentlyRenderingFiber$1 = null,
  currentHook = null,
  workInProgressHook = null,
  didScheduleRenderPhaseUpdate = !1,
  didScheduleRenderPhaseUpdateDuringThisPass = !1,
  shouldDoubleInvokeUserFnsInHooksDEV = !1,
  localIdCounter = 0,
  thenableIndexCounter = 0,
  thenableState = null,
  globalClientIdCounter = 0;
function throwInvalidHookError() {
  throw Error(formatProdErrorMessage(321));
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (null === prevDeps) return !1;
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
  return !0;
}
function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderLanes
) {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber$1 = workInProgress;
  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = 0;
  ReactCurrentDispatcher$1.current =
    null === current || null === current.memoizedState
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  nextRenderLanes = Component(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  didScheduleRenderPhaseUpdateDuringThisPass &&
    (nextRenderLanes = renderWithHooksAgain(
      workInProgress,
      Component,
      props,
      secondArg
    ));
  finishRenderingHooks(current);
  return nextRenderLanes;
}
function finishRenderingHooks(current) {
  ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
  didScheduleRenderPhaseUpdate = !1;
  thenableIndexCounter = 0;
  thenableState = null;
  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
  enableLazyContextPropagation &&
    null !== current &&
    !didReceiveUpdate &&
    ((current = current.dependencies),
    null !== current &&
      checkIfContextChanged(current) &&
      (didReceiveUpdate = !0));
}
function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
  currentlyRenderingFiber$1 = workInProgress;
  var numberOfReRenders = 0;
  do {
    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
    thenableIndexCounter = 0;
    didScheduleRenderPhaseUpdateDuringThisPass = !1;
    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
    numberOfReRenders += 1;
    workInProgressHook = currentHook = null;
    workInProgress.updateQueue = null;
    ReactCurrentDispatcher$1.current = HooksDispatcherOnRerender;
    var children = Component(props, secondArg);
  } while (didScheduleRenderPhaseUpdateDuringThisPass);
  return children;
}
function TransitionAwareHostComponent() {
  var maybeThenable = ReactCurrentDispatcher$1.current.useState()[0];
  return "function" === typeof maybeThenable.then
    ? useThenable(maybeThenable)
    : maybeThenable;
}
function checkDidRenderIdHook() {
  var didRenderIdHook = 0 !== localIdCounter;
  localIdCounter = 0;
  return didRenderIdHook;
}
function bailoutHooks(current, workInProgress, lanes) {
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.flags &= -2053;
  current.lanes &= ~lanes;
}
function resetHooksOnUnwind(workInProgress) {
  if (didScheduleRenderPhaseUpdate) {
    for (
      workInProgress = workInProgress.memoizedState;
      null !== workInProgress;

    ) {
      var queue = workInProgress.queue;
      null !== queue && (queue.pending = null);
      workInProgress = workInProgress.next;
    }
    didScheduleRenderPhaseUpdate = !1;
  }
  renderLanes = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
  didScheduleRenderPhaseUpdateDuringThisPass = !1;
  thenableIndexCounter = localIdCounter = 0;
  thenableState = null;
}
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === workInProgressHook
    ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook)
    : (workInProgressHook = workInProgressHook.next = hook);
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (null === currentHook) {
    var nextCurrentHook = currentlyRenderingFiber$1.alternate;
    nextCurrentHook =
      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  var nextWorkInProgressHook =
    null === workInProgressHook
      ? currentlyRenderingFiber$1.memoizedState
      : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    (workInProgressHook = nextWorkInProgressHook),
      (currentHook = nextCurrentHook);
  else {
    if (null === nextCurrentHook) {
      if (null === currentlyRenderingFiber$1.alternate)
        throw Error(formatProdErrorMessage(467));
      throw Error(formatProdErrorMessage(310));
    }
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    null === workInProgressHook
      ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook =
          nextCurrentHook)
      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
  }
  return workInProgressHook;
}
var createFunctionComponentUpdateQueue;
createFunctionComponentUpdateQueue = function () {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
};
function useThenable(thenable) {
  var index = thenableIndexCounter;
  thenableIndexCounter += 1;
  null === thenableState && (thenableState = []);
  thenable = trackUsedThenable(thenableState, thenable, index);
  null === currentlyRenderingFiber$1.alternate &&
    (null === workInProgressHook
      ? null === currentlyRenderingFiber$1.memoizedState
      : null === workInProgressHook.next) &&
    (ReactCurrentDispatcher$1.current = HooksDispatcherOnMount);
  return thenable;
}
function use(usable) {
  if (null !== usable && "object" === typeof usable) {
    if ("function" === typeof usable.then) return useThenable(usable);
    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
  }
  throw Error(formatProdErrorMessage(438, String(usable)));
}
function useMemoCache(size) {
  var memoCache = null,
    updateQueue = currentlyRenderingFiber$1.updateQueue;
  null !== updateQueue && (memoCache = updateQueue.memoCache);
  if (null == memoCache) {
    var current = currentlyRenderingFiber$1.alternate;
    null !== current &&
      ((current = current.updateQueue),
      null !== current &&
        ((current = current.memoCache),
        null != current &&
          (memoCache = {
            data: current.data.map(function (array) {
              return array.slice();
            }),
            index: 0
          })));
  }
  null == memoCache && (memoCache = { data: [], index: 0 });
  null === updateQueue &&
    ((updateQueue = createFunctionComponentUpdateQueue()),
    (currentlyRenderingFiber$1.updateQueue = updateQueue));
  updateQueue.memoCache = memoCache;
  updateQueue = memoCache.data[memoCache.index];
  if (void 0 === updateQueue)
    for (
      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
      current < size;
      current++
    )
      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
  memoCache.index++;
  return updateQueue;
}
function basicStateReducer(state, action) {
  return "function" === typeof action ? action(state) : action;
}
function updateReducer(reducer) {
  var hook = updateWorkInProgressHook();
  return updateReducerImpl(hook, currentHook, reducer);
}
function updateReducerImpl(hook, current, reducer) {
  var queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var baseQueue = hook.baseQueue,
    pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  pendingQueue = hook.baseState;
  if (null === baseQueue) hook.memoizedState = pendingQueue;
  else {
    current = baseQueue.next;
    var newBaseQueueFirst = (baseFirst = null),
      newBaseQueueLast = null,
      update = current,
      didReadFromEntangledAsyncAction$56 = !1;
    do {
      var updateLane = update.lane & -536870913;
      if (
        updateLane !== update.lane
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        var revertLane = update.revertLane;
        if (0 === revertLane)
          null !== newBaseQueueLast &&
            (newBaseQueueLast = newBaseQueueLast.next =
              {
                lane: 0,
                revertLane: 0,
                action: update.action,
                hasEagerState: update.hasEagerState,
                eagerState: update.eagerState,
                next: null
              }),
            updateLane === currentEntangledLane &&
              (didReadFromEntangledAsyncAction$56 = !0);
        else if ((renderLanes & revertLane) === revertLane) {
          update = update.next;
          revertLane === currentEntangledLane &&
            (didReadFromEntangledAsyncAction$56 = !0);
          continue;
        } else
          (updateLane = {
            lane: 0,
            revertLane: update.revertLane,
            action: update.action,
            hasEagerState: update.hasEagerState,
            eagerState: update.eagerState,
            next: null
          }),
            null === newBaseQueueLast
              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
                (baseFirst = pendingQueue))
              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
            (currentlyRenderingFiber$1.lanes |= revertLane),
            (workInProgressRootSkippedLanes |= revertLane);
        updateLane = update.action;
        shouldDoubleInvokeUserFnsInHooksDEV &&
          reducer(pendingQueue, updateLane);
        pendingQueue = update.hasEagerState
          ? update.eagerState
          : reducer(pendingQueue, updateLane);
      } else
        (revertLane = {
          lane: updateLane,
          revertLane: update.revertLane,
          action: update.action,
          hasEagerState: update.hasEagerState,
          eagerState: update.eagerState,
          next: null
        }),
          null === newBaseQueueLast
            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
              (baseFirst = pendingQueue))
            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
          (currentlyRenderingFiber$1.lanes |= updateLane),
          (workInProgressRootSkippedLanes |= updateLane);
      update = update.next;
    } while (null !== update && update !== current);
    null === newBaseQueueLast
      ? (baseFirst = pendingQueue)
      : (newBaseQueueLast.next = newBaseQueueFirst);
    if (
      !objectIs(pendingQueue, hook.memoizedState) &&
      ((didReceiveUpdate = !0),
      didReadFromEntangledAsyncAction$56 &&
        ((reducer = currentEntangledActionThenable), null !== reducer))
    )
      throw reducer;
    hook.memoizedState = pendingQueue;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = pendingQueue;
  }
  null === baseQueue && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue) throw Error(formatProdErrorMessage(311));
  queue.lastRenderedReducer = reducer;
  var dispatch = queue.dispatch,
    lastRenderPhaseUpdate = queue.pending,
    newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
    do (newState = reducer(newState, update.action)), (update = update.next);
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = newState;
    null === hook.baseQueue && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
  var fiber = currentlyRenderingFiber$1,
    hook = updateWorkInProgressHook(),
    isHydrating$jscomp$0 = isHydrating;
  if (isHydrating$jscomp$0) {
    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
    getServerSnapshot = getServerSnapshot();
  } else getServerSnapshot = getSnapshot();
  var snapshotChanged = !objectIs(
    (currentHook || hook).memoizedState,
    getServerSnapshot
  );
  snapshotChanged &&
    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = !0));
  hook = hook.queue;
  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
    subscribe
  ]);
  if (
    hook.getSnapshot !== getSnapshot ||
    snapshotChanged ||
    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
  ) {
    fiber.flags |= 2048;
    pushEffect(
      9,
      updateStoreInstance.bind(
        null,
        fiber,
        hook,
        getServerSnapshot,
        getSnapshot
      ),
      { destroy: void 0 },
      null
    );
    subscribe = workInProgressRoot;
    if (null === subscribe) throw Error(formatProdErrorMessage(349));
    isHydrating$jscomp$0 ||
      includesBlockingLane(subscribe, renderLanes) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
  }
  return getServerSnapshot;
}
function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
  fiber.flags |= 16384;
  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
  getSnapshot = currentlyRenderingFiber$1.updateQueue;
  null === getSnapshot
    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber$1.updateQueue = getSnapshot),
      (getSnapshot.stores = [fiber]))
    : ((renderedSnapshot = getSnapshot.stores),
      null === renderedSnapshot
        ? (getSnapshot.stores = [fiber])
        : renderedSnapshot.push(fiber));
}
function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
  inst.value = nextSnapshot;
  inst.getSnapshot = getSnapshot;
  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
}
function subscribeToStore(fiber, inst, subscribe) {
  return subscribe(function () {
    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
  });
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function forceStoreRerender(fiber) {
  var root = enqueueConcurrentRenderForLane(fiber, 2);
  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
}
function mountStateImpl(initialState) {
  var hook = mountWorkInProgressHook();
  if ("function" === typeof initialState) {
    var initialStateInitializer = initialState;
    initialState = initialStateInitializer();
    shouldDoubleInvokeUserFnsInHooksDEV &&
      (setIsStrictModeForDevtools(!0),
      initialStateInitializer(),
      setIsStrictModeForDevtools(!1));
  }
  hook.memoizedState = hook.baseState = initialState;
  hook.queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  return hook;
}
function updateOptimisticImpl(hook, current, passthrough, reducer) {
  hook.baseState = passthrough;
  return updateReducerImpl(
    hook,
    currentHook,
    "function" === typeof reducer ? reducer : basicStateReducer
  );
}
function dispatchFormState(fiber, actionQueue, setState, payload) {
  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
  fiber = actionQueue.pending;
  null === fiber
    ? ((fiber = { payload: payload, next: null }),
      (fiber.next = actionQueue.pending = fiber),
      runFormStateAction(actionQueue, setState, payload))
    : (actionQueue.pending = fiber.next =
        { payload: payload, next: fiber.next });
}
function runFormStateAction(actionQueue, setState, payload) {
  var action = actionQueue.action,
    prevState = actionQueue.state,
    prevTransition = ReactCurrentBatchConfig$3.transition,
    currentTransition = { _callbacks: new Set() };
  ReactCurrentBatchConfig$3.transition = currentTransition;
  try {
    var returnValue = action(prevState, payload);
    null !== returnValue &&
    "object" === typeof returnValue &&
    "function" === typeof returnValue.then
      ? (notifyTransitionCallbacks(currentTransition, returnValue),
        returnValue.then(
          function (nextState) {
            actionQueue.state = nextState;
            finishRunningFormStateAction(actionQueue, setState);
          },
          function () {
            return finishRunningFormStateAction(actionQueue, setState);
          }
        ),
        setState(returnValue))
      : (setState(returnValue),
        (actionQueue.state = returnValue),
        finishRunningFormStateAction(actionQueue, setState));
  } catch (error) {
    setState({ then: function () {}, status: "rejected", reason: error }),
      finishRunningFormStateAction(actionQueue, setState);
  } finally {
    ReactCurrentBatchConfig$3.transition = prevTransition;
  }
}
function finishRunningFormStateAction(actionQueue, setState) {
  var last = actionQueue.pending;
  if (null !== last) {
    var first = last.next;
    first === last
      ? (actionQueue.pending = null)
      : ((first = first.next),
        (last.next = first),
        runFormStateAction(actionQueue, setState, first.payload));
  }
}
function formStateReducer(oldState, newState) {
  return newState;
}
function updateFormStateImpl(stateHook, currentStateHook, action) {
  stateHook = updateReducerImpl(
    stateHook,
    currentStateHook,
    formStateReducer
  )[0];
  stateHook =
    "object" === typeof stateHook &&
    null !== stateHook &&
    "function" === typeof stateHook.then
      ? useThenable(stateHook)
      : stateHook;
  currentStateHook = updateWorkInProgressHook();
  var actionQueue = currentStateHook.queue,
    dispatch = actionQueue.dispatch;
  action !== currentStateHook.memoizedState &&
    ((currentlyRenderingFiber$1.flags |= 2048),
    pushEffect(
      9,
      formStateActionEffect.bind(null, actionQueue, action),
      { destroy: void 0 },
      null
    ));
  return [stateHook, dispatch];
}
function formStateActionEffect(actionQueue, action) {
  actionQueue.action = action;
}
function pushEffect(tag, create, inst, deps) {
  tag = { tag: tag, create: create, inst: inst, deps: deps, next: null };
  create = currentlyRenderingFiber$1.updateQueue;
  null === create
    ? ((create = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber$1.updateQueue = create),
      (create.lastEffect = tag.next = tag))
    : ((inst = create.lastEffect),
      null === inst
        ? (create.lastEffect = tag.next = tag)
        : ((deps = inst.next),
          (inst.next = tag),
          (tag.next = deps),
          (create.lastEffect = tag)));
  return tag;
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = mountWorkInProgressHook();
  currentlyRenderingFiber$1.flags |= fiberFlags;
  hook.memoizedState = pushEffect(
    1 | hookFlags,
    create,
    { destroy: void 0 },
    void 0 === deps ? null : deps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var inst = hook.memoizedState.inst;
  null !== currentHook &&
  null !== deps &&
  areHookInputsEqual(deps, currentHook.memoizedState.deps)
    ? (hook.memoizedState = pushEffect(hookFlags, create, inst, deps))
    : ((currentlyRenderingFiber$1.flags |= fiberFlags),
      (hook.memoizedState = pushEffect(1 | hookFlags, create, inst, deps)));
}
function mountEffect(create, deps) {
  mountEffectImpl(8390656, 8, create, deps);
}
function updateEffect(create, deps) {
  updateEffectImpl(2048, 8, create, deps);
}
function useEffectEventImpl(payload) {
  currentlyRenderingFiber$1.flags |= 4;
  var componentUpdateQueue = currentlyRenderingFiber$1.updateQueue;
  if (null === componentUpdateQueue)
    (componentUpdateQueue = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber$1.updateQueue = componentUpdateQueue),
      (componentUpdateQueue.events = [payload]);
  else {
    var events = componentUpdateQueue.events;
    null === events
      ? (componentUpdateQueue.events = [payload])
      : events.push(payload);
  }
}
function updateEvent(callback) {
  var ref = updateWorkInProgressHook().memoizedState;
  useEffectEventImpl({ ref: ref, nextImpl: callback });
  return function () {
    if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
    return ref.impl.apply(void 0, arguments);
  };
}
function updateInsertionEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 4, create, deps);
}
function imperativeHandleEffect(create, ref) {
  if ("function" === typeof ref)
    return (
      (create = create()),
      ref(create),
      function () {
        ref(null);
      }
    );
  if (null !== ref && void 0 !== ref)
    return (
      (create = create()),
      (ref.current = create),
      function () {
        ref.current = null;
      }
    );
}
function updateImperativeHandle(ref, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
}
function mountDebugValue() {}
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
    return prevState[0];
  prevState = nextCreate();
  shouldDoubleInvokeUserFnsInHooksDEV &&
    (setIsStrictModeForDevtools(!0),
    nextCreate(),
    setIsStrictModeForDevtools(!1));
  hook.memoizedState = [prevState, deps];
  return prevState;
}
function mountDeferredValueImpl(hook, value, initialValue) {
  return enableUseDeferredValueInitialArg &&
    void 0 !== initialValue &&
    0 === (renderLanes & 1073741824)
    ? ((hook.memoizedState = initialValue),
      (hook = requestDeferredLane()),
      (currentlyRenderingFiber$1.lanes |= hook),
      (workInProgressRootSkippedLanes |= hook),
      initialValue)
    : (hook.memoizedState = value);
}
function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
  if (objectIs(value, prevValue)) return value;
  if (null !== currentTreeHiddenStackCursor.current)
    return (
      (hook = mountDeferredValueImpl(hook, value, initialValue)),
      objectIs(hook, prevValue) || (didReceiveUpdate = !0),
      hook
    );
  if (0 === (renderLanes & 42))
    return (didReceiveUpdate = !0), (hook.memoizedState = value);
  hook = requestDeferredLane();
  currentlyRenderingFiber$1.lanes |= hook;
  workInProgressRootSkippedLanes |= hook;
  return prevValue;
}
function startTransition(
  fiber,
  queue,
  pendingState,
  finishedState,
  callback,
  options
) {
  var previousPriority = currentUpdatePriority;
  currentUpdatePriority =
    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
  var prevTransition = ReactCurrentBatchConfig$3.transition,
    currentTransition = { _callbacks: new Set() };
  ReactCurrentBatchConfig$3.transition = currentTransition;
  dispatchOptimisticSetState(fiber, !1, queue, pendingState);
  enableTransitionTracing &&
    void 0 !== options &&
    void 0 !== options.name &&
    ((ReactCurrentBatchConfig$3.transition.name = options.name),
    (ReactCurrentBatchConfig$3.transition.startTime = now$1()));
  try {
    var returnValue = callback();
    if (
      null !== returnValue &&
      "object" === typeof returnValue &&
      "function" === typeof returnValue.then
    ) {
      notifyTransitionCallbacks(currentTransition, returnValue);
      var thenableForFinishedState = chainThenableValue(
        returnValue,
        finishedState
      );
      dispatchSetState(fiber, queue, thenableForFinishedState);
    } else dispatchSetState(fiber, queue, finishedState);
  } catch (error) {
    dispatchSetState(fiber, queue, {
      then: function () {},
      status: "rejected",
      reason: error
    });
  } finally {
    (currentUpdatePriority = previousPriority),
      (ReactCurrentBatchConfig$3.transition = prevTransition);
  }
}
function startHostTransition(formFiber, pendingState, callback, formData) {
  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
  if (null === formFiber.memoizedState) {
    var newQueue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: basicStateReducer,
      lastRenderedState: sharedNotPendingObject
    };
    var queue = newQueue;
    newQueue = {
      memoizedState: sharedNotPendingObject,
      baseState: sharedNotPendingObject,
      baseQueue: null,
      queue: newQueue,
      next: null
    };
    formFiber.memoizedState = newQueue;
    var alternate = formFiber.alternate;
    null !== alternate && (alternate.memoizedState = newQueue);
  } else queue = formFiber.memoizedState.queue;
  startTransition(
    formFiber,
    queue,
    pendingState,
    sharedNotPendingObject,
    function () {
      return callback(formData);
    }
  );
}
function useHostTransitionStatus() {
  var status = readContext(HostTransitionContext);
  return null !== status ? status : sharedNotPendingObject;
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber, seedKey, seedValue) {
  for (var provider = fiber.return; null !== provider; ) {
    switch (provider.tag) {
      case 24:
      case 3:
        var lane = requestUpdateLane(provider);
        fiber = createUpdate(lane);
        var root$66 = enqueueUpdate(provider, fiber, lane);
        null !== root$66 &&
          (scheduleUpdateOnFiber(root$66, provider, lane),
          entangleTransitions(root$66, provider, lane));
        provider = createCache();
        null !== seedKey &&
          void 0 !== seedKey &&
          null !== root$66 &&
          provider.data.set(seedKey, seedValue);
        fiber.payload = { cache: provider };
        return;
    }
    provider = provider.return;
  }
}
function dispatchReducerAction(fiber, queue, action) {
  var lane = requestUpdateLane(fiber);
  action = {
    lane: lane,
    revertLane: 0,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  isRenderPhaseUpdate(fiber)
    ? enqueueRenderPhaseUpdate(queue, action)
    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
      null !== action &&
        (scheduleUpdateOnFiber(action, fiber, lane),
        entangleTransitionUpdate(action, queue, lane)));
  enableSchedulingProfiler && markStateUpdateScheduled(fiber, lane);
}
function dispatchSetState(fiber, queue, action) {
  var lane = requestUpdateLane(fiber),
    update = {
      lane: lane,
      revertLane: 0,
      action: action,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
  else {
    var alternate = fiber.alternate;
    if (
      0 === fiber.lanes &&
      (null === alternate || 0 === alternate.lanes) &&
      ((alternate = queue.lastRenderedReducer), null !== alternate)
    )
      try {
        var currentState = queue.lastRenderedState,
          eagerState = alternate(currentState, action);
        update.hasEagerState = !0;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState)) {
          enqueueUpdate$1(fiber, queue, update, 0);
          null === workInProgressRoot && finishQueueingConcurrentUpdates();
          return;
        }
      } catch (error) {
      } finally {
      }
    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
    null !== action &&
      (scheduleUpdateOnFiber(action, fiber, lane),
      entangleTransitionUpdate(action, queue, lane));
  }
  enableSchedulingProfiler && markStateUpdateScheduled(fiber, lane);
}
function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
  requestCurrentTransition();
  action = {
    lane: 2,
    revertLane: requestTransitionLane(),
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) {
    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
  } else
    (throwIfDuringRender = enqueueConcurrentHookUpdate(
      fiber,
      queue,
      action,
      2
    )),
      null !== throwIfDuringRender &&
        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
  enableSchedulingProfiler && markStateUpdateScheduled(fiber, 2);
}
function isRenderPhaseUpdate(fiber) {
  var alternate = fiber.alternate;
  return (
    fiber === currentlyRenderingFiber$1 ||
    (null !== alternate && alternate === currentlyRenderingFiber$1)
  );
}
function enqueueRenderPhaseUpdate(queue, update) {
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
    !0;
  var pending = queue.pending;
  null === pending
    ? (update.next = update)
    : ((update.next = pending.next), (pending.next = update));
  queue.pending = update;
}
function entangleTransitionUpdate(root, queue, lane) {
  if (0 !== (lane & 4194176)) {
    var queueLanes = queue.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    queue.lanes = lane;
    markRootEntangled(root, lane);
  }
}
var ContextOnlyDispatcher = {
  readContext: readContext,
  use: use,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useInsertionEffect: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useSyncExternalStore: throwInvalidHookError,
  useId: throwInvalidHookError
};
ContextOnlyDispatcher.useCacheRefresh = throwInvalidHookError;
ContextOnlyDispatcher.useMemoCache = throwInvalidHookError;
ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
ContextOnlyDispatcher.useHostTransitionStatus = throwInvalidHookError;
ContextOnlyDispatcher.useFormState = throwInvalidHookError;
ContextOnlyDispatcher.useOptimistic = throwInvalidHookError;
var HooksDispatcherOnMount = {
  readContext: readContext,
  use: use,
  useCallback: function (callback, deps) {
    mountWorkInProgressHook().memoizedState = [
      callback,
      void 0 === deps ? null : deps
    ];
    return callback;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle: function (ref, create, deps) {
    deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
    mountEffectImpl(
      4194308,
      4,
      imperativeHandleEffect.bind(null, create, ref),
      deps
    );
  },
  useLayoutEffect: function (create, deps) {
    return mountEffectImpl(4194308, 4, create, deps);
  },
  useInsertionEffect: function (create, deps) {
    mountEffectImpl(4, 2, create, deps);
  },
  useMemo: function (nextCreate, deps) {
    var hook = mountWorkInProgressHook();
    deps = void 0 === deps ? null : deps;
    var nextValue = nextCreate();
    shouldDoubleInvokeUserFnsInHooksDEV &&
      (setIsStrictModeForDevtools(!0),
      nextCreate(),
      setIsStrictModeForDevtools(!1));
    hook.memoizedState = [nextValue, deps];
    return nextValue;
  },
  useReducer: function (reducer, initialArg, init) {
    var hook = mountWorkInProgressHook();
    if (void 0 !== init) {
      var initialState = init(initialArg);
      shouldDoubleInvokeUserFnsInHooksDEV &&
        (setIsStrictModeForDevtools(!0),
        init(initialArg),
        setIsStrictModeForDevtools(!1));
    } else initialState = initialArg;
    hook.memoizedState = hook.baseState = initialState;
    reducer = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: reducer,
      lastRenderedState: initialState
    };
    hook.queue = reducer;
    reducer = reducer.dispatch = dispatchReducerAction.bind(
      null,
      currentlyRenderingFiber$1,
      reducer
    );
    return [hook.memoizedState, reducer];
  },
  useRef: function (initialValue) {
    var hook = mountWorkInProgressHook();
    if (enableUseRefAccessWarning)
      return (
        (initialValue = { current: initialValue }),
        (hook.memoizedState = initialValue)
      );
    initialValue = { current: initialValue };
    return (hook.memoizedState = initialValue);
  },
  useState: function (initialState) {
    initialState = mountStateImpl(initialState);
    var queue = initialState.queue,
      dispatch = dispatchSetState.bind(null, currentlyRenderingFiber$1, queue);
    queue.dispatch = dispatch;
    return [initialState.memoizedState, dispatch];
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value, initialValue) {
    var hook = mountWorkInProgressHook();
    return mountDeferredValueImpl(hook, value, initialValue);
  },
  useTransition: function () {
    var stateHook = mountStateImpl(!1);
    stateHook = startTransition.bind(
      null,
      currentlyRenderingFiber$1,
      stateHook.queue,
      !0,
      !1
    );
    mountWorkInProgressHook().memoizedState = stateHook;
    return [!1, stateHook];
  },
  useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
    var fiber = currentlyRenderingFiber$1,
      hook = mountWorkInProgressHook();
    if (isHydrating) {
      if (void 0 === getServerSnapshot)
        throw Error(formatProdErrorMessage(407));
      getServerSnapshot = getServerSnapshot();
    } else {
      getServerSnapshot = getSnapshot();
      var root$59 = workInProgressRoot;
      if (null === root$59) throw Error(formatProdErrorMessage(349));
      includesBlockingLane(root$59, workInProgressRootRenderLanes) ||
        pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
    }
    hook.memoizedState = getServerSnapshot;
    root$59 = { value: getServerSnapshot, getSnapshot: getSnapshot };
    hook.queue = root$59;
    mountEffect(subscribeToStore.bind(null, fiber, root$59, subscribe), [
      subscribe
    ]);
    fiber.flags |= 2048;
    pushEffect(
      9,
      updateStoreInstance.bind(
        null,
        fiber,
        root$59,
        getServerSnapshot,
        getSnapshot
      ),
      { destroy: void 0 },
      null
    );
    return getServerSnapshot;
  },
  useId: function () {
    var hook = mountWorkInProgressHook(),
      identifierPrefix = workInProgressRoot.identifierPrefix;
    if (isHydrating) {
      var JSCompiler_inline_result = treeContextOverflow;
      var idWithLeadingBit = treeContextId;
      JSCompiler_inline_result =
        (
          idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
        ).toString(32) + JSCompiler_inline_result;
      identifierPrefix =
        ":" + identifierPrefix + "R" + JSCompiler_inline_result;
      JSCompiler_inline_result = localIdCounter++;
      0 < JSCompiler_inline_result &&
        (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
      identifierPrefix += ":";
    } else
      (JSCompiler_inline_result = globalClientIdCounter++),
        (identifierPrefix =
          ":" +
          identifierPrefix +
          "r" +
          JSCompiler_inline_result.toString(32) +
          ":");
    return (hook.memoizedState = identifierPrefix);
  },
  useCacheRefresh: function () {
    return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
      null,
      currentlyRenderingFiber$1
    ));
  }
};
HooksDispatcherOnMount.useMemoCache = useMemoCache;
HooksDispatcherOnMount.useEffectEvent = function (callback) {
  var hook = mountWorkInProgressHook(),
    ref = { impl: callback };
  hook.memoizedState = ref;
  return function () {
    if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
    return ref.impl.apply(void 0, arguments);
  };
};
HooksDispatcherOnMount.useHostTransitionStatus = useHostTransitionStatus;
HooksDispatcherOnMount.useFormState = function (action, initialStateProp) {
  if (isHydrating) {
    var ssrFormState = workInProgressRoot.formState;
    if (null !== ssrFormState) {
      a: {
        if (isHydrating) {
          if (nextHydratableInstance) {
            b: {
              var JSCompiler_inline_result = nextHydratableInstance;
              for (
                var inRootOrSingleton = rootOrSingletonContext;
                8 !== JSCompiler_inline_result.nodeType;

              ) {
                if (!inRootOrSingleton) {
                  JSCompiler_inline_result = null;
                  break b;
                }
                JSCompiler_inline_result = getNextHydratableSibling(
                  JSCompiler_inline_result
                );
                if (null === JSCompiler_inline_result) {
                  JSCompiler_inline_result = null;
                  break b;
                }
              }
              inRootOrSingleton = JSCompiler_inline_result.data;
              JSCompiler_inline_result =
                "F!" === inRootOrSingleton || "F" === inRootOrSingleton
                  ? JSCompiler_inline_result
                  : null;
            }
            if (JSCompiler_inline_result) {
              nextHydratableInstance = getNextHydratableSibling(
                JSCompiler_inline_result
              );
              JSCompiler_inline_result = "F!" === JSCompiler_inline_result.data;
              break a;
            }
          }
          throwOnHydrationMismatch();
        }
        JSCompiler_inline_result = !1;
      }
      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
    }
  }
  ssrFormState = mountWorkInProgressHook();
  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
  JSCompiler_inline_result = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: formStateReducer,
    lastRenderedState: initialStateProp
  };
  ssrFormState.queue = JSCompiler_inline_result;
  ssrFormState = dispatchSetState.bind(
    null,
    currentlyRenderingFiber$1,
    JSCompiler_inline_result
  );
  JSCompiler_inline_result.dispatch = ssrFormState;
  JSCompiler_inline_result = mountWorkInProgressHook();
  inRootOrSingleton = {
    state: initialStateProp,
    dispatch: null,
    action: action,
    pending: null
  };
  JSCompiler_inline_result.queue = inRootOrSingleton;
  ssrFormState = dispatchFormState.bind(
    null,
    currentlyRenderingFiber$1,
    inRootOrSingleton,
    ssrFormState
  );
  inRootOrSingleton.dispatch = ssrFormState;
  JSCompiler_inline_result.memoizedState = action;
  return [initialStateProp, ssrFormState];
};
HooksDispatcherOnMount.useOptimistic = function (passthrough) {
  var hook = mountWorkInProgressHook();
  hook.memoizedState = hook.baseState = passthrough;
  var queue = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: null,
    lastRenderedState: null
  };
  hook.queue = queue;
  hook = dispatchOptimisticSetState.bind(
    null,
    currentlyRenderingFiber$1,
    !0,
    queue
  );
  queue.dispatch = hook;
  return [passthrough, hook];
};
var HooksDispatcherOnUpdate = {
  readContext: readContext,
  use: use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState: function () {
    return updateReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value, initialValue) {
    var hook = updateWorkInProgressHook();
    return updateDeferredValueImpl(
      hook,
      currentHook.memoizedState,
      value,
      initialValue
    );
  },
  useTransition: function () {
    var booleanOrThenable = updateReducer(basicStateReducer)[0],
      start = updateWorkInProgressHook().memoizedState;
    return [
      "boolean" === typeof booleanOrThenable
        ? booleanOrThenable
        : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId
};
HooksDispatcherOnUpdate.useCacheRefresh = updateRefresh;
HooksDispatcherOnUpdate.useMemoCache = useMemoCache;
HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
HooksDispatcherOnUpdate.useHostTransitionStatus = useHostTransitionStatus;
HooksDispatcherOnUpdate.useFormState = function (action) {
  var stateHook = updateWorkInProgressHook();
  return updateFormStateImpl(stateHook, currentHook, action);
};
HooksDispatcherOnUpdate.useOptimistic = function (passthrough, reducer) {
  var hook = updateWorkInProgressHook();
  return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
};
var HooksDispatcherOnRerender = {
  readContext: readContext,
  use: use,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState: function () {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value, initialValue) {
    var hook = updateWorkInProgressHook();
    return null === currentHook
      ? mountDeferredValueImpl(hook, value, initialValue)
      : updateDeferredValueImpl(
          hook,
          currentHook.memoizedState,
          value,
          initialValue
        );
  },
  useTransition: function () {
    var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
      start = updateWorkInProgressHook().memoizedState;
    return [
      "boolean" === typeof booleanOrThenable
        ? booleanOrThenable
        : useThenable(booleanOrThenable),
      start
    ];
  },
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId
};
HooksDispatcherOnRerender.useCacheRefresh = updateRefresh;
HooksDispatcherOnRerender.useMemoCache = useMemoCache;
HooksDispatcherOnRerender.useEffectEvent = updateEvent;
HooksDispatcherOnRerender.useHostTransitionStatus = useHostTransitionStatus;
HooksDispatcherOnRerender.useFormState = function (action) {
  var stateHook = updateWorkInProgressHook(),
    currentStateHook = currentHook;
  if (null !== currentStateHook)
    return updateFormStateImpl(stateHook, currentStateHook, action);
  stateHook = stateHook.memoizedState;
  currentStateHook = updateWorkInProgressHook();
  var dispatch = currentStateHook.queue.dispatch;
  currentStateHook.memoizedState = action;
  return [stateHook, dispatch];
};
HooksDispatcherOnRerender.useOptimistic = function (passthrough, reducer) {
  var hook = updateWorkInProgressHook();
  if (null !== currentHook)
    return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
  hook.baseState = passthrough;
  return [passthrough, hook.queue.dispatch];
};
var now = Scheduler.unstable_now,
  commitTime = 0,
  layoutEffectStartTime = -1,
  profilerStartTime = -1,
  passiveEffectStartTime = -1,
  currentUpdateIsNested = !1,
  nestedUpdateScheduled = !1;
function startProfilerTimer(fiber) {
  profilerStartTime = now();
  0 > fiber.actualStartTime && (fiber.actualStartTime = now());
}
function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
  if (0 <= profilerStartTime) {
    var elapsedTime = now() - profilerStartTime;
    fiber.actualDuration += elapsedTime;
    overrideBaseTime && (fiber.selfBaseDuration = elapsedTime);
    profilerStartTime = -1;
  }
}
function recordLayoutEffectDuration(fiber) {
  if (0 <= layoutEffectStartTime) {
    var elapsedTime = now() - layoutEffectStartTime;
    layoutEffectStartTime = -1;
    for (fiber = fiber.return; null !== fiber; ) {
      switch (fiber.tag) {
        case 3:
          fiber.stateNode.effectDuration += elapsedTime;
          return;
        case 12:
          fiber.stateNode.effectDuration += elapsedTime;
          return;
      }
      fiber = fiber.return;
    }
  }
}
function recordPassiveEffectDuration(fiber) {
  if (0 <= passiveEffectStartTime) {
    var elapsedTime = now() - passiveEffectStartTime;
    passiveEffectStartTime = -1;
    for (fiber = fiber.return; null !== fiber; ) {
      switch (fiber.tag) {
        case 3:
          fiber = fiber.stateNode;
          null !== fiber && (fiber.passiveEffectDuration += elapsedTime);
          return;
        case 12:
          fiber = fiber.stateNode;
          null !== fiber && (fiber.passiveEffectDuration += elapsedTime);
          return;
      }
      fiber = fiber.return;
    }
  }
}
function startLayoutEffectTimer() {
  layoutEffectStartTime = now();
}
function transferActualDuration(fiber) {
  for (var child = fiber.child; child; )
    (fiber.actualDuration += child.actualDuration), (child = child.sibling);
}
function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    baseProps = assign({}, baseProps);
    Component = Component.defaultProps;
    for (var propName in Component)
      void 0 === baseProps[propName] &&
        (baseProps[propName] = Component[propName]);
    return baseProps;
  }
  return baseProps;
}
function applyDerivedStateFromProps(
  workInProgress,
  ctor,
  getDerivedStateFromProps,
  nextProps
) {
  ctor = workInProgress.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps =
    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
      ? ctor
      : assign({}, ctor, getDerivedStateFromProps);
  workInProgress.memoizedState = getDerivedStateFromProps;
  0 === workInProgress.lanes &&
    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
}
var classComponentUpdater = {
  isMounted: function (component) {
    return (component = component._reactInternals)
      ? getNearestMountedFiber(component) === component
      : !1;
  },
  enqueueSetState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(inst),
      update = createUpdate(lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
    enableSchedulingProfiler && markStateUpdateScheduled(inst, lane);
  },
  enqueueReplaceState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(inst),
      update = createUpdate(lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane),
      entangleTransitions(payload, inst, lane));
    enableSchedulingProfiler && markStateUpdateScheduled(inst, lane);
  },
  enqueueForceUpdate: function (inst, callback) {
    inst = inst._reactInternals;
    var lane = requestUpdateLane(inst),
      update = createUpdate(lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    callback = enqueueUpdate(inst, update, lane);
    null !== callback &&
      (scheduleUpdateOnFiber(callback, inst, lane),
      entangleTransitions(callback, inst, lane));
    enableSchedulingProfiler &&
      enableSchedulingProfiler &&
      null !== injectedProfilingHooks &&
      "function" === typeof injectedProfilingHooks.markForceUpdateScheduled &&
      injectedProfilingHooks.markForceUpdateScheduled(inst, lane);
  }
};
function checkShouldComponentUpdate(
  workInProgress,
  ctor,
  oldProps,
  newProps,
  oldState,
  newState,
  nextContext
) {
  workInProgress = workInProgress.stateNode;
  return "function" === typeof workInProgress.shouldComponentUpdate
    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
    : ctor.prototype && ctor.prototype.isPureReactComponent
    ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
    : !0;
}
function constructClassInstance(workInProgress, ctor, props) {
  var isLegacyContextConsumer = !1,
    unmaskedContext = emptyContextObject;
  var context = ctor.contextType;
  "object" === typeof context && null !== context
    ? (context = readContext(context))
    : ((unmaskedContext = isContextProvider(ctor)
        ? previousContext
        : contextStackCursor.current),
      (isLegacyContextConsumer = ctor.contextTypes),
      (context = (isLegacyContextConsumer =
        null !== isLegacyContextConsumer && void 0 !== isLegacyContextConsumer)
        ? getMaskedContext(workInProgress, unmaskedContext)
        : emptyContextObject));
  ctor = new ctor(props, context);
  workInProgress.memoizedState =
    null !== ctor.state && void 0 !== ctor.state ? ctor.state : null;
  ctor.updater = classComponentUpdater;
  workInProgress.stateNode = ctor;
  ctor._reactInternals = workInProgress;
  isLegacyContextConsumer &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext =
      unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
  return ctor;
}
function callComponentWillReceiveProps(
  workInProgress,
  instance,
  newProps,
  nextContext
) {
  workInProgress = instance.state;
  "function" === typeof instance.componentWillReceiveProps &&
    instance.componentWillReceiveProps(newProps, nextContext);
  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress &&
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function mountClassInstance(workInProgress, ctor, newProps, renderLanes) {
  var instance = workInProgress.stateNode;
  instance.props = newProps;
  instance.state = workInProgress.memoizedState;
  instance.refs = {};
  initializeUpdateQueue(workInProgress);
  var contextType = ctor.contextType;
  "object" === typeof contextType && null !== contextType
    ? (instance.context = readContext(contextType))
    : ((contextType = isContextProvider(ctor)
        ? previousContext
        : contextStackCursor.current),
      (instance.context = getMaskedContext(workInProgress, contextType)));
  instance.state = workInProgress.memoizedState;
  contextType = ctor.getDerivedStateFromProps;
  "function" === typeof contextType &&
    (applyDerivedStateFromProps(workInProgress, ctor, contextType, newProps),
    (instance.state = workInProgress.memoizedState));
  "function" === typeof ctor.getDerivedStateFromProps ||
    "function" === typeof instance.getSnapshotBeforeUpdate ||
    ("function" !== typeof instance.UNSAFE_componentWillMount &&
      "function" !== typeof instance.componentWillMount) ||
    ((ctor = instance.state),
    "function" === typeof instance.componentWillMount &&
      instance.componentWillMount(),
    "function" === typeof instance.UNSAFE_componentWillMount &&
      instance.UNSAFE_componentWillMount(),
    ctor !== instance.state &&
      classComponentUpdater.enqueueReplaceState(instance, instance.state, null),
    processUpdateQueue(workInProgress, newProps, instance, renderLanes),
    suspendIfUpdateReadFromEntangledAsyncAction(),
    (instance.state = workInProgress.memoizedState));
  "function" === typeof instance.componentDidMount &&
    (workInProgress.flags |= 4194308);
}
var CapturedStacks = new WeakMap();
function createCapturedValueAtFiber(value, source) {
  if ("object" === typeof value && null !== value) {
    var stack = CapturedStacks.get(value);
    "string" !== typeof stack &&
      ((stack = getStackByFiberInDevAndProd(source)),
      CapturedStacks.set(value, stack));
  } else stack = getStackByFiberInDevAndProd(source);
  return { value: value, source: source, stack: stack, digest: null };
}
function createCapturedValueFromError(value, digest, stack) {
  "string" === typeof stack && CapturedStacks.set(value, stack);
  return {
    value: value,
    source: null,
    stack: null != stack ? stack : null,
    digest: null != digest ? digest : null
  };
}
var ReactFiberErrorDialogWWW = require("ReactFiberErrorDialog");
if ("function" !== typeof ReactFiberErrorDialogWWW.showErrorDialog)
  throw Error(formatProdErrorMessage(320));
function logCapturedError(boundary, errorInfo) {
  try {
    !1 !==
      ReactFiberErrorDialogWWW.showErrorDialog({
        componentStack: null !== errorInfo.stack ? errorInfo.stack : "",
        error: errorInfo.value,
        errorBoundary:
          null !== boundary && 1 === boundary.tag ? boundary.stateNode : null
      }) && console.error(errorInfo.value);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function createRootErrorUpdate(fiber, errorInfo, lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  lane.payload = { element: null };
  var error = errorInfo.value;
  lane.callback = function () {
    hasUncaughtError || ((hasUncaughtError = !0), (firstUncaughtError = error));
    logCapturedError(fiber, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(fiber, errorInfo, lane) {
  lane = createUpdate(lane);
  lane.tag = 3;
  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    var error = errorInfo.value;
    lane.payload = function () {
      return getDerivedStateFromError(error);
    };
    lane.callback = function () {
      logCapturedError(fiber, errorInfo);
    };
  }
  var inst = fiber.stateNode;
  null !== inst &&
    "function" === typeof inst.componentDidCatch &&
    (lane.callback = function () {
      logCapturedError(fiber, errorInfo);
      "function" !== typeof getDerivedStateFromError &&
        (null === legacyErrorBoundariesThatAlreadyFailed
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
          : legacyErrorBoundariesThatAlreadyFailed.add(this));
      var stack = errorInfo.stack;
      this.componentDidCatch(errorInfo.value, {
        componentStack: null !== stack ? stack : ""
      });
    });
  return lane;
}
function markSuspenseBoundaryShouldCapture(
  suspenseBoundary,
  returnFiber,
  sourceFiber,
  root,
  rootRenderLanes
) {
  if (0 === (suspenseBoundary.mode & 1))
    return (
      suspenseBoundary === returnFiber
        ? (suspenseBoundary.flags |= 65536)
        : ((suspenseBoundary.flags |= 128),
          (sourceFiber.flags |= 131072),
          (sourceFiber.flags &= -52805),
          1 === sourceFiber.tag &&
            (null === sourceFiber.alternate
              ? (sourceFiber.tag = 17)
              : ((returnFiber = createUpdate(2)),
                (returnFiber.tag = 2),
                enqueueUpdate(sourceFiber, returnFiber, 2))),
          (sourceFiber.lanes |= 2)),
      suspenseBoundary
    );
  suspenseBoundary.flags |= 65536;
  suspenseBoundary.lanes = rootRenderLanes;
  return suspenseBoundary;
}
function throwException(
  root,
  returnFiber,
  sourceFiber,
  value,
  rootRenderLanes
) {
  sourceFiber.flags |= 32768;
  isDevToolsPresent && restorePendingUpdaters(root, rootRenderLanes);
  if (
    null !== value &&
    "object" === typeof value &&
    "function" === typeof value.then
  ) {
    if (enableLazyContextPropagation) {
      var currentSourceFiber = sourceFiber.alternate;
      null !== currentSourceFiber &&
        propagateParentContextChanges(
          currentSourceFiber,
          sourceFiber,
          rootRenderLanes,
          !0
        );
    }
    currentSourceFiber = sourceFiber.tag;
    0 !== (sourceFiber.mode & 1) ||
      (0 !== currentSourceFiber &&
        11 !== currentSourceFiber &&
        15 !== currentSourceFiber) ||
      ((currentSourceFiber = sourceFiber.alternate)
        ? ((sourceFiber.updateQueue = currentSourceFiber.updateQueue),
          (sourceFiber.memoizedState = currentSourceFiber.memoizedState),
          (sourceFiber.lanes = currentSourceFiber.lanes))
        : ((sourceFiber.updateQueue = null),
          (sourceFiber.memoizedState = null)));
    currentSourceFiber = suspenseHandlerStackCursor.current;
    if (null !== currentSourceFiber) {
      switch (currentSourceFiber.tag) {
        case 13:
          return (
            sourceFiber.mode & 1 &&
              (null === shellBoundary
                ? renderDidSuspendDelayIfPossible()
                : null === currentSourceFiber.alternate &&
                  0 === workInProgressRootExitStatus &&
                  (workInProgressRootExitStatus = 3)),
            (currentSourceFiber.flags &= -257),
            markSuspenseBoundaryShouldCapture(
              currentSourceFiber,
              returnFiber,
              sourceFiber,
              root,
              rootRenderLanes
            ),
            value === noopSuspenseyCommitThenable
              ? (currentSourceFiber.flags |= 16384)
              : ((returnFiber = currentSourceFiber.updateQueue),
                null === returnFiber
                  ? (currentSourceFiber.updateQueue = new Set([value]))
                  : returnFiber.add(value),
                currentSourceFiber.mode & 1 &&
                  attachPingListener(root, value, rootRenderLanes)),
            !1
          );
        case 22:
          if (currentSourceFiber.mode & 1)
            return (
              (currentSourceFiber.flags |= 65536),
              value === noopSuspenseyCommitThenable
                ? (currentSourceFiber.flags |= 16384)
                : ((returnFiber = currentSourceFiber.updateQueue),
                  null === returnFiber
                    ? ((returnFiber = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([value])
                      }),
                      (currentSourceFiber.updateQueue = returnFiber))
                    : ((sourceFiber = returnFiber.retryQueue),
                      null === sourceFiber
                        ? (returnFiber.retryQueue = new Set([value]))
                        : sourceFiber.add(value)),
                  attachPingListener(root, value, rootRenderLanes)),
              !1
            );
      }
      throw Error(formatProdErrorMessage(435, currentSourceFiber.tag));
    }
    if (1 === root.tag)
      return (
        attachPingListener(root, value, rootRenderLanes),
        renderDidSuspendDelayIfPossible(),
        !1
      );
    value = Error(formatProdErrorMessage(426));
  }
  if (
    isHydrating &&
    sourceFiber.mode & 1 &&
    ((currentSourceFiber = suspenseHandlerStackCursor.current),
    null !== currentSourceFiber)
  )
    return (
      0 === (currentSourceFiber.flags & 65536) &&
        (currentSourceFiber.flags |= 256),
      markSuspenseBoundaryShouldCapture(
        currentSourceFiber,
        returnFiber,
        sourceFiber,
        root,
        rootRenderLanes
      ),
      queueHydrationError(createCapturedValueAtFiber(value, sourceFiber)),
      !1
    );
  root = value = createCapturedValueAtFiber(value, sourceFiber);
  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
  null === workInProgressRootConcurrentErrors
    ? (workInProgressRootConcurrentErrors = [root])
    : workInProgressRootConcurrentErrors.push(root);
  if (null === returnFiber) return !0;
  root = returnFiber;
  do {
    switch (root.tag) {
      case 3:
        return (
          (root.flags |= 65536),
          (rootRenderLanes &= -rootRenderLanes),
          (root.lanes |= rootRenderLanes),
          (rootRenderLanes = createRootErrorUpdate(
            root,
            value,
            rootRenderLanes
          )),
          enqueueCapturedUpdate(root, rootRenderLanes),
          !1
        );
      case 1:
        if (
          ((returnFiber = value),
          (sourceFiber = root.type),
          (currentSourceFiber = root.stateNode),
          0 === (root.flags & 128) &&
            ("function" === typeof sourceFiber.getDerivedStateFromError ||
              (null !== currentSourceFiber &&
                "function" === typeof currentSourceFiber.componentDidCatch &&
                (null === legacyErrorBoundariesThatAlreadyFailed ||
                  !legacyErrorBoundariesThatAlreadyFailed.has(
                    currentSourceFiber
                  )))))
        )
          return (
            (root.flags |= 65536),
            (rootRenderLanes &= -rootRenderLanes),
            (root.lanes |= rootRenderLanes),
            (rootRenderLanes = createClassErrorUpdate(
              root,
              returnFiber,
              rootRenderLanes
            )),
            enqueueCapturedUpdate(root, rootRenderLanes),
            !1
          );
    }
    root = root.return;
  } while (null !== root);
  return !1;
}
function processTransitionCallbacks(pendingTransitions, endTime, callbacks) {
  if (enableTransitionTracing && null !== pendingTransitions) {
    var transitionStart = pendingTransitions.transitionStart,
      onTransitionStart = callbacks.onTransitionStart;
    null !== transitionStart &&
      null != onTransitionStart &&
      transitionStart.forEach(function (transition) {
        return onTransitionStart(transition.name, transition.startTime);
      });
    transitionStart = pendingTransitions.markerProgress;
    var onMarkerProgress = callbacks.onMarkerProgress;
    null != onMarkerProgress &&
      null !== transitionStart &&
      transitionStart.forEach(function (markerInstance, markerName) {
        if (null !== markerInstance.transitions) {
          var pending =
            null !== markerInstance.pendingBoundaries
              ? Array.from(markerInstance.pendingBoundaries.values())
              : [];
          markerInstance.transitions.forEach(function (transition) {
            onMarkerProgress(
              transition.name,
              markerName,
              transition.startTime,
              endTime,
              pending
            );
          });
        }
      });
    transitionStart = pendingTransitions.markerComplete;
    var onMarkerComplete = callbacks.onMarkerComplete;
    null !== transitionStart &&
      null != onMarkerComplete &&
      transitionStart.forEach(function (transitions, markerName) {
        transitions.forEach(function (transition) {
          onMarkerComplete(
            transition.name,
            markerName,
            transition.startTime,
            endTime
          );
        });
      });
    transitionStart = pendingTransitions.markerIncomplete;
    var onMarkerIncomplete = callbacks.onMarkerIncomplete;
    null != onMarkerIncomplete &&
      null !== transitionStart &&
      transitionStart.forEach(function (_ref, markerName) {
        var aborts = _ref.aborts;
        _ref.transitions.forEach(function (transition) {
          var filteredAborts = [];
          aborts.forEach(function (abort) {
            switch (abort.reason) {
              case "marker":
                filteredAborts.push({
                  type: "marker",
                  name: abort.name,
                  endTime: endTime
                });
                break;
              case "suspense":
                filteredAborts.push({
                  type: "suspense",
                  name: abort.name,
                  endTime: endTime
                });
            }
          });
          0 < filteredAborts.length &&
            onMarkerIncomplete(
              transition.name,
              markerName,
              transition.startTime,
              filteredAborts
            );
        });
      });
    transitionStart = pendingTransitions.transitionProgress;
    var onTransitionProgress = callbacks.onTransitionProgress;
    null != onTransitionProgress &&
      null !== transitionStart &&
      transitionStart.forEach(function (pending, transition) {
        onTransitionProgress(
          transition.name,
          transition.startTime,
          endTime,
          Array.from(pending.values())
        );
      });
    pendingTransitions = pendingTransitions.transitionComplete;
    var onTransitionComplete = callbacks.onTransitionComplete;
    null !== pendingTransitions &&
      null != onTransitionComplete &&
      pendingTransitions.forEach(function (transition) {
        return onTransitionComplete(
          transition.name,
          transition.startTime,
          endTime
        );
      });
  }
}
var markerInstanceStack = createCursor(null);
function pushRootMarkerInstance(workInProgress) {
  if (enableTransitionTracing) {
    var transitions = workInProgressTransitions,
      root$78 = workInProgress.stateNode;
    null !== transitions &&
      transitions.forEach(function (transition) {
        if (!root$78.incompleteTransitions.has(transition)) {
          var markerInstance = {
            tag: 0,
            transitions: new Set([transition]),
            pendingBoundaries: null,
            aborts: null,
            name: null
          };
          root$78.incompleteTransitions.set(transition, markerInstance);
        }
      });
    var markerInstances = [];
    root$78.incompleteTransitions.forEach(function (markerInstance) {
      markerInstances.push(markerInstance);
    });
    push(markerInstanceStack, markerInstances);
  }
}
function pushMarkerInstance(workInProgress, markerInstance) {
  enableTransitionTracing &&
    (null === markerInstanceStack.current
      ? push(markerInstanceStack, [markerInstance])
      : push(
          markerInstanceStack,
          markerInstanceStack.current.concat(markerInstance)
        ));
}
var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner,
  SelectiveHydrationException = Error(formatProdErrorMessage(461)),
  didReceiveUpdate = !1;
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  workInProgress.child =
    null === current
      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
      : reconcileChildFibers(
          workInProgress,
          current.child,
          nextChildren,
          renderLanes
        );
}
function updateForwardRef(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  Component = Component.render;
  var ref = workInProgress.ref;
  prepareToReadContext(workInProgress, renderLanes);
  enableSchedulingProfiler && markComponentRenderStarted(workInProgress);
  nextProps = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    ref,
    renderLanes
  );
  Component = checkDidRenderIdHook();
  enableSchedulingProfiler && markComponentRenderStopped();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && Component && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null === current) {
    var type = Component.type;
    if (
      "function" === typeof type &&
      !shouldConstruct(type) &&
      void 0 === type.defaultProps &&
      null === Component.compare &&
      void 0 === Component.defaultProps
    )
      return (
        (workInProgress.tag = 15),
        (workInProgress.type = type),
        updateSimpleMemoComponent(
          current,
          workInProgress,
          type,
          nextProps,
          renderLanes
        )
      );
    current = createFiberFromTypeAndProps(
      Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes
    );
    current.ref = workInProgress.ref;
    current.return = workInProgress;
    return (workInProgress.child = current);
  }
  type = current.child;
  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
    var prevProps = type.memoizedProps;
    Component = Component.compare;
    Component = null !== Component ? Component : shallowEqual;
    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  }
  workInProgress.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress.ref;
  current.return = workInProgress;
  return (workInProgress.child = current);
}
function updateSimpleMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null !== current) {
    var prevProps = current.memoizedProps;
    if (
      shallowEqual(prevProps, nextProps) &&
      current.ref === workInProgress.ref
    )
      if (
        ((didReceiveUpdate = !1),
        (workInProgress.pendingProps = nextProps = prevProps),
        checkScheduledUpdateOrContext(current, renderLanes))
      )
        0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
      else
        return (
          (workInProgress.lanes = current.lanes),
          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
        );
  }
  return updateFunctionComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    renderLanes
  );
}
function updateOffscreenComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    nextChildren = nextProps.children,
    nextIsDetached = 0 !== (workInProgress.stateNode._pendingVisibility & 2),
    prevState = null !== current ? current.memoizedState : null;
  markRef(current, workInProgress);
  if (
    "hidden" === nextProps.mode ||
    "unstable-defer-without-hiding" === nextProps.mode ||
    nextIsDetached
  ) {
    if (0 !== (workInProgress.flags & 128)) {
      nextChildren =
        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
      if (null !== current) {
        prevState = workInProgress.child = current.child;
        for (nextProps = 0; null !== prevState; )
          (nextProps = nextProps | prevState.lanes | prevState.childLanes),
            (prevState = prevState.sibling);
        workInProgress.childLanes = nextProps & ~nextChildren;
      } else (workInProgress.childLanes = 0), (workInProgress.child = null);
      return deferHiddenOffscreenComponent(
        current,
        workInProgress,
        nextChildren,
        renderLanes
      );
    }
    if (0 === (workInProgress.mode & 1))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current && pushTransition(workInProgress, null, null),
        reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else if (0 !== (renderLanes & 536870912))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current &&
          pushTransition(
            workInProgress,
            null !== prevState ? prevState.cachePool : null,
            null
          ),
        null !== prevState
          ? pushHiddenContext(workInProgress, prevState)
          : reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else
      return (
        (workInProgress.lanes = workInProgress.childLanes = 536870912),
        deferHiddenOffscreenComponent(
          current,
          workInProgress,
          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
          renderLanes
        )
      );
  } else if (null !== prevState) {
    nextProps = prevState.cachePool;
    nextIsDetached = null;
    if (enableTransitionTracing) {
      var instance = workInProgress.stateNode;
      null !== instance &&
        null != instance._transitions &&
        (nextIsDetached = Array.from(instance._transitions));
    }
    pushTransition(workInProgress, nextProps, nextIsDetached);
    pushHiddenContext(workInProgress, prevState);
    reuseSuspenseHandlerOnStack(workInProgress);
    workInProgress.memoizedState = null;
  } else
    null !== current && pushTransition(workInProgress, null, null),
      reuseHiddenContextOnStack(),
      reuseSuspenseHandlerOnStack(workInProgress);
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
function deferHiddenOffscreenComponent(
  current,
  workInProgress,
  nextBaseLanes,
  renderLanes
) {
  var JSCompiler_inline_result = peekCacheFromPool();
  JSCompiler_inline_result =
    null === JSCompiler_inline_result
      ? null
      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
  workInProgress.memoizedState = {
    baseLanes: nextBaseLanes,
    cachePool: JSCompiler_inline_result
  };
  null !== current && pushTransition(workInProgress, null, null);
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(workInProgress);
  enableLazyContextPropagation &&
    null !== current &&
    propagateParentContextChanges(current, workInProgress, renderLanes, !0);
  return null;
}
function markRef(current, workInProgress) {
  var ref = workInProgress.ref;
  if (
    (null === current && null !== ref) ||
    (null !== current && current.ref !== ref)
  )
    (workInProgress.flags |= 512), (workInProgress.flags |= 2097152);
}
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  var context = isContextProvider(Component)
    ? previousContext
    : contextStackCursor.current;
  context = getMaskedContext(workInProgress, context);
  prepareToReadContext(workInProgress, renderLanes);
  enableSchedulingProfiler && markComponentRenderStarted(workInProgress);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    context,
    renderLanes
  );
  nextProps = checkDidRenderIdHook();
  enableSchedulingProfiler && markComponentRenderStopped();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, Component, renderLanes);
  return workInProgress.child;
}
function replayFunctionComponent(
  current,
  workInProgress,
  nextProps,
  Component,
  secondArg,
  renderLanes
) {
  prepareToReadContext(workInProgress, renderLanes);
  enableSchedulingProfiler && markComponentRenderStarted(workInProgress);
  nextProps = renderWithHooksAgain(
    workInProgress,
    Component,
    nextProps,
    secondArg
  );
  finishRenderingHooks(current);
  Component = checkDidRenderIdHook();
  enableSchedulingProfiler && markComponentRenderStopped();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  isHydrating && Component && pushMaterializedTreeId(workInProgress);
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateClassComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (isContextProvider(Component)) {
    var hasContext = !0;
    pushContextProvider(workInProgress);
  } else hasContext = !1;
  prepareToReadContext(workInProgress, renderLanes);
  if (null === workInProgress.stateNode)
    resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress),
      constructClassInstance(workInProgress, Component, nextProps),
      mountClassInstance(workInProgress, Component, nextProps, renderLanes),
      (nextProps = !0);
  else if (null === current) {
    var instance = workInProgress.stateNode,
      oldProps = workInProgress.memoizedProps;
    instance.props = oldProps;
    var oldContext = instance.context,
      contextType = Component.contextType;
    "object" === typeof contextType && null !== contextType
      ? (contextType = readContext(contextType))
      : ((contextType = isContextProvider(Component)
          ? previousContext
          : contextStackCursor.current),
        (contextType = getMaskedContext(workInProgress, contextType)));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps,
      hasNewLifecycles =
        "function" === typeof getDerivedStateFromProps ||
        "function" === typeof instance.getSnapshotBeforeUpdate;
    hasNewLifecycles ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((oldProps !== nextProps || oldContext !== contextType) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          contextType
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    instance.state = oldState;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    oldContext = workInProgress.memoizedState;
    oldProps !== nextProps ||
    oldState !== oldContext ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps,
            nextProps
          ),
          (oldContext = workInProgress.memoizedState)),
        (oldProps =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            oldProps,
            nextProps,
            oldState,
            oldContext,
            contextType
          ))
          ? (hasNewLifecycles ||
              ("function" !== typeof instance.UNSAFE_componentWillMount &&
                "function" !== typeof instance.componentWillMount) ||
              ("function" === typeof instance.componentWillMount &&
                instance.componentWillMount(),
              "function" === typeof instance.UNSAFE_componentWillMount &&
                instance.UNSAFE_componentWillMount()),
            "function" === typeof instance.componentDidMount &&
              (workInProgress.flags |= 4194308))
          : ("function" === typeof instance.componentDidMount &&
              (workInProgress.flags |= 4194308),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = oldContext)),
        (instance.props = nextProps),
        (instance.state = oldContext),
        (instance.context = contextType),
        (nextProps = oldProps))
      : ("function" === typeof instance.componentDidMount &&
          (workInProgress.flags |= 4194308),
        (nextProps = !1));
  } else {
    instance = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    oldProps = workInProgress.memoizedProps;
    contextType =
      workInProgress.type === workInProgress.elementType
        ? oldProps
        : resolveDefaultProps(workInProgress.type, oldProps);
    instance.props = contextType;
    hasNewLifecycles = workInProgress.pendingProps;
    oldState = instance.context;
    oldContext = Component.contextType;
    "object" === typeof oldContext && null !== oldContext
      ? (oldContext = readContext(oldContext))
      : ((oldContext = isContextProvider(Component)
          ? previousContext
          : contextStackCursor.current),
        (oldContext = getMaskedContext(workInProgress, oldContext)));
    var getDerivedStateFromProps$jscomp$0 = Component.getDerivedStateFromProps;
    (getDerivedStateFromProps =
      "function" === typeof getDerivedStateFromProps$jscomp$0 ||
      "function" === typeof instance.getSnapshotBeforeUpdate) ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((oldProps !== hasNewLifecycles || oldState !== oldContext) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          oldContext
        ));
    hasForceUpdate = !1;
    oldState = workInProgress.memoizedState;
    instance.state = oldState;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    suspendIfUpdateReadFromEntangledAsyncAction();
    var newState = workInProgress.memoizedState;
    oldProps !== hasNewLifecycles ||
    oldState !== newState ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate ||
    (enableLazyContextPropagation &&
      null !== current &&
      null !== current.dependencies &&
      checkIfContextChanged(current.dependencies))
      ? ("function" === typeof getDerivedStateFromProps$jscomp$0 &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps$jscomp$0,
            nextProps
          ),
          (newState = workInProgress.memoizedState)),
        (contextType =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            contextType,
            nextProps,
            oldState,
            newState,
            oldContext
          ) ||
          (enableLazyContextPropagation &&
            null !== current &&
            null !== current.dependencies &&
            checkIfContextChanged(current.dependencies)))
          ? (getDerivedStateFromProps ||
              ("function" !== typeof instance.UNSAFE_componentWillUpdate &&
                "function" !== typeof instance.componentWillUpdate) ||
              ("function" === typeof instance.componentWillUpdate &&
                instance.componentWillUpdate(nextProps, newState, oldContext),
              "function" === typeof instance.UNSAFE_componentWillUpdate &&
                instance.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldContext
                )),
            "function" === typeof instance.componentDidUpdate &&
              (workInProgress.flags |= 4),
            "function" === typeof instance.getSnapshotBeforeUpdate &&
              (workInProgress.flags |= 1024))
          : ("function" !== typeof instance.componentDidUpdate ||
              (oldProps === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 4),
            "function" !== typeof instance.getSnapshotBeforeUpdate ||
              (oldProps === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 1024),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = newState)),
        (instance.props = nextProps),
        (instance.state = newState),
        (instance.context = oldContext),
        (nextProps = contextType))
      : ("function" !== typeof instance.componentDidUpdate ||
          (oldProps === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 4),
        "function" !== typeof instance.getSnapshotBeforeUpdate ||
          (oldProps === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 1024),
        (nextProps = !1));
  }
  return finishClassComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    hasContext,
    renderLanes
  );
}
function finishClassComponent(
  current,
  workInProgress,
  Component,
  shouldUpdate,
  hasContext,
  renderLanes
) {
  markRef(current, workInProgress);
  var didCaptureError = 0 !== (workInProgress.flags & 128);
  if (!shouldUpdate && !didCaptureError)
    return (
      hasContext && invalidateContextProvider(workInProgress, Component, !1),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  shouldUpdate = workInProgress.stateNode;
  ReactCurrentOwner$1.current = workInProgress;
  if (
    didCaptureError &&
    "function" !== typeof Component.getDerivedStateFromError
  ) {
    var nextChildren = null;
    profilerStartTime = -1;
  } else
    enableSchedulingProfiler && markComponentRenderStarted(workInProgress),
      (nextChildren = shouldUpdate.render()),
      enableSchedulingProfiler && markComponentRenderStopped();
  workInProgress.flags |= 1;
  null !== current && didCaptureError
    ? ((didCaptureError = nextChildren),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        current.child,
        null,
        renderLanes
      )),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        null,
        didCaptureError,
        renderLanes
      )))
    : reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  workInProgress.memoizedState = shouldUpdate.state;
  hasContext && invalidateContextProvider(workInProgress, Component, !0);
  return workInProgress.child;
}
function pushHostRootContext(workInProgress) {
  var root = workInProgress.stateNode;
  root.pendingContext
    ? pushTopLevelContextObject(
        workInProgress,
        root.pendingContext,
        root.pendingContext !== root.context
      )
    : root.context &&
      pushTopLevelContextObject(workInProgress, root.context, !1);
  pushHostContainer(workInProgress, root.containerInfo);
}
function mountHostRootWithoutHydrating(
  current,
  workInProgress,
  nextChildren,
  renderLanes,
  recoverableError
) {
  resetHydrationState();
  queueHydrationError(recoverableError);
  workInProgress.flags |= 256;
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
var SUSPENDED_MARKER = { dehydrated: null, treeContext: null, retryLane: 0 };
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
}
function getRemainingWorkInPrimaryTree(
  current,
  primaryTreeDidDefer,
  renderLanes
) {
  current = null !== current ? current.childLanes & ~renderLanes : 0;
  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
  return current;
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    showFallback = !1,
    didSuspend = 0 !== (workInProgress.flags & 128),
    JSCompiler_temp;
  (JSCompiler_temp = didSuspend) ||
    (JSCompiler_temp =
      null !== current && null === current.memoizedState
        ? !1
        : 0 !== (suspenseStackCursor.current & 2));
  JSCompiler_temp && ((showFallback = !0), (workInProgress.flags &= -129));
  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
  workInProgress.flags &= -33;
  if (null === current) {
    if (isHydrating) {
      showFallback
        ? pushPrimaryTreeSuspenseHandler(workInProgress)
        : reuseSuspenseHandlerOnStack(workInProgress);
      if (isHydrating) {
        var nextInstance = (didSuspend = nextHydratableInstance);
        if (!nextInstance)
          shouldClientRenderOnMismatch(workInProgress) &&
            throwOnHydrationMismatch(),
            insertNonHydratedInstance(hydrationParentFiber, workInProgress),
            (isHydrating = !1),
            (hydrationParentFiber = workInProgress),
            (nextHydratableInstance = didSuspend);
        else if (!tryHydrateSuspense(workInProgress, nextInstance)) {
          shouldClientRenderOnMismatch(workInProgress) &&
            throwOnHydrationMismatch();
          nextHydratableInstance = getNextHydratableSibling(nextInstance);
          var prevHydrationParentFiber = hydrationParentFiber;
          nextHydratableInstance &&
          tryHydrateSuspense(workInProgress, nextHydratableInstance)
            ? deleteHydratableInstance(prevHydrationParentFiber, nextInstance)
            : (insertNonHydratedInstance(hydrationParentFiber, workInProgress),
              (isHydrating = !1),
              (hydrationParentFiber = workInProgress),
              (nextHydratableInstance = didSuspend));
        }
      }
      didSuspend = workInProgress.memoizedState;
      if (
        null !== didSuspend &&
        ((didSuspend = didSuspend.dehydrated), null !== didSuspend)
      )
        return (
          0 === (workInProgress.mode & 1)
            ? (workInProgress.lanes = 2)
            : "$!" === didSuspend.data
            ? (workInProgress.lanes = 16)
            : (workInProgress.lanes = 536870912),
          null
        );
      popSuspenseHandler(workInProgress);
    }
    didSuspend = nextProps.children;
    nextInstance = nextProps.fallback;
    if (showFallback)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        (nextProps = mountSuspenseFallbackChildren(
          workInProgress,
          didSuspend,
          nextInstance,
          renderLanes
        )),
        (showFallback = workInProgress.child),
        (showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes)),
        (showFallback.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        enableTransitionTracing &&
          ((workInProgress = enableTransitionTracing
            ? transitionStack.current
            : null),
          null !== workInProgress &&
            ((renderLanes = enableTransitionTracing
              ? markerInstanceStack.current
              : null),
            (current = showFallback.updateQueue),
            null === current
              ? (showFallback.updateQueue = {
                  transitions: workInProgress,
                  markerInstances: renderLanes,
                  retryQueue: null
                })
              : ((current.transitions = workInProgress),
                (current.markerInstances = renderLanes)))),
        nextProps
      );
    if ("number" === typeof nextProps.unstable_expectedLoadTime)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        (nextProps = mountSuspenseFallbackChildren(
          workInProgress,
          didSuspend,
          nextInstance,
          renderLanes
        )),
        (showFallback = workInProgress.child),
        (showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes)),
        (showFallback.childLanes = getRemainingWorkInPrimaryTree(
          current,
          JSCompiler_temp,
          renderLanes
        )),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        (workInProgress.lanes = 4194304),
        nextProps
      );
    pushPrimaryTreeSuspenseHandler(workInProgress);
    return mountSuspensePrimaryChildren(workInProgress, didSuspend);
  }
  nextInstance = current.memoizedState;
  if (
    null !== nextInstance &&
    ((prevHydrationParentFiber = nextInstance.dehydrated),
    null !== prevHydrationParentFiber)
  )
    return updateDehydratedSuspenseComponent(
      current,
      workInProgress,
      didSuspend,
      JSCompiler_temp,
      nextProps,
      prevHydrationParentFiber,
      nextInstance,
      renderLanes
    );
  if (showFallback) {
    reuseSuspenseHandlerOnStack(workInProgress);
    showFallback = nextProps.fallback;
    didSuspend = workInProgress.mode;
    nextInstance = current.child;
    prevHydrationParentFiber = nextInstance.sibling;
    var primaryChildProps = { mode: "hidden", children: nextProps.children };
    0 === (didSuspend & 1) && workInProgress.child !== nextInstance
      ? ((nextProps = workInProgress.child),
        (nextProps.childLanes = 0),
        (nextProps.pendingProps = primaryChildProps),
        workInProgress.mode & 2 &&
          ((nextProps.actualDuration = 0),
          (nextProps.actualStartTime = -1),
          (nextProps.selfBaseDuration = nextInstance.selfBaseDuration),
          (nextProps.treeBaseDuration = nextInstance.treeBaseDuration)),
        (workInProgress.deletions = null))
      : ((nextProps = createWorkInProgress(nextInstance, primaryChildProps)),
        (nextProps.subtreeFlags = nextInstance.subtreeFlags & 31457280));
    null !== prevHydrationParentFiber
      ? (showFallback = createWorkInProgress(
          prevHydrationParentFiber,
          showFallback
        ))
      : ((showFallback = createFiberFromFragment(
          showFallback,
          didSuspend,
          renderLanes,
          null
        )),
        (showFallback.flags |= 2));
    showFallback.return = workInProgress;
    nextProps.return = workInProgress;
    nextProps.sibling = showFallback;
    workInProgress.child = nextProps;
    nextProps = showFallback;
    showFallback = workInProgress.child;
    didSuspend = current.child.memoizedState;
    null === didSuspend
      ? (didSuspend = mountSuspenseOffscreenState(renderLanes))
      : ((nextInstance = didSuspend.cachePool),
        null !== nextInstance
          ? ((prevHydrationParentFiber = CacheContext._currentValue),
            (nextInstance =
              nextInstance.parent !== prevHydrationParentFiber
                ? {
                    parent: prevHydrationParentFiber,
                    pool: prevHydrationParentFiber
                  }
                : nextInstance))
          : (nextInstance = getSuspendedCache()),
        (didSuspend = {
          baseLanes: didSuspend.baseLanes | renderLanes,
          cachePool: nextInstance
        }));
    showFallback.memoizedState = didSuspend;
    enableTransitionTracing &&
      ((didSuspend = enableTransitionTracing ? transitionStack.current : null),
      null !== didSuspend &&
        ((nextInstance = enableTransitionTracing
          ? markerInstanceStack.current
          : null),
        (prevHydrationParentFiber = showFallback.updateQueue),
        (primaryChildProps = current.updateQueue),
        null === prevHydrationParentFiber
          ? (showFallback.updateQueue = {
              transitions: didSuspend,
              markerInstances: nextInstance,
              retryQueue: null
            })
          : prevHydrationParentFiber === primaryChildProps
          ? (showFallback.updateQueue = {
              transitions: didSuspend,
              markerInstances: nextInstance,
              retryQueue:
                null !== primaryChildProps ? primaryChildProps.retryQueue : null
            })
          : ((prevHydrationParentFiber.transitions = didSuspend),
            (prevHydrationParentFiber.markerInstances = nextInstance))));
    showFallback.childLanes = getRemainingWorkInPrimaryTree(
      current,
      JSCompiler_temp,
      renderLanes
    );
    workInProgress.memoizedState = SUSPENDED_MARKER;
    return nextProps;
  }
  pushPrimaryTreeSuspenseHandler(workInProgress);
  JSCompiler_temp = current.child;
  current = JSCompiler_temp.sibling;
  JSCompiler_temp = createWorkInProgress(JSCompiler_temp, {
    mode: "visible",
    children: nextProps.children
  });
  0 === (workInProgress.mode & 1) && (JSCompiler_temp.lanes = renderLanes);
  JSCompiler_temp.return = workInProgress;
  JSCompiler_temp.sibling = null;
  null !== current &&
    ((renderLanes = workInProgress.deletions),
    null === renderLanes
      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
      : renderLanes.push(current));
  workInProgress.child = JSCompiler_temp;
  workInProgress.memoizedState = null;
  return JSCompiler_temp;
}
function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
  primaryChildren = createFiberFromOffscreen(
    { mode: "visible", children: primaryChildren },
    workInProgress.mode,
    0,
    null
  );
  primaryChildren.return = workInProgress;
  return (workInProgress.child = primaryChildren);
}
function mountSuspenseFallbackChildren(
  workInProgress,
  primaryChildren,
  fallbackChildren,
  renderLanes
) {
  var mode = workInProgress.mode,
    progressedPrimaryFragment = workInProgress.child;
  primaryChildren = { mode: "hidden", children: primaryChildren };
  0 === (mode & 1) && null !== progressedPrimaryFragment
    ? ((progressedPrimaryFragment.childLanes = 0),
      (progressedPrimaryFragment.pendingProps = primaryChildren),
      workInProgress.mode & 2 &&
        ((progressedPrimaryFragment.actualDuration = 0),
        (progressedPrimaryFragment.actualStartTime = -1),
        (progressedPrimaryFragment.selfBaseDuration = 0),
        (progressedPrimaryFragment.treeBaseDuration = 0)))
    : (progressedPrimaryFragment = createFiberFromOffscreen(
        primaryChildren,
        mode,
        0,
        null
      ));
  fallbackChildren = createFiberFromFragment(
    fallbackChildren,
    mode,
    renderLanes,
    null
  );
  progressedPrimaryFragment.return = workInProgress;
  fallbackChildren.return = workInProgress;
  progressedPrimaryFragment.sibling = fallbackChildren;
  workInProgress.child = progressedPrimaryFragment;
  return fallbackChildren;
}
function retrySuspenseComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes,
  recoverableError
) {
  null !== recoverableError && queueHydrationError(recoverableError);
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountSuspensePrimaryChildren(
    workInProgress,
    workInProgress.pendingProps.children
  );
  current.flags |= 2;
  workInProgress.memoizedState = null;
  return current;
}
function updateDehydratedSuspenseComponent(
  current,
  workInProgress,
  didSuspend,
  didPrimaryChildrenDefer,
  nextProps,
  suspenseInstance,
  suspenseState,
  renderLanes
) {
  if (didSuspend) {
    if (workInProgress.flags & 256)
      return (
        pushPrimaryTreeSuspenseHandler(workInProgress),
        (workInProgress.flags &= -257),
        (suspenseInstance = createCapturedValueFromError(
          Error(formatProdErrorMessage(422))
        )),
        retrySuspenseComponentWithoutHydrating(
          current,
          workInProgress,
          renderLanes,
          suspenseInstance
        )
      );
    if (null !== workInProgress.memoizedState)
      return (
        reuseSuspenseHandlerOnStack(workInProgress),
        (workInProgress.child = current.child),
        (workInProgress.flags |= 128),
        null
      );
    reuseSuspenseHandlerOnStack(workInProgress);
    suspenseInstance = nextProps.fallback;
    suspenseState = workInProgress.mode;
    nextProps = createFiberFromOffscreen(
      { mode: "visible", children: nextProps.children },
      suspenseState,
      0,
      null
    );
    suspenseInstance = createFiberFromFragment(
      suspenseInstance,
      suspenseState,
      renderLanes,
      null
    );
    suspenseInstance.flags |= 2;
    nextProps.return = workInProgress;
    suspenseInstance.return = workInProgress;
    nextProps.sibling = suspenseInstance;
    workInProgress.child = nextProps;
    0 !== (workInProgress.mode & 1) &&
      reconcileChildFibers(workInProgress, current.child, null, renderLanes);
    suspenseState = workInProgress.child;
    suspenseState.memoizedState = mountSuspenseOffscreenState(renderLanes);
    suspenseState.childLanes = getRemainingWorkInPrimaryTree(
      current,
      didPrimaryChildrenDefer,
      renderLanes
    );
    workInProgress.memoizedState = SUSPENDED_MARKER;
    return suspenseInstance;
  }
  pushPrimaryTreeSuspenseHandler(workInProgress);
  if (0 === (workInProgress.mode & 1))
    return retrySuspenseComponentWithoutHydrating(
      current,
      workInProgress,
      renderLanes,
      null
    );
  if ("$!" === suspenseInstance.data) {
    suspenseInstance =
      suspenseInstance.nextSibling && suspenseInstance.nextSibling.dataset;
    if (suspenseInstance) var digest = suspenseInstance.dgst;
    suspenseInstance = digest;
    didPrimaryChildrenDefer = Error(formatProdErrorMessage(419));
    didPrimaryChildrenDefer.digest = suspenseInstance;
    suspenseInstance = createCapturedValueFromError(
      didPrimaryChildrenDefer,
      suspenseInstance,
      void 0
    );
    return retrySuspenseComponentWithoutHydrating(
      current,
      workInProgress,
      renderLanes,
      suspenseInstance
    );
  }
  enableLazyContextPropagation &&
    !didReceiveUpdate &&
    propagateParentContextChanges(current, workInProgress, renderLanes, !1);
  didPrimaryChildrenDefer = 0 !== (renderLanes & current.childLanes);
  if (didReceiveUpdate || didPrimaryChildrenDefer) {
    didPrimaryChildrenDefer = workInProgressRoot;
    if (null !== didPrimaryChildrenDefer) {
      nextProps = renderLanes & -renderLanes;
      if (enableUnifiedSyncLane && 0 !== (nextProps & SyncUpdateLanes))
        nextProps = 1;
      else
        switch (nextProps) {
          case 2:
            nextProps = 1;
            break;
          case 8:
            nextProps = 4;
            break;
          case 32:
            nextProps = 16;
            break;
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            nextProps = 64;
            break;
          case 268435456:
            nextProps = 134217728;
            break;
          default:
            nextProps = 0;
        }
      nextProps =
        0 !==
        (nextProps & (didPrimaryChildrenDefer.suspendedLanes | renderLanes))
          ? 0
          : nextProps;
      if (0 !== nextProps && nextProps !== suspenseState.retryLane)
        throw (
          ((suspenseState.retryLane = nextProps),
          enqueueConcurrentRenderForLane(current, nextProps),
          scheduleUpdateOnFiber(didPrimaryChildrenDefer, current, nextProps),
          SelectiveHydrationException)
        );
    }
    "$?" !== suspenseInstance.data && renderDidSuspendDelayIfPossible();
    return retrySuspenseComponentWithoutHydrating(
      current,
      workInProgress,
      renderLanes,
      null
    );
  }
  if ("$?" === suspenseInstance.data)
    return (
      (workInProgress.flags |= 128),
      (workInProgress.child = current.child),
      (workInProgress = retryDehydratedSuspenseBoundary.bind(null, current)),
      (suspenseInstance._reactRetry = workInProgress),
      null
    );
  current = suspenseState.treeContext;
  nextHydratableInstance = getNextHydratable(suspenseInstance.nextSibling);
  hydrationParentFiber = workInProgress;
  isHydrating = !0;
  hydrationErrors = null;
  rootOrSingletonContext = !1;
  null !== current &&
    ((idStack[idStackIndex++] = treeContextId),
    (idStack[idStackIndex++] = treeContextOverflow),
    (idStack[idStackIndex++] = treeContextProvider),
    (treeContextId = current.id),
    (treeContextOverflow = current.overflow),
    (treeContextProvider = workInProgress));
  workInProgress = mountSuspensePrimaryChildren(
    workInProgress,
    nextProps.children
  );
  workInProgress.flags |= 4096;
  return workInProgress;
}
function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
  fiber.lanes |= renderLanes;
  var alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes);
  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
}
function initSuspenseListRenderState(
  workInProgress,
  isBackwards,
  tail,
  lastContentRow,
  tailMode
) {
  var renderState = workInProgress.memoizedState;
  null === renderState
    ? (workInProgress.memoizedState = {
        isBackwards: isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail: tail,
        tailMode: tailMode
      })
    : ((renderState.isBackwards = isBackwards),
      (renderState.rendering = null),
      (renderState.renderingStartTime = 0),
      (renderState.last = lastContentRow),
      (renderState.tail = tail),
      (renderState.tailMode = tailMode));
}
function updateSuspenseListComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    revealOrder = nextProps.revealOrder,
    tailMode = nextProps.tail;
  reconcileChildren(current, workInProgress, nextProps.children, renderLanes);
  nextProps = suspenseStackCursor.current;
  if (0 !== (nextProps & 2))
    (nextProps = (nextProps & 1) | 2), (workInProgress.flags |= 128);
  else {
    if (null !== current && 0 !== (current.flags & 128))
      a: for (current = workInProgress.child; null !== current; ) {
        if (13 === current.tag)
          null !== current.memoizedState &&
            scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (19 === current.tag)
          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (null !== current.child) {
          current.child.return = current;
          current = current.child;
          continue;
        }
        if (current === workInProgress) break a;
        for (; null === current.sibling; ) {
          if (null === current.return || current.return === workInProgress)
            break a;
          current = current.return;
        }
        current.sibling.return = current.return;
        current = current.sibling;
      }
    nextProps &= 1;
  }
  push(suspenseStackCursor, nextProps);
  if (0 === (workInProgress.mode & 1)) workInProgress.memoizedState = null;
  else
    switch (revealOrder) {
      case "forwards":
        renderLanes = workInProgress.child;
        for (revealOrder = null; null !== renderLanes; )
          (current = renderLanes.alternate),
            null !== current &&
              null === findFirstSuspended(current) &&
              (revealOrder = renderLanes),
            (renderLanes = renderLanes.sibling);
        renderLanes = revealOrder;
        null === renderLanes
          ? ((revealOrder = workInProgress.child),
            (workInProgress.child = null))
          : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
        initSuspenseListRenderState(
          workInProgress,
          !1,
          revealOrder,
          renderLanes,
          tailMode
        );
        break;
      case "backwards":
        renderLanes = null;
        revealOrder = workInProgress.child;
        for (workInProgress.child = null; null !== revealOrder; ) {
          current = revealOrder.alternate;
          if (null !== current && null === findFirstSuspended(current)) {
            workInProgress.child = revealOrder;
            break;
          }
          current = revealOrder.sibling;
          revealOrder.sibling = renderLanes;
          renderLanes = revealOrder;
          revealOrder = current;
        }
        initSuspenseListRenderState(
          workInProgress,
          !0,
          renderLanes,
          null,
          tailMode
        );
        break;
      case "together":
        initSuspenseListRenderState(workInProgress, !1, null, null, void 0);
        break;
      default:
        workInProgress.memoizedState = null;
    }
  return workInProgress.child;
}
function resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress) {
  0 === (workInProgress.mode & 1) &&
    null !== current &&
    ((current.alternate = null),
    (workInProgress.alternate = null),
    (workInProgress.flags |= 2));
}
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  null !== current && (workInProgress.dependencies = current.dependencies);
  profilerStartTime = -1;
  workInProgressRootSkippedLanes |= workInProgress.lanes;
  if (0 === (renderLanes & workInProgress.childLanes))
    if (enableLazyContextPropagation && null !== current) {
      if (
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        0 === (renderLanes & workInProgress.childLanes))
      )
        return null;
    } else return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error(formatProdErrorMessage(153));
  if (null !== workInProgress.child) {
    current = workInProgress.child;
    renderLanes = createWorkInProgress(current, current.pendingProps);
    workInProgress.child = renderLanes;
    for (renderLanes.return = workInProgress; null !== current.sibling; )
      (current = current.sibling),
        (renderLanes = renderLanes.sibling =
          createWorkInProgress(current, current.pendingProps)),
        (renderLanes.return = workInProgress);
    renderLanes.sibling = null;
  }
  return workInProgress.child;
}
function checkScheduledUpdateOrContext(current, renderLanes) {
  return 0 !== (current.lanes & renderLanes) ||
    (enableLazyContextPropagation &&
      ((current = current.dependencies),
      null !== current && checkIfContextChanged(current)))
    ? !0
    : !1;
}
function attemptEarlyBailoutIfNoScheduledUpdate(
  current,
  workInProgress,
  renderLanes
) {
  switch (workInProgress.tag) {
    case 3:
      pushHostRootContext(workInProgress);
      enableTransitionTracing &&
        push(transitionStack, workInProgressTransitions);
      enableTransitionTracing && pushRootMarkerInstance(workInProgress);
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
      resetHydrationState();
      break;
    case 27:
    case 5:
      pushHostContext(workInProgress);
      break;
    case 1:
      isContextProvider(workInProgress.type) &&
        pushContextProvider(workInProgress);
      break;
    case 4:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case 10:
      pushProvider(
        workInProgress,
        enableRenderableContext
          ? workInProgress.type
          : workInProgress.type._context,
        workInProgress.memoizedProps.value
      );
      break;
    case 12:
      0 !== (renderLanes & workInProgress.childLanes) &&
        (workInProgress.flags |= 4);
      var stateNode = workInProgress.stateNode;
      stateNode.effectDuration = 0;
      stateNode.passiveEffectDuration = 0;
      break;
    case 13:
      stateNode = workInProgress.memoizedState;
      if (null !== stateNode) {
        if (null !== stateNode.dehydrated)
          return (
            pushPrimaryTreeSuspenseHandler(workInProgress),
            (workInProgress.flags |= 128),
            null
          );
        if (0 !== (renderLanes & workInProgress.child.childLanes))
          return updateSuspenseComponent(current, workInProgress, renderLanes);
        pushPrimaryTreeSuspenseHandler(workInProgress);
        current = bailoutOnAlreadyFinishedWork(
          current,
          workInProgress,
          renderLanes
        );
        return null !== current ? current.sibling : null;
      }
      pushPrimaryTreeSuspenseHandler(workInProgress);
      break;
    case 19:
      var didSuspendBefore = 0 !== (current.flags & 128);
      stateNode = 0 !== (renderLanes & workInProgress.childLanes);
      enableLazyContextPropagation &&
        !stateNode &&
        (propagateParentContextChanges(
          current,
          workInProgress,
          renderLanes,
          !1
        ),
        (stateNode = 0 !== (renderLanes & workInProgress.childLanes)));
      if (didSuspendBefore) {
        if (stateNode)
          return updateSuspenseListComponent(
            current,
            workInProgress,
            renderLanes
          );
        workInProgress.flags |= 128;
      }
      didSuspendBefore = workInProgress.memoizedState;
      null !== didSuspendBefore &&
        ((didSuspendBefore.rendering = null),
        (didSuspendBefore.tail = null),
        (didSuspendBefore.lastEffect = null));
      push(suspenseStackCursor, suspenseStackCursor.current);
      if (stateNode) break;
      else return null;
    case 22:
    case 23:
      return (
        (workInProgress.lanes = 0),
        updateOffscreenComponent(current, workInProgress, renderLanes)
      );
    case 24:
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
      break;
    case 25:
      enableTransitionTracing &&
        ((stateNode = workInProgress.stateNode),
        null !== stateNode && pushMarkerInstance(workInProgress, stateNode));
  }
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
var valueCursor = createCursor(null),
  currentlyRenderingFiber = null,
  lastContextDependency = null,
  lastFullyObservedContext = null;
function resetContextDependencies() {
  lastFullyObservedContext =
    lastContextDependency =
    currentlyRenderingFiber =
      null;
}
function pushProvider(providerFiber, context, nextValue) {
  push(valueCursor, context._currentValue);
  context._currentValue = nextValue;
}
function popProvider(context) {
  context._currentValue = valueCursor.current;
  pop(valueCursor);
}
function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
  for (; null !== parent; ) {
    var alternate = parent.alternate;
    (parent.childLanes & renderLanes) !== renderLanes
      ? ((parent.childLanes |= renderLanes),
        null !== alternate && (alternate.childLanes |= renderLanes))
      : null !== alternate &&
        (alternate.childLanes & renderLanes) !== renderLanes &&
        (alternate.childLanes |= renderLanes);
    if (parent === propagationRoot) break;
    parent = parent.return;
  }
}
function propagateContextChange(workInProgress, context, renderLanes) {
  if (enableLazyContextPropagation)
    propagateContextChanges(workInProgress, [context], renderLanes, !0);
  else if (!enableLazyContextPropagation) {
    var fiber = workInProgress.child;
    null !== fiber && (fiber.return = workInProgress);
    for (; null !== fiber; ) {
      var list = fiber.dependencies;
      if (null !== list) {
        var nextFiber = fiber.child;
        for (var dependency = list.firstContext; null !== dependency; ) {
          if (dependency.context === context) {
            if (1 === fiber.tag) {
              dependency = createUpdate(renderLanes & -renderLanes);
              dependency.tag = 2;
              var updateQueue = fiber.updateQueue;
              if (null !== updateQueue) {
                updateQueue = updateQueue.shared;
                var pending = updateQueue.pending;
                null === pending
                  ? (dependency.next = dependency)
                  : ((dependency.next = pending.next),
                    (pending.next = dependency));
                updateQueue.pending = dependency;
              }
            }
            fiber.lanes |= renderLanes;
            dependency = fiber.alternate;
            null !== dependency && (dependency.lanes |= renderLanes);
            scheduleContextWorkOnParentPath(
              fiber.return,
              renderLanes,
              workInProgress
            );
            list.lanes |= renderLanes;
            break;
          }
          dependency = dependency.next;
        }
      } else if (10 === fiber.tag)
        nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
      else if (18 === fiber.tag) {
        nextFiber = fiber.return;
        if (null === nextFiber) throw Error(formatProdErrorMessage(341));
        nextFiber.lanes |= renderLanes;
        list = nextFiber.alternate;
        null !== list && (list.lanes |= renderLanes);
        scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
        nextFiber = fiber.sibling;
      } else nextFiber = fiber.child;
      if (null !== nextFiber) nextFiber.return = fiber;
      else
        for (nextFiber = fiber; null !== nextFiber; ) {
          if (nextFiber === workInProgress) {
            nextFiber = null;
            break;
          }
          fiber = nextFiber.sibling;
          if (null !== fiber) {
            fiber.return = nextFiber.return;
            nextFiber = fiber;
            break;
          }
          nextFiber = nextFiber.return;
        }
      fiber = nextFiber;
    }
  }
}
function propagateContextChanges(
  workInProgress,
  contexts,
  renderLanes,
  forcePropagateEntireTree
) {
  if (enableLazyContextPropagation) {
    var fiber = workInProgress.child;
    null !== fiber && (fiber.return = workInProgress);
    for (; null !== fiber; ) {
      var list = fiber.dependencies;
      if (null !== list) {
        var nextFiber = fiber.child;
        list = list.firstContext;
        a: for (; null !== list; ) {
          var dependency = list;
          list = fiber;
          for (var i = 0; i < contexts.length; i++)
            if (dependency.context === contexts[i]) {
              list.lanes |= renderLanes;
              dependency = list.alternate;
              null !== dependency && (dependency.lanes |= renderLanes);
              scheduleContextWorkOnParentPath(
                list.return,
                renderLanes,
                workInProgress
              );
              forcePropagateEntireTree || (nextFiber = null);
              break a;
            }
          list = dependency.next;
        }
      } else if (18 === fiber.tag) {
        nextFiber = fiber.return;
        if (null === nextFiber) throw Error(formatProdErrorMessage(341));
        nextFiber.lanes |= renderLanes;
        list = nextFiber.alternate;
        null !== list && (list.lanes |= renderLanes);
        scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
        nextFiber = null;
      } else nextFiber = fiber.child;
      if (null !== nextFiber) nextFiber.return = fiber;
      else
        for (nextFiber = fiber; null !== nextFiber; ) {
          if (nextFiber === workInProgress) {
            nextFiber = null;
            break;
          }
          fiber = nextFiber.sibling;
          if (null !== fiber) {
            fiber.return = nextFiber.return;
            nextFiber = fiber;
            break;
          }
          nextFiber = nextFiber.return;
        }
      fiber = nextFiber;
    }
  }
}
function propagateParentContextChanges(
  current,
  workInProgress,
  renderLanes,
  forcePropagateEntireTree
) {
  if (enableLazyContextPropagation) {
    current = null;
    for (
      var parent = workInProgress, isInsidePropagationBailout = !1;
      null !== parent;

    ) {
      if (!isInsidePropagationBailout)
        if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
        else if (0 !== (parent.flags & 262144)) break;
      if (10 === parent.tag) {
        var currentParent = parent.alternate;
        if (null === currentParent) throw Error(formatProdErrorMessage(387));
        currentParent = currentParent.memoizedProps;
        if (null !== currentParent) {
          var context = enableRenderableContext
            ? parent.type
            : parent.type._context;
          objectIs(parent.pendingProps.value, currentParent.value) ||
            (null !== current ? current.push(context) : (current = [context]));
        }
      } else if (parent === hostTransitionProviderCursor.current) {
        currentParent = parent.alternate;
        if (null === currentParent) throw Error(formatProdErrorMessage(387));
        currentParent.memoizedState.memoizedState !==
          parent.memoizedState.memoizedState &&
          (null !== current
            ? current.push(HostTransitionContext)
            : (current = [HostTransitionContext]));
      }
      parent = parent.return;
    }
    null !== current &&
      propagateContextChanges(
        workInProgress,
        current,
        renderLanes,
        forcePropagateEntireTree
      );
    workInProgress.flags |= 262144;
  }
}
function checkIfContextChanged(currentDependencies) {
  if (!enableLazyContextPropagation) return !1;
  for (
    currentDependencies = currentDependencies.firstContext;
    null !== currentDependencies;

  ) {
    if (
      !objectIs(
        currentDependencies.context._currentValue,
        currentDependencies.memoizedValue
      )
    )
      return !0;
    currentDependencies = currentDependencies.next;
  }
  return !1;
}
function prepareToReadContext(workInProgress, renderLanes) {
  currentlyRenderingFiber = workInProgress;
  lastFullyObservedContext = lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress &&
    (enableLazyContextPropagation
      ? (workInProgress.firstContext = null)
      : null !== workInProgress.firstContext &&
        (0 !== (workInProgress.lanes & renderLanes) && (didReceiveUpdate = !0),
        (workInProgress.firstContext = null)));
}
function readContext(context) {
  return readContextForConsumer(currentlyRenderingFiber, context);
}
function readContextDuringReconcilation(consumer, context, renderLanes) {
  null === currentlyRenderingFiber &&
    prepareToReadContext(consumer, renderLanes);
  return readContextForConsumer(consumer, context);
}
function readContextForConsumer(consumer, context) {
  var value = context._currentValue;
  if (lastFullyObservedContext !== context)
    if (
      ((context = { context: context, memoizedValue: value, next: null }),
      null === lastContextDependency)
    ) {
      if (null === consumer) throw Error(formatProdErrorMessage(308));
      lastContextDependency = context;
      consumer.dependencies = { lanes: 0, firstContext: context };
      enableLazyContextPropagation && (consumer.flags |= 524288);
    } else lastContextDependency = lastContextDependency.next = context;
  return value;
}
var AbortControllerLocal =
    "undefined" !== typeof AbortController
      ? AbortController
      : function () {
          var listeners = [],
            signal = (this.signal = {
              aborted: !1,
              addEventListener: function (type, listener) {
                listeners.push(listener);
              }
            });
          this.abort = function () {
            signal.aborted = !0;
            listeners.forEach(function (listener) {
              return listener();
            });
          };
        },
  scheduleCallback$1 = Scheduler.unstable_scheduleCallback,
  NormalPriority = Scheduler.unstable_NormalPriority,
  CacheContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
function createCache() {
  return {
    controller: new AbortControllerLocal(),
    data: new Map(),
    refCount: 0
  };
}
function releaseCache(cache) {
  cache.refCount--;
  0 === cache.refCount &&
    scheduleCallback$1(NormalPriority, function () {
      cache.controller.abort();
    });
}
var ReactCurrentBatchConfig$2 = ReactSharedInternals.ReactCurrentBatchConfig;
function requestCurrentTransition() {
  var transition = ReactCurrentBatchConfig$2.transition;
  null !== transition && transition._callbacks.add(handleAsyncAction);
  return transition;
}
function handleAsyncAction(transition, thenable) {
  entangleAsyncAction(transition, thenable);
}
function notifyTransitionCallbacks(transition, returnValue) {
  transition._callbacks.forEach(function (callback) {
    return callback(transition, returnValue);
  });
}
var resumedCache = createCursor(null),
  transitionStack = createCursor(null);
function peekCacheFromPool() {
  var cacheResumedFromPreviousRender = resumedCache.current;
  return null !== cacheResumedFromPreviousRender
    ? cacheResumedFromPreviousRender
    : workInProgressRoot.pooledCache;
}
function pushTransition(
  offscreenWorkInProgress,
  prevCachePool,
  newTransitions
) {
  null === prevCachePool
    ? push(resumedCache, resumedCache.current)
    : push(resumedCache, prevCachePool.pool);
  enableTransitionTracing &&
    (null === transitionStack.current
      ? push(transitionStack, newTransitions)
      : null === newTransitions
      ? push(transitionStack, transitionStack.current)
      : push(transitionStack, transitionStack.current.concat(newTransitions)));
}
function popTransition(workInProgress, current) {
  null !== current &&
    (enableTransitionTracing && pop(transitionStack), pop(resumedCache));
}
function getSuspendedCache() {
  var cacheFromPool = peekCacheFromPool();
  return null === cacheFromPool
    ? null
    : { parent: CacheContext._currentValue, pool: cacheFromPool };
}
var emptyObject = {};
function collectScopedNodesFromChildren(
  startingChild,
  fn$jscomp$0,
  scopedNodes$jscomp$0
) {
  for (; null !== startingChild; ) {
    var node = startingChild,
      fn = fn$jscomp$0,
      scopedNodes = scopedNodes$jscomp$0;
    if (5 === node.tag) {
      var type = node.type,
        memoizedProps = node.memoizedProps,
        instance = node.stateNode;
      null !== instance &&
        !0 === fn(type, memoizedProps || emptyObject, instance) &&
        scopedNodes.push(instance);
    }
    type = node.child;
    isFiberSuspenseAndTimedOut(node) && (type = node.child.sibling.child);
    null !== type && collectScopedNodesFromChildren(type, fn, scopedNodes);
    startingChild = startingChild.sibling;
  }
}
function collectFirstScopedNodeFromChildren(startingChild, fn$jscomp$0) {
  for (; null !== startingChild; ) {
    a: {
      var JSCompiler_inline_result = startingChild;
      var fn = fn$jscomp$0;
      if (5 === JSCompiler_inline_result.tag) {
        var type = JSCompiler_inline_result.type,
          memoizedProps = JSCompiler_inline_result.memoizedProps,
          instance = JSCompiler_inline_result.stateNode;
        if (null !== instance && !0 === fn(type, memoizedProps, instance)) {
          JSCompiler_inline_result = instance;
          break a;
        }
      }
      type = JSCompiler_inline_result.child;
      isFiberSuspenseAndTimedOut(JSCompiler_inline_result) &&
        (type = JSCompiler_inline_result.child.sibling.child);
      JSCompiler_inline_result =
        null !== type ? collectFirstScopedNodeFromChildren(type, fn) : null;
    }
    if (null !== JSCompiler_inline_result) return JSCompiler_inline_result;
    startingChild = startingChild.sibling;
  }
  return null;
}
function collectNearestChildContextValues(
  startingChild,
  context$jscomp$0,
  childContextValues$jscomp$0
) {
  for (; null !== startingChild; ) {
    var node = startingChild,
      context = context$jscomp$0,
      childContextValues = childContextValues$jscomp$0;
    if (
      10 === node.tag &&
      (enableRenderableContext ? node.type : node.type._context) === context
    )
      childContextValues.push(node.memoizedProps.value);
    else {
      var child = node.child;
      isFiberSuspenseAndTimedOut(node) && (child = node.child.sibling.child);
      null !== child &&
        collectNearestChildContextValues(child, context, childContextValues);
    }
    startingChild = startingChild.sibling;
  }
}
function DO_NOT_USE_queryAllNodes(fn) {
  var currentFiber = getInstanceFromScope(this);
  if (null === currentFiber) return null;
  currentFiber = currentFiber.child;
  var scopedNodes = [];
  null !== currentFiber &&
    collectScopedNodesFromChildren(currentFiber, fn, scopedNodes);
  return 0 === scopedNodes.length ? null : scopedNodes;
}
function DO_NOT_USE_queryFirstNode(fn) {
  var currentFiber = getInstanceFromScope(this);
  if (null === currentFiber) return null;
  currentFiber = currentFiber.child;
  return null !== currentFiber
    ? collectFirstScopedNodeFromChildren(currentFiber, fn)
    : null;
}
function containsNode$1(node) {
  for (node = getClosestInstanceFromNode(node) || null; null !== node; ) {
    if (21 === node.tag && node.stateNode === this) return !0;
    node = node.return;
  }
  return !1;
}
function getChildContextValues(context) {
  var currentFiber = getInstanceFromScope(this);
  if (null === currentFiber) return [];
  currentFiber = currentFiber.child;
  var childContextValues = [];
  null !== currentFiber &&
    collectNearestChildContextValues(currentFiber, context, childContextValues);
  return childContextValues;
}
function markUpdate(workInProgress) {
  workInProgress.flags |= 4;
}
function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
    workInProgress.flags &= -16777217;
  else if (
    ((workInProgress.flags |= 16777216),
    0 === (workInProgressRootRenderLanes & 42) &&
      ((resource =
        "stylesheet" === resource.type && 0 === (resource.state.loading & 3)
          ? !1
          : !0),
      !resource))
  )
    if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
    else
      throw (
        ((suspendedThenable = noopSuspenseyCommitThenable),
        SuspenseyCommitException)
      );
}
function scheduleRetryEffect(workInProgress, retryQueue) {
  null !== retryQueue
    ? (workInProgress.flags |= 4)
    : workInProgress.flags & 16384 &&
      ((retryQueue =
        22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
      (workInProgress.lanes |= retryQueue));
}
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  if (!isHydrating)
    switch (renderState.tailMode) {
      case "hidden":
        hasRenderedATailFallback = renderState.tail;
        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
          null !== hasRenderedATailFallback.alternate &&
            (lastTailNode = hasRenderedATailFallback),
            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
        null === lastTailNode
          ? (renderState.tail = null)
          : (lastTailNode.sibling = null);
        break;
      case "collapsed":
        lastTailNode = renderState.tail;
        for (var lastTailNode$118 = null; null !== lastTailNode; )
          null !== lastTailNode.alternate && (lastTailNode$118 = lastTailNode),
            (lastTailNode = lastTailNode.sibling);
        null === lastTailNode$118
          ? hasRenderedATailFallback || null === renderState.tail
            ? (renderState.tail = null)
            : (renderState.tail.sibling = null)
          : (lastTailNode$118.sibling = null);
    }
}
function bubbleProperties(completedWork) {
  var didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child,
    newChildLanes = 0,
    subtreeFlags = 0;
  if (didBailout)
    if (0 !== (completedWork.mode & 2)) {
      for (
        var treeBaseDuration$120 = completedWork.selfBaseDuration,
          child$121 = completedWork.child;
        null !== child$121;

      )
        (newChildLanes |= child$121.lanes | child$121.childLanes),
          (subtreeFlags |= child$121.subtreeFlags & 31457280),
          (subtreeFlags |= child$121.flags & 31457280),
          (treeBaseDuration$120 += child$121.treeBaseDuration),
          (child$121 = child$121.sibling);
      completedWork.treeBaseDuration = treeBaseDuration$120;
    } else
      for (
        treeBaseDuration$120 = completedWork.child;
        null !== treeBaseDuration$120;

      )
        (newChildLanes |=
          treeBaseDuration$120.lanes | treeBaseDuration$120.childLanes),
          (subtreeFlags |= treeBaseDuration$120.subtreeFlags & 31457280),
          (subtreeFlags |= treeBaseDuration$120.flags & 31457280),
          (treeBaseDuration$120.return = completedWork),
          (treeBaseDuration$120 = treeBaseDuration$120.sibling);
  else if (0 !== (completedWork.mode & 2)) {
    treeBaseDuration$120 = completedWork.actualDuration;
    child$121 = completedWork.selfBaseDuration;
    for (var child = completedWork.child; null !== child; )
      (newChildLanes |= child.lanes | child.childLanes),
        (subtreeFlags |= child.subtreeFlags),
        (subtreeFlags |= child.flags),
        (treeBaseDuration$120 += child.actualDuration),
        (child$121 += child.treeBaseDuration),
        (child = child.sibling);
    completedWork.actualDuration = treeBaseDuration$120;
    completedWork.treeBaseDuration = child$121;
  } else
    for (
      treeBaseDuration$120 = completedWork.child;
      null !== treeBaseDuration$120;

    )
      (newChildLanes |=
        treeBaseDuration$120.lanes | treeBaseDuration$120.childLanes),
        (subtreeFlags |= treeBaseDuration$120.subtreeFlags),
        (subtreeFlags |= treeBaseDuration$120.flags),
        (treeBaseDuration$120.return = completedWork),
        (treeBaseDuration$120 = treeBaseDuration$120.sibling);
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps;
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return bubbleProperties(workInProgress), null;
    case 1:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        bubbleProperties(workInProgress),
        null
      );
    case 3:
      renderLanes = workInProgress.stateNode;
      enableTransitionTracing &&
        null !== workInProgressTransitions &&
        (workInProgress.flags |= 2048);
      newProps = null;
      null !== current && (newProps = current.memoizedState.cache);
      workInProgress.memoizedState.cache !== newProps &&
        (workInProgress.flags |= 2048);
      popProvider(CacheContext);
      enableTransitionTracing &&
        enableTransitionTracing &&
        pop(markerInstanceStack);
      enableTransitionTracing && pop(transitionStack);
      popHostContainer();
      pop(didPerformWorkStackCursor);
      pop(contextStackCursor);
      renderLanes.pendingContext &&
        ((renderLanes.context = renderLanes.pendingContext),
        (renderLanes.pendingContext = null));
      if (null === current || null === current.child)
        popHydrationState(workInProgress)
          ? markUpdate(workInProgress)
          : null === current ||
            (current.memoizedState.isDehydrated &&
              0 === (workInProgress.flags & 256)) ||
            ((workInProgress.flags |= 1024),
            null !== hydrationErrors &&
              (queueRecoverableErrors(hydrationErrors),
              (hydrationErrors = null)));
      bubbleProperties(workInProgress);
      enableTransitionTracing &&
        0 !== (workInProgress.subtreeFlags & 8192) &&
        (workInProgress.flags |= 2048);
      return null;
    case 26:
      renderLanes = workInProgress.memoizedState;
      if (null === current)
        markUpdate(workInProgress),
          null !== renderLanes
            ? (bubbleProperties(workInProgress),
              preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
            : (bubbleProperties(workInProgress),
              (workInProgress.flags &= -16777217));
      else {
        var currentResource = current.memoizedState;
        renderLanes !== currentResource && markUpdate(workInProgress);
        null !== renderLanes
          ? (bubbleProperties(workInProgress),
            renderLanes === currentResource
              ? (workInProgress.flags &= -16777217)
              : preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
          : (current.memoizedProps !== newProps && markUpdate(workInProgress),
            bubbleProperties(workInProgress),
            (workInProgress.flags &= -16777217));
      }
      return null;
    case 27:
      popHostContext(workInProgress);
      renderLanes = rootInstanceStackCursor.current;
      currentResource = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        current = contextStackCursor$1.current;
        popHydrationState(workInProgress)
          ? hydrateInstance(
              workInProgress.stateNode,
              workInProgress.type,
              workInProgress.memoizedProps,
              current,
              workInProgress
            )
          : ((current = resolveSingletonInstance(
              currentResource,
              newProps,
              renderLanes
            )),
            (workInProgress.stateNode = current),
            markUpdate(workInProgress));
      }
      bubbleProperties(workInProgress);
      return null;
    case 5:
      popHostContext(workInProgress);
      renderLanes = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(formatProdErrorMessage(166));
          bubbleProperties(workInProgress);
          return null;
        }
        current = contextStackCursor$1.current;
        if (popHydrationState(workInProgress))
          hydrateInstance(
            workInProgress.stateNode,
            workInProgress.type,
            workInProgress.memoizedProps,
            current,
            workInProgress
          );
        else {
          currentResource = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          );
          switch (current) {
            case 1:
              current = currentResource.createElementNS(
                "http://www.w3.org/2000/svg",
                renderLanes
              );
              break;
            case 2:
              current = currentResource.createElementNS(
                "http://www.w3.org/1998/Math/MathML",
                renderLanes
              );
              break;
            default:
              switch (renderLanes) {
                case "svg":
                  current = currentResource.createElementNS(
                    "http://www.w3.org/2000/svg",
                    renderLanes
                  );
                  break;
                case "math":
                  current = currentResource.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    renderLanes
                  );
                  break;
                case "script":
                  current = currentResource.createElement("div");
                  current.innerHTML = "<script>\x3c/script>";
                  current = current.removeChild(current.firstChild);
                  break;
                case "select":
                  current =
                    "string" === typeof newProps.is
                      ? currentResource.createElement("select", {
                          is: newProps.is
                        })
                      : currentResource.createElement("select");
                  newProps.multiple
                    ? (current.multiple = !0)
                    : newProps.size && (current.size = newProps.size);
                  break;
                default:
                  current =
                    "string" === typeof newProps.is
                      ? currentResource.createElement(renderLanes, {
                          is: newProps.is
                        })
                      : currentResource.createElement(renderLanes);
              }
          }
          current[internalInstanceKey] = workInProgress;
          current[internalPropsKey] = newProps;
          a: for (
            currentResource = workInProgress.child;
            null !== currentResource;

          ) {
            if (5 === currentResource.tag || 6 === currentResource.tag)
              current.appendChild(currentResource.stateNode);
            else if (
              4 !== currentResource.tag &&
              27 !== currentResource.tag &&
              null !== currentResource.child
            ) {
              currentResource.child.return = currentResource;
              currentResource = currentResource.child;
              continue;
            }
            if (currentResource === workInProgress) break a;
            for (; null === currentResource.sibling; ) {
              if (
                null === currentResource.return ||
                currentResource.return === workInProgress
              )
                break a;
              currentResource = currentResource.return;
            }
            currentResource.sibling.return = currentResource.return;
            currentResource = currentResource.sibling;
          }
          workInProgress.stateNode = current;
          a: switch (
            (setInitialProperties(current, renderLanes, newProps), renderLanes)
          ) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              current = !!newProps.autoFocus;
              break a;
            case "img":
              current = !0;
              break a;
            default:
              current = !1;
          }
          current && markUpdate(workInProgress);
        }
      }
      bubbleProperties(workInProgress);
      workInProgress.flags &= -16777217;
      return null;
    case 6:
      if (current && null != workInProgress.stateNode)
        current.memoizedProps !== newProps && markUpdate(workInProgress);
      else {
        if ("string" !== typeof newProps && null === workInProgress.stateNode)
          throw Error(formatProdErrorMessage(166));
        current = rootInstanceStackCursor.current;
        if (popHydrationState(workInProgress)) {
          newProps = workInProgress.stateNode;
          current = workInProgress.memoizedProps;
          newProps[internalInstanceKey] = workInProgress;
          if ((renderLanes = newProps.nodeValue !== current))
            if (
              ((currentResource = hydrationParentFiber),
              null !== currentResource)
            )
              switch (currentResource.tag) {
                case 3:
                  newProps = newProps.nodeValue;
                  normalizeMarkupForTextOrAttribute(current);
                  normalizeMarkupForTextOrAttribute(newProps);
                  break;
                case 27:
                case 5:
                  !0 !==
                    currentResource.memoizedProps.suppressHydrationWarning &&
                    ((newProps = newProps.nodeValue),
                    normalizeMarkupForTextOrAttribute(current),
                    normalizeMarkupForTextOrAttribute(newProps));
              }
          renderLanes && markUpdate(workInProgress);
        } else
          (current =
            getOwnerDocumentFromRootContainer(current).createTextNode(
              newProps
            )),
            (current[internalInstanceKey] = workInProgress),
            (workInProgress.stateNode = current);
      }
      bubbleProperties(workInProgress);
      return null;
    case 13:
      popSuspenseHandler(workInProgress);
      newProps = workInProgress.memoizedState;
      if (
        null === current ||
        (null !== current.memoizedState &&
          null !== current.memoizedState.dehydrated)
      ) {
        if (
          isHydrating &&
          null !== nextHydratableInstance &&
          0 !== (workInProgress.mode & 1) &&
          0 === (workInProgress.flags & 128)
        )
          warnIfUnhydratedTailNodes(),
            resetHydrationState(),
            (workInProgress.flags |= 384),
            (currentResource = !1);
        else if (
          ((currentResource = popHydrationState(workInProgress)),
          null !== newProps && null !== newProps.dehydrated)
        ) {
          if (null === current) {
            if (!currentResource) throw Error(formatProdErrorMessage(318));
            currentResource = workInProgress.memoizedState;
            currentResource =
              null !== currentResource ? currentResource.dehydrated : null;
            if (!currentResource) throw Error(formatProdErrorMessage(317));
            currentResource[internalInstanceKey] = workInProgress;
            bubbleProperties(workInProgress);
            0 !== (workInProgress.mode & 2) &&
              null !== newProps &&
              ((currentResource = workInProgress.child),
              null !== currentResource &&
                (workInProgress.treeBaseDuration -=
                  currentResource.treeBaseDuration));
          } else
            resetHydrationState(),
              0 === (workInProgress.flags & 128) &&
                (workInProgress.memoizedState = null),
              (workInProgress.flags |= 4),
              bubbleProperties(workInProgress),
              0 !== (workInProgress.mode & 2) &&
                null !== newProps &&
                ((currentResource = workInProgress.child),
                null !== currentResource &&
                  (workInProgress.treeBaseDuration -=
                    currentResource.treeBaseDuration));
          currentResource = !1;
        } else
          null !== hydrationErrors &&
            (queueRecoverableErrors(hydrationErrors), (hydrationErrors = null)),
            (currentResource = !0);
        if (!currentResource)
          return workInProgress.flags & 256 ? workInProgress : null;
      }
      if (0 !== (workInProgress.flags & 128))
        return (
          (workInProgress.lanes = renderLanes),
          0 !== (workInProgress.mode & 2) &&
            transferActualDuration(workInProgress),
          workInProgress
        );
      renderLanes = null !== newProps;
      current = null !== current && null !== current.memoizedState;
      if (renderLanes) {
        newProps = workInProgress.child;
        currentResource = null;
        null !== newProps.alternate &&
          null !== newProps.alternate.memoizedState &&
          null !== newProps.alternate.memoizedState.cachePool &&
          (currentResource = newProps.alternate.memoizedState.cachePool.pool);
        var cache$136 = null;
        null !== newProps.memoizedState &&
          null !== newProps.memoizedState.cachePool &&
          (cache$136 = newProps.memoizedState.cachePool.pool);
        cache$136 !== currentResource && (newProps.flags |= 2048);
      }
      renderLanes !== current &&
        (enableTransitionTracing && (workInProgress.child.flags |= 2048),
        renderLanes && (workInProgress.child.flags |= 8192));
      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
      null !== workInProgress.updateQueue &&
        null != workInProgress.memoizedProps.suspenseCallback &&
        (workInProgress.flags |= 4);
      bubbleProperties(workInProgress);
      0 !== (workInProgress.mode & 2) &&
        renderLanes &&
        ((current = workInProgress.child),
        null !== current &&
          (workInProgress.treeBaseDuration -= current.treeBaseDuration));
      return null;
    case 4:
      return (
        popHostContainer(),
        null === current &&
          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
        bubbleProperties(workInProgress),
        null
      );
    case 10:
      return (
        popProvider(
          enableRenderableContext
            ? workInProgress.type
            : workInProgress.type._context
        ),
        bubbleProperties(workInProgress),
        null
      );
    case 17:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        bubbleProperties(workInProgress),
        null
      );
    case 19:
      pop(suspenseStackCursor);
      currentResource = workInProgress.memoizedState;
      if (null === currentResource)
        return bubbleProperties(workInProgress), null;
      newProps = 0 !== (workInProgress.flags & 128);
      cache$136 = currentResource.rendering;
      if (null === cache$136)
        if (newProps) cutOffTailIfNeeded(currentResource, !1);
        else {
          if (
            0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
          )
            for (current = workInProgress.child; null !== current; ) {
              cache$136 = findFirstSuspended(current);
              if (null !== cache$136) {
                workInProgress.flags |= 128;
                cutOffTailIfNeeded(currentResource, !1);
                current = cache$136.updateQueue;
                workInProgress.updateQueue = current;
                scheduleRetryEffect(workInProgress, current);
                workInProgress.subtreeFlags = 0;
                current = renderLanes;
                for (renderLanes = workInProgress.child; null !== renderLanes; )
                  resetWorkInProgress(renderLanes, current),
                    (renderLanes = renderLanes.sibling);
                push(
                  suspenseStackCursor,
                  (suspenseStackCursor.current & 1) | 2
                );
                return workInProgress.child;
              }
              current = current.sibling;
            }
          null !== currentResource.tail &&
            now$1() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (newProps = !0),
            cutOffTailIfNeeded(currentResource, !1),
            (workInProgress.lanes = 4194304));
        }
      else {
        if (!newProps)
          if (((current = findFirstSuspended(cache$136)), null !== current)) {
            if (
              ((workInProgress.flags |= 128),
              (newProps = !0),
              (current = current.updateQueue),
              (workInProgress.updateQueue = current),
              scheduleRetryEffect(workInProgress, current),
              cutOffTailIfNeeded(currentResource, !0),
              null === currentResource.tail &&
                "hidden" === currentResource.tailMode &&
                !cache$136.alternate &&
                !isHydrating)
            )
              return bubbleProperties(workInProgress), null;
          } else
            2 * now$1() - currentResource.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              536870912 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (newProps = !0),
              cutOffTailIfNeeded(currentResource, !1),
              (workInProgress.lanes = 4194304));
        currentResource.isBackwards
          ? ((cache$136.sibling = workInProgress.child),
            (workInProgress.child = cache$136))
          : ((current = currentResource.last),
            null !== current
              ? (current.sibling = cache$136)
              : (workInProgress.child = cache$136),
            (currentResource.last = cache$136));
      }
      if (null !== currentResource.tail)
        return (
          (workInProgress = currentResource.tail),
          (currentResource.rendering = workInProgress),
          (currentResource.tail = workInProgress.sibling),
          (currentResource.renderingStartTime = now$1()),
          (workInProgress.sibling = null),
          (current = suspenseStackCursor.current),
          push(suspenseStackCursor, newProps ? (current & 1) | 2 : current & 1),
          workInProgress
        );
      bubbleProperties(workInProgress);
      return null;
    case 21:
      return (
        null === current &&
          ((current = {
            DO_NOT_USE_queryAllNodes: DO_NOT_USE_queryAllNodes,
            DO_NOT_USE_queryFirstNode: DO_NOT_USE_queryFirstNode,
            containsNode: containsNode$1,
            getChildContextValues: getChildContextValues
          }),
          (workInProgress.stateNode = current),
          (current[internalInstanceKey] = workInProgress)),
        null !== workInProgress.ref && markUpdate(workInProgress),
        bubbleProperties(workInProgress),
        null
      );
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        (newProps = null !== workInProgress.memoizedState),
        23 !== workInProgress.tag &&
          (null !== current
            ? (null !== current.memoizedState) !== newProps &&
              (workInProgress.flags |= 8192)
            : newProps && (workInProgress.flags |= 8192)),
        newProps && 0 !== (workInProgress.mode & 1)
          ? 0 !== (renderLanes & 536870912) &&
            0 === (workInProgress.flags & 128) &&
            (bubbleProperties(workInProgress),
            23 !== workInProgress.tag &&
              workInProgress.subtreeFlags & 6 &&
              (workInProgress.flags |= 8192))
          : bubbleProperties(workInProgress),
        (renderLanes = workInProgress.updateQueue),
        null !== renderLanes &&
          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
        (renderLanes = null),
        null !== current &&
          null !== current.memoizedState &&
          null !== current.memoizedState.cachePool &&
          (renderLanes = current.memoizedState.cachePool.pool),
        (newProps = null),
        null !== workInProgress.memoizedState &&
          null !== workInProgress.memoizedState.cachePool &&
          (newProps = workInProgress.memoizedState.cachePool.pool),
        newProps !== renderLanes && (workInProgress.flags |= 2048),
        popTransition(workInProgress, current),
        null
      );
    case 24:
      return (
        (renderLanes = null),
        null !== current && (renderLanes = current.memoizedState.cache),
        workInProgress.memoizedState.cache !== renderLanes &&
          (workInProgress.flags |= 2048),
        popProvider(CacheContext),
        bubbleProperties(workInProgress),
        null
      );
    case 25:
      return (
        enableTransitionTracing &&
          (null !== workInProgress.stateNode &&
            enableTransitionTracing &&
            pop(markerInstanceStack),
          bubbleProperties(workInProgress)),
        null
      );
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
}
function unwindWork(current, workInProgress) {
  popTreeContext(workInProgress);
  switch (workInProgress.tag) {
    case 1:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128),
            0 !== (workInProgress.mode & 2) &&
              transferActualDuration(workInProgress),
            workInProgress)
          : null
      );
    case 3:
      return (
        popProvider(CacheContext),
        enableTransitionTracing &&
          enableTransitionTracing &&
          pop(markerInstanceStack),
        enableTransitionTracing && pop(transitionStack),
        popHostContainer(),
        pop(didPerformWorkStackCursor),
        pop(contextStackCursor),
        (current = workInProgress.flags),
        0 !== (current & 65536) && 0 === (current & 128)
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 26:
    case 27:
    case 5:
      return popHostContext(workInProgress), null;
    case 13:
      popSuspenseHandler(workInProgress);
      current = workInProgress.memoizedState;
      if (null !== current && null !== current.dehydrated) {
        if (null === workInProgress.alternate)
          throw Error(formatProdErrorMessage(340));
        resetHydrationState();
      }
      current = workInProgress.flags;
      return current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128),
          0 !== (workInProgress.mode & 2) &&
            transferActualDuration(workInProgress),
          workInProgress)
        : null;
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return (
        popProvider(
          enableRenderableContext
            ? workInProgress.type
            : workInProgress.type._context
        ),
        null
      );
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        popTransition(workInProgress, current),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128),
            0 !== (workInProgress.mode & 2) &&
              transferActualDuration(workInProgress),
            workInProgress)
          : null
      );
    case 24:
      return popProvider(CacheContext), null;
    case 25:
      return (
        enableTransitionTracing &&
          null !== workInProgress.stateNode &&
          enableTransitionTracing &&
          pop(markerInstanceStack),
        null
      );
    default:
      return null;
  }
}
function unwindInterruptedWork(current, interruptedWork) {
  popTreeContext(interruptedWork);
  switch (interruptedWork.tag) {
    case 1:
      current = interruptedWork.type.childContextTypes;
      null !== current && void 0 !== current && popContext();
      break;
    case 3:
      popProvider(CacheContext);
      enableTransitionTracing &&
        enableTransitionTracing &&
        pop(markerInstanceStack);
      enableTransitionTracing && pop(transitionStack);
      popHostContainer();
      pop(didPerformWorkStackCursor);
      pop(contextStackCursor);
      break;
    case 26:
    case 27:
    case 5:
      popHostContext(interruptedWork);
      break;
    case 4:
      popHostContainer();
      break;
    case 13:
      popSuspenseHandler(interruptedWork);
      break;
    case 19:
      pop(suspenseStackCursor);
      break;
    case 10:
      popProvider(
        enableRenderableContext
          ? interruptedWork.type
          : interruptedWork.type._context
      );
      break;
    case 22:
    case 23:
      popSuspenseHandler(interruptedWork);
      popHiddenContext();
      popTransition(interruptedWork, current);
      break;
    case 24:
      popProvider(CacheContext);
      break;
    case 25:
      enableTransitionTracing &&
        null !== interruptedWork.stateNode &&
        enableTransitionTracing &&
        pop(markerInstanceStack);
  }
}
var ReactFbErrorUtils = require("ReactFbErrorUtils");
if ("function" !== typeof ReactFbErrorUtils.invokeGuardedCallback)
  throw Error(formatProdErrorMessage(255));
function invokeGuardedCallbackImpl(name, func, context, a, b, c, d, e, f) {
  ReactFbErrorUtils.invokeGuardedCallback.apply(this, arguments);
}
var hasError = !1,
  caughtError = null,
  hasRethrowError = !1,
  rethrowError = null,
  reporter = {
    onError: function (error) {
      hasError = !0;
      caughtError = error;
    }
  };
function invokeGuardedCallback(name, func, context, a, b, c, d, e, f) {
  hasError = !1;
  caughtError = null;
  invokeGuardedCallbackImpl.apply(reporter, arguments);
}
function invokeGuardedCallbackAndCatchFirstError(
  name,
  func,
  context,
  a,
  b,
  c,
  d,
  e,
  f
) {
  invokeGuardedCallback.apply(this, arguments);
  if (hasError) {
    if (hasError) {
      var error = caughtError;
      hasError = !1;
      caughtError = null;
    } else throw Error(formatProdErrorMessage(198));
    hasRethrowError || ((hasRethrowError = !0), (rethrowError = error));
  }
}
var offscreenSubtreeIsHidden = !1,
  offscreenSubtreeWasHidden = !1,
  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
  nextEffect = null,
  inProgressLanes = null,
  inProgressRoot = null;
function shouldProfile(current) {
  return 0 !== (current.mode & 2) && 0 !== (executionContext & 4);
}
function callComponentWillUnmountWithTimer(current, instance) {
  instance.props = current.memoizedProps;
  instance.state = current.memoizedState;
  if (shouldProfile(current))
    try {
      startLayoutEffectTimer(), instance.componentWillUnmount();
    } finally {
      recordLayoutEffectDuration(current);
    }
  else instance.componentWillUnmount();
}
function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    var ref = current.ref;
    if (null !== ref) {
      var instance = current.stateNode;
      switch (current.tag) {
        case 26:
        case 27:
        case 5:
          var instanceToUse = instance;
          break;
        default:
          instanceToUse = instance;
      }
      21 === current.tag && (instanceToUse = instance);
      if ("function" === typeof ref)
        if (shouldProfile(current))
          try {
            startLayoutEffectTimer(), (current.refCleanup = ref(instanceToUse));
          } finally {
            recordLayoutEffectDuration(current);
          }
        else current.refCleanup = ref(instanceToUse);
      else ref.current = instanceToUse;
    }
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyDetachRef(current, nearestMountedAncestor) {
  var ref = current.ref,
    refCleanup = current.refCleanup;
  if (null !== ref)
    if ("function" === typeof refCleanup)
      try {
        if (shouldProfile(current))
          try {
            startLayoutEffectTimer(), refCleanup();
          } finally {
            recordLayoutEffectDuration(current);
          }
        else refCleanup();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      } finally {
        (current.refCleanup = null),
          (current = current.alternate),
          null != current && (current.refCleanup = null);
      }
    else if ("function" === typeof ref)
      try {
        if (shouldProfile(current))
          try {
            startLayoutEffectTimer(), ref(null);
          } finally {
            recordLayoutEffectDuration(current);
          }
        else ref(null);
      } catch (error$154) {
        captureCommitPhaseError(current, nearestMountedAncestor, error$154);
      }
    else ref.current = null;
}
function safelyCallDestroy(current, nearestMountedAncestor, destroy) {
  try {
    destroy();
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
var focusedInstanceHandle = null,
  shouldFireAfterActiveInstanceBlur = !1;
function commitBeforeMutationEffects(root, firstChild) {
  eventsEnabled = _enabled;
  root = getActiveElementDeep();
  if (hasSelectionCapabilities(root)) {
    if ("selectionStart" in root)
      var JSCompiler_temp = {
        start: root.selectionStart,
        end: root.selectionEnd
      };
    else
      a: {
        JSCompiler_temp =
          ((JSCompiler_temp = root.ownerDocument) &&
            JSCompiler_temp.defaultView) ||
          window;
        var selection =
          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
        if (selection && 0 !== selection.rangeCount) {
          JSCompiler_temp = selection.anchorNode;
          var anchorOffset = selection.anchorOffset,
            focusNode = selection.focusNode;
          selection = selection.focusOffset;
          try {
            JSCompiler_temp.nodeType, focusNode.nodeType;
          } catch (e$214) {
            JSCompiler_temp = null;
            break a;
          }
          var length = 0,
            start = -1,
            end = -1,
            indexWithinAnchor = 0,
            indexWithinFocus = 0,
            node = root,
            parentNode = null;
          b: for (;;) {
            for (var next; ; ) {
              node !== JSCompiler_temp ||
                (0 !== anchorOffset && 3 !== node.nodeType) ||
                (start = length + anchorOffset);
              node !== focusNode ||
                (0 !== selection && 3 !== node.nodeType) ||
                (end = length + selection);
              3 === node.nodeType && (length += node.nodeValue.length);
              if (null === (next = node.firstChild)) break;
              parentNode = node;
              node = next;
            }
            for (;;) {
              if (node === root) break b;
              parentNode === JSCompiler_temp &&
                ++indexWithinAnchor === anchorOffset &&
                (start = length);
              parentNode === focusNode &&
                ++indexWithinFocus === selection &&
                (end = length);
              if (null !== (next = node.nextSibling)) break;
              node = parentNode;
              parentNode = node.parentNode;
            }
            node = next;
          }
          JSCompiler_temp =
            -1 === start || -1 === end ? null : { start: start, end: end };
        } else JSCompiler_temp = null;
      }
    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
  } else JSCompiler_temp = null;
  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
  root = null;
  JSCompiler_temp = selectionInformation.focusedElem;
  null !== JSCompiler_temp &&
    (root = getClosestInstanceFromNode(JSCompiler_temp));
  _enabled = !1;
  focusedInstanceHandle = root;
  for (nextEffect = firstChild; null !== nextEffect; ) {
    firstChild = nextEffect;
    root = firstChild.deletions;
    if (null !== root)
      for (
        JSCompiler_temp = 0;
        JSCompiler_temp < root.length;
        JSCompiler_temp++
      )
        (anchorOffset = root[JSCompiler_temp]),
          doesFiberContain(anchorOffset, focusedInstanceHandle) &&
            ((shouldFireAfterActiveInstanceBlur = !0),
            beforeActiveInstanceBlur(anchorOffset));
    root = firstChild.child;
    if (0 !== (firstChild.subtreeFlags & 9236) && null !== root)
      (root.return = firstChild), (nextEffect = root);
    else
      for (; null !== nextEffect; ) {
        firstChild = nextEffect;
        try {
          var current = firstChild.alternate,
            flags = firstChild.flags,
            JSCompiler_temp$jscomp$0;
          if (
            (JSCompiler_temp$jscomp$0 =
              !shouldFireAfterActiveInstanceBlur &&
              null !== focusedInstanceHandle)
          ) {
            var JSCompiler_temp$jscomp$1;
            if ((JSCompiler_temp$jscomp$1 = 13 === firstChild.tag))
              a: {
                if (null !== current) {
                  var oldState = current.memoizedState;
                  if (null === oldState || null !== oldState.dehydrated) {
                    var newState = firstChild.memoizedState;
                    JSCompiler_temp$jscomp$1 =
                      null !== newState && null === newState.dehydrated;
                    break a;
                  }
                }
                JSCompiler_temp$jscomp$1 = !1;
              }
            JSCompiler_temp$jscomp$0 =
              JSCompiler_temp$jscomp$1 &&
              doesFiberContain(firstChild, focusedInstanceHandle);
          }
          JSCompiler_temp$jscomp$0 &&
            ((shouldFireAfterActiveInstanceBlur = !0),
            beforeActiveInstanceBlur(firstChild));
          switch (firstChild.tag) {
            case 0:
              if (0 !== (flags & 4)) {
                var updateQueue = firstChild.updateQueue,
                  eventPayloads =
                    null !== updateQueue ? updateQueue.events : null;
                if (null !== eventPayloads)
                  for (root = 0; root < eventPayloads.length; root++) {
                    var _eventPayloads$ii = eventPayloads[root];
                    _eventPayloads$ii.ref.impl = _eventPayloads$ii.nextImpl;
                  }
              }
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (0 !== (flags & 1024) && null !== current) {
                var prevProps = current.memoizedProps,
                  prevState = current.memoizedState,
                  instance = firstChild.stateNode,
                  snapshot = instance.getSnapshotBeforeUpdate(
                    firstChild.elementType === firstChild.type
                      ? prevProps
                      : resolveDefaultProps(firstChild.type, prevProps),
                    prevState
                  );
                instance.__reactInternalSnapshotBeforeUpdate = snapshot;
              }
              break;
            case 3:
              0 !== (flags & 1024) &&
                clearContainer(firstChild.stateNode.containerInfo);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (0 !== (flags & 1024))
                throw Error(formatProdErrorMessage(163));
          }
        } catch (error) {
          captureCommitPhaseError(firstChild, firstChild.return, error);
        }
        root = firstChild.sibling;
        if (null !== root) {
          root.return = firstChild.return;
          nextEffect = root;
          break;
        }
        nextEffect = firstChild.return;
      }
  }
  current = shouldFireAfterActiveInstanceBlur;
  shouldFireAfterActiveInstanceBlur = !1;
  focusedInstanceHandle = null;
  return current;
}
function commitHookEffectListUnmount(
  flags,
  finishedWork,
  nearestMountedAncestor
) {
  var updateQueue = finishedWork.updateQueue;
  updateQueue = null !== updateQueue ? updateQueue.lastEffect : null;
  if (null !== updateQueue) {
    var effect = (updateQueue = updateQueue.next);
    do {
      if ((effect.tag & flags) === flags) {
        var inst = effect.inst,
          destroy = inst.destroy;
        void 0 !== destroy &&
          ((inst.destroy = void 0),
          enableSchedulingProfiler &&
            (0 !== (flags & 8)
              ? enableSchedulingProfiler &&
                null !== injectedProfilingHooks &&
                "function" ===
                  typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStarted &&
                injectedProfilingHooks.markComponentPassiveEffectUnmountStarted(
                  finishedWork
                )
              : 0 !== (flags & 4) &&
                markComponentLayoutEffectUnmountStarted(finishedWork)),
          safelyCallDestroy(finishedWork, nearestMountedAncestor, destroy),
          enableSchedulingProfiler &&
            (0 !== (flags & 8)
              ? enableSchedulingProfiler &&
                null !== injectedProfilingHooks &&
                "function" ===
                  typeof injectedProfilingHooks.markComponentPassiveEffectUnmountStopped &&
                injectedProfilingHooks.markComponentPassiveEffectUnmountStopped()
              : 0 !== (flags & 4) &&
                markComponentLayoutEffectUnmountStopped()));
      }
      effect = effect.next;
    } while (effect !== updateQueue);
  }
}
function commitHookEffectListMount(flags, finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  updateQueue = null !== updateQueue ? updateQueue.lastEffect : null;
  if (null !== updateQueue) {
    var effect = (updateQueue = updateQueue.next);
    do {
      if ((effect.tag & flags) === flags) {
        enableSchedulingProfiler &&
          (0 !== (flags & 8)
            ? enableSchedulingProfiler &&
              null !== injectedProfilingHooks &&
              "function" ===
                typeof injectedProfilingHooks.markComponentPassiveEffectMountStarted &&
              injectedProfilingHooks.markComponentPassiveEffectMountStarted(
                finishedWork
              )
            : 0 !== (flags & 4) &&
              enableSchedulingProfiler &&
              null !== injectedProfilingHooks &&
              "function" ===
                typeof injectedProfilingHooks.markComponentLayoutEffectMountStarted &&
              injectedProfilingHooks.markComponentLayoutEffectMountStarted(
                finishedWork
              ));
        var create = effect.create,
          inst = effect.inst;
        create = create();
        inst.destroy = create;
        enableSchedulingProfiler &&
          (0 !== (flags & 8)
            ? enableSchedulingProfiler &&
              null !== injectedProfilingHooks &&
              "function" ===
                typeof injectedProfilingHooks.markComponentPassiveEffectMountStopped &&
              injectedProfilingHooks.markComponentPassiveEffectMountStopped()
            : 0 !== (flags & 4) &&
              enableSchedulingProfiler &&
              null !== injectedProfilingHooks &&
              "function" ===
                typeof injectedProfilingHooks.markComponentLayoutEffectMountStopped &&
              injectedProfilingHooks.markComponentLayoutEffectMountStopped());
      }
      effect = effect.next;
    } while (effect !== updateQueue);
  }
}
function commitPassiveEffectDurations(finishedRoot, finishedWork) {
  if (executionContext & 4 && 0 !== (finishedWork.flags & 4))
    switch (finishedWork.tag) {
      case 12:
        finishedRoot = finishedWork.stateNode.passiveEffectDuration;
        var _finishedWork$memoize = finishedWork.memoizedProps,
          id = _finishedWork$memoize.id;
        _finishedWork$memoize = _finishedWork$memoize.onPostCommit;
        var commitTime$156 = commitTime,
          phase = null === finishedWork.alternate ? "mount" : "update";
        currentUpdateIsNested && (phase = "nested-update");
        "function" === typeof _finishedWork$memoize &&
          _finishedWork$memoize(id, phase, finishedRoot, commitTime$156);
        finishedWork = finishedWork.return;
        a: for (; null !== finishedWork; ) {
          switch (finishedWork.tag) {
            case 3:
              finishedWork.stateNode.passiveEffectDuration += finishedRoot;
              break a;
            case 12:
              finishedWork.stateNode.passiveEffectDuration += finishedRoot;
              break a;
          }
          finishedWork = finishedWork.return;
        }
    }
}
function commitHookLayoutEffects(finishedWork, hookFlags) {
  if (shouldProfile(finishedWork)) {
    try {
      startLayoutEffectTimer(),
        commitHookEffectListMount(hookFlags, finishedWork);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    recordLayoutEffectDuration(finishedWork);
  } else
    try {
      commitHookEffectListMount(hookFlags, finishedWork);
    } catch (error$158) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error$158);
    }
}
function commitClassCallbacks(finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  if (null !== updateQueue) {
    var instance = finishedWork.stateNode;
    try {
      commitCallbacks(updateQueue, instance);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function commitHostComponentMount(finishedWork) {
  var type = finishedWork.type,
    props = finishedWork.memoizedProps,
    instance = finishedWork.stateNode;
  try {
    a: switch (type) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        props.autoFocus && instance.focus();
        break a;
      case "img":
        props.src && (instance.src = props.src);
    }
  } catch (error) {
    captureCommitPhaseError(finishedWork, finishedWork.return, error);
  }
}
function commitProfilerUpdate(finishedWork, current) {
  if (executionContext & 4)
    try {
      var _finishedWork$memoize2 = finishedWork.memoizedProps,
        onCommit = _finishedWork$memoize2.onCommit,
        onRender = _finishedWork$memoize2.onRender,
        effectDuration = finishedWork.stateNode.effectDuration;
      _finishedWork$memoize2 = commitTime;
      current = null === current ? "mount" : "update";
      currentUpdateIsNested && (current = "nested-update");
      "function" === typeof onRender &&
        onRender(
          finishedWork.memoizedProps.id,
          current,
          finishedWork.actualDuration,
          finishedWork.treeBaseDuration,
          finishedWork.actualStartTime,
          _finishedWork$memoize2
        );
      "function" === typeof onCommit &&
        onCommit(
          finishedWork.memoizedProps.id,
          current,
          effectDuration,
          _finishedWork$memoize2
        );
      enqueuePendingPassiveProfilerEffect(finishedWork);
      var parentFiber = finishedWork.return;
      a: for (; null !== parentFiber; ) {
        switch (parentFiber.tag) {
          case 3:
            parentFiber.stateNode.effectDuration += effectDuration;
            break a;
          case 12:
            parentFiber.stateNode.effectDuration += effectDuration;
            break a;
        }
        parentFiber = parentFiber.return;
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
}
function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitHookLayoutEffects(finishedWork, 5);
      break;
    case 1:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 4)
        if (((finishedRoot = finishedWork.stateNode), null === current))
          if (shouldProfile(finishedWork)) {
            try {
              startLayoutEffectTimer(), finishedRoot.componentDidMount();
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
            recordLayoutEffectDuration(finishedWork);
          } else
            try {
              finishedRoot.componentDidMount();
            } catch (error$159) {
              captureCommitPhaseError(
                finishedWork,
                finishedWork.return,
                error$159
              );
            }
        else {
          var prevProps =
            finishedWork.elementType === finishedWork.type
              ? current.memoizedProps
              : resolveDefaultProps(finishedWork.type, current.memoizedProps);
          current = current.memoizedState;
          if (shouldProfile(finishedWork)) {
            try {
              startLayoutEffectTimer(),
                finishedRoot.componentDidUpdate(
                  prevProps,
                  current,
                  finishedRoot.__reactInternalSnapshotBeforeUpdate
                );
            } catch (error$160) {
              captureCommitPhaseError(
                finishedWork,
                finishedWork.return,
                error$160
              );
            }
            recordLayoutEffectDuration(finishedWork);
          } else
            try {
              finishedRoot.componentDidUpdate(
                prevProps,
                current,
                finishedRoot.__reactInternalSnapshotBeforeUpdate
              );
            } catch (error$161) {
              captureCommitPhaseError(
                finishedWork,
                finishedWork.return,
                error$161
              );
            }
        }
      flags & 64 && commitClassCallbacks(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 64 && ((flags = finishedWork.updateQueue), null !== flags)) {
        finishedRoot = null;
        if (null !== finishedWork.child)
          switch (finishedWork.child.tag) {
            case 27:
            case 5:
              finishedRoot = finishedWork.child.stateNode;
              break;
            case 1:
              finishedRoot = finishedWork.child.stateNode;
          }
        try {
          commitCallbacks(flags, finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 26:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 27:
    case 5:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      null === current && flags & 4 && commitHostComponentMount(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 12:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitProfilerUpdate(finishedWork, current);
      break;
    case 13:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
      break;
    case 22:
      if (0 !== (finishedWork.mode & 1)) {
        if (
          ((prevProps =
            null !== finishedWork.memoizedState || offscreenSubtreeIsHidden),
          !prevProps)
        ) {
          current =
            (null !== current && null !== current.memoizedState) ||
            offscreenSubtreeWasHidden;
          var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
            prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevProps;
          (offscreenSubtreeWasHidden = current) &&
          !prevOffscreenSubtreeWasHidden
            ? recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                0 !== (finishedWork.subtreeFlags & 8772)
              )
            : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
        }
      } else recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 512 &&
        ("manual" === finishedWork.memoizedProps.mode
          ? safelyAttachRef(finishedWork, finishedWork.return)
          : safelyDetachRef(finishedWork, finishedWork.return));
      break;
    default:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
  }
}
function abortRootTransitions(
  root,
  abort,
  deletedTransitions,
  deletedOffscreenInstance
) {
  if (enableTransitionTracing) {
    var rootTransitions = root.incompleteTransitions;
    deletedTransitions.forEach(function (transition) {
      rootTransitions.has(transition) &&
        ((transition = rootTransitions.get(transition)),
        null === transition.aborts && (transition.aborts = []),
        transition.aborts.push(abort),
        null !== deletedOffscreenInstance &&
          null !== transition.pendingBoundaries &&
          transition.pendingBoundaries.has(deletedOffscreenInstance) &&
          transition.pendingBoundaries.delete(deletedOffscreenInstance));
    });
  }
}
function abortTracingMarkerTransitions(
  abortedFiber,
  abort,
  deletedTransitions,
  deletedOffscreenInstance,
  isInDeletedTree
) {
  if (enableTransitionTracing) {
    var markerInstance = abortedFiber.stateNode,
      markerTransitions = markerInstance.transitions,
      pendingBoundaries = markerInstance.pendingBoundaries;
    null !== markerTransitions &&
      deletedTransitions.forEach(function (transition) {
        if (
          null !== abortedFiber &&
          markerTransitions.has(transition) &&
          (null === markerInstance.aborts ||
            !markerInstance.aborts.includes(abort)) &&
          null !== markerInstance.transitions
        ) {
          if (null === markerInstance.aborts) {
            markerInstance.aborts = [abort];
            transition = abortedFiber.memoizedProps.name;
            var transitions = markerInstance.transitions,
              aborts = markerInstance.aborts;
            enableTransitionTracing &&
              (null === currentPendingTransitionCallbacks &&
                (currentPendingTransitionCallbacks = {
                  transitionStart: null,
                  transitionProgress: null,
                  transitionComplete: null,
                  markerProgress: null,
                  markerIncomplete: new Map(),
                  markerComplete: null
                }),
              null === currentPendingTransitionCallbacks.markerIncomplete &&
                (currentPendingTransitionCallbacks.markerIncomplete =
                  new Map()),
              currentPendingTransitionCallbacks.markerIncomplete.set(
                transition,
                { transitions: transitions, aborts: aborts }
              ));
          } else markerInstance.aborts.push(abort);
          null !== deletedOffscreenInstance &&
            !isInDeletedTree &&
            null !== pendingBoundaries &&
            pendingBoundaries.has(deletedOffscreenInstance) &&
            (pendingBoundaries.delete(deletedOffscreenInstance),
            addMarkerProgressCallbackToPendingTransition(
              abortedFiber.memoizedProps.name,
              deletedTransitions,
              pendingBoundaries
            ));
        }
      });
  }
}
function abortParentMarkerTransitionsForDeletedFiber(
  abortedFiber,
  abort,
  deletedTransitions,
  deletedOffscreenInstance,
  isInDeletedTree
) {
  if (enableTransitionTracing)
    for (; null !== abortedFiber; ) {
      switch (abortedFiber.tag) {
        case 25:
          abortTracingMarkerTransitions(
            abortedFiber,
            abort,
            deletedTransitions,
            deletedOffscreenInstance,
            isInDeletedTree
          );
          break;
        case 3:
          abortRootTransitions(
            abortedFiber.stateNode,
            abort,
            deletedTransitions,
            deletedOffscreenInstance
          );
      }
      abortedFiber = abortedFiber.return;
    }
}
function commitTransitionProgress(offscreenFiber) {
  if (enableTransitionTracing) {
    var offscreenInstance = offscreenFiber.stateNode,
      prevState = null,
      previousFiber = offscreenFiber.alternate;
    null !== previousFiber &&
      null !== previousFiber.memoizedState &&
      (prevState = previousFiber.memoizedState);
    prevState = null !== prevState;
    previousFiber = null !== offscreenFiber.memoizedState;
    var pendingMarkers = offscreenInstance._pendingMarkers,
      name = null;
    offscreenFiber = offscreenFiber.return;
    null !== offscreenFiber &&
      13 === offscreenFiber.tag &&
      offscreenFiber.memoizedProps.unstable_name &&
      (name = offscreenFiber.memoizedProps.unstable_name);
    !prevState && previousFiber
      ? null !== pendingMarkers &&
        pendingMarkers.forEach(function (markerInstance) {
          var pendingBoundaries = markerInstance.pendingBoundaries,
            transitions = markerInstance.transitions,
            markerName = markerInstance.name;
          null === pendingBoundaries ||
            pendingBoundaries.has(offscreenInstance) ||
            (pendingBoundaries.set(offscreenInstance, { name: name }),
            null !== transitions &&
              (1 === markerInstance.tag && null !== markerName
                ? addMarkerProgressCallbackToPendingTransition(
                    markerName,
                    transitions,
                    pendingBoundaries
                  )
                : 0 === markerInstance.tag &&
                  transitions.forEach(function (transition) {
                    addTransitionProgressCallbackToPendingTransition(
                      transition,
                      pendingBoundaries
                    );
                  })));
        })
      : prevState &&
        !previousFiber &&
        null !== pendingMarkers &&
        pendingMarkers.forEach(function (markerInstance) {
          var pendingBoundaries = markerInstance.pendingBoundaries,
            transitions = markerInstance.transitions,
            markerName = markerInstance.name;
          null !== pendingBoundaries &&
            pendingBoundaries.has(offscreenInstance) &&
            (pendingBoundaries.delete(offscreenInstance),
            null !== transitions &&
              (1 === markerInstance.tag && null !== markerName
                ? (addMarkerProgressCallbackToPendingTransition(
                    markerName,
                    transitions,
                    pendingBoundaries
                  ),
                  0 === pendingBoundaries.size &&
                    (null === markerInstance.aborts &&
                      addMarkerCompleteCallbackToPendingTransition(
                        markerName,
                        transitions
                      ),
                    (markerInstance.transitions = null),
                    (markerInstance.pendingBoundaries = null),
                    (markerInstance.aborts = null)))
                : 0 === markerInstance.tag &&
                  transitions.forEach(function (transition) {
                    addTransitionProgressCallbackToPendingTransition(
                      transition,
                      pendingBoundaries
                    );
                  })));
        });
  }
}
function detachFiberAfterEffects(fiber) {
  var alternate = fiber.alternate;
  null !== alternate &&
    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  5 === fiber.tag &&
    ((alternate = fiber.stateNode),
    null !== alternate && detachDeletedInstance(alternate));
  fiber.stateNode = null;
  fiber.return = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
function isHostParent(fiber) {
  return (
    5 === fiber.tag ||
    3 === fiber.tag ||
    26 === fiber.tag ||
    27 === fiber.tag ||
    4 === fiber.tag
  );
}
function getHostSibling(fiber) {
  a: for (;;) {
    for (; null === fiber.sibling; ) {
      if (null === fiber.return || isHostParent(fiber.return)) return null;
      fiber = fiber.return;
    }
    fiber.sibling.return = fiber.return;
    for (
      fiber = fiber.sibling;
      5 !== fiber.tag &&
      6 !== fiber.tag &&
      27 !== fiber.tag &&
      18 !== fiber.tag;

    ) {
      if (fiber.flags & 2) continue a;
      if (null === fiber.child || 4 === fiber.tag) continue a;
      else (fiber.child.return = fiber), (fiber = fiber.child);
    }
    if (!(fiber.flags & 2)) return fiber.stateNode;
  }
}
function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before
        ? 8 === parent.nodeType
          ? parent.parentNode.insertBefore(node, before)
          : parent.insertBefore(node, before)
        : (8 === parent.nodeType
            ? ((before = parent.parentNode), before.insertBefore(node, parent))
            : ((before = parent), before.appendChild(node)),
          (parent = parent._reactRootContainer),
          (null !== parent && void 0 !== parent) ||
            null !== before.onclick ||
            (before.onclick = noop$1));
  else if (4 !== tag && 27 !== tag && ((node = node.child), null !== node))
    for (
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        (node = node.sibling);
}
function insertOrAppendPlacementNode(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before ? parent.insertBefore(node, before) : parent.appendChild(node);
  else if (4 !== tag && 27 !== tag && ((node = node.child), null !== node))
    for (
      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
}
var hostParent = null,
  hostParentIsContainer = !1;
function recursivelyTraverseDeletionEffects(
  finishedRoot,
  nearestMountedAncestor,
  parent
) {
  for (parent = parent.child; null !== parent; )
    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
      (parent = parent.sibling);
}
function commitDeletionEffectsOnFiber(
  finishedRoot,
  nearestMountedAncestor,
  deletedFiber
) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
    try {
      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
    } catch (err) {}
  switch (deletedFiber.tag) {
    case 26:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      deletedFiber.memoizedState
        ? deletedFiber.memoizedState.count--
        : deletedFiber.stateNode &&
          ((deletedFiber = deletedFiber.stateNode),
          deletedFiber.parentNode.removeChild(deletedFiber));
      break;
    case 27:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
      var prevHostParent = hostParent,
        prevHostParentIsContainer = hostParentIsContainer;
      hostParent = deletedFiber.stateNode;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      deletedFiber = deletedFiber.stateNode;
      for (finishedRoot = deletedFiber.attributes; finishedRoot.length; )
        deletedFiber.removeAttributeNode(finishedRoot[0]);
      detachDeletedInstance(deletedFiber);
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 5:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    case 6:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = null;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      null !== hostParent &&
        (hostParentIsContainer
          ? ((finishedRoot = hostParent),
            (deletedFiber = deletedFiber.stateNode),
            8 === finishedRoot.nodeType
              ? finishedRoot.parentNode.removeChild(deletedFiber)
              : finishedRoot.removeChild(deletedFiber))
          : hostParent.removeChild(deletedFiber.stateNode));
      break;
    case 18:
      finishedRoot = finishedRoot.hydrationCallbacks;
      null !== finishedRoot &&
        (finishedRoot = finishedRoot.onDeleted) &&
        finishedRoot(deletedFiber.stateNode);
      null !== hostParent &&
        (hostParentIsContainer
          ? ((finishedRoot = hostParent),
            (deletedFiber = deletedFiber.stateNode),
            8 === finishedRoot.nodeType
              ? clearSuspenseBoundary(finishedRoot.parentNode, deletedFiber)
              : 1 === finishedRoot.nodeType &&
                clearSuspenseBoundary(finishedRoot, deletedFiber),
            retryIfBlockedOn(finishedRoot))
          : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
      break;
    case 4:
      prevHostParent = hostParent;
      prevHostParentIsContainer = hostParentIsContainer;
      hostParent = deletedFiber.stateNode.containerInfo;
      hostParentIsContainer = !0;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      hostParentIsContainer = prevHostParentIsContainer;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !offscreenSubtreeWasHidden &&
        ((prevHostParent = deletedFiber.updateQueue),
        null !== prevHostParent &&
          ((prevHostParent = prevHostParent.lastEffect),
          null !== prevHostParent))
      ) {
        prevHostParentIsContainer = prevHostParent = prevHostParent.next;
        do {
          var tag = prevHostParentIsContainer.tag,
            inst = prevHostParentIsContainer.inst,
            destroy = inst.destroy;
          void 0 !== destroy &&
            (0 !== (tag & 2)
              ? ((inst.destroy = void 0),
                safelyCallDestroy(
                  deletedFiber,
                  nearestMountedAncestor,
                  destroy
                ))
              : 0 !== (tag & 4) &&
                (enableSchedulingProfiler &&
                  markComponentLayoutEffectUnmountStarted(deletedFiber),
                shouldProfile(deletedFiber)
                  ? (startLayoutEffectTimer(),
                    (inst.destroy = void 0),
                    safelyCallDestroy(
                      deletedFiber,
                      nearestMountedAncestor,
                      destroy
                    ),
                    recordLayoutEffectDuration(deletedFiber))
                  : ((inst.destroy = void 0),
                    safelyCallDestroy(
                      deletedFiber,
                      nearestMountedAncestor,
                      destroy
                    )),
                enableSchedulingProfiler &&
                  markComponentLayoutEffectUnmountStopped()));
          prevHostParentIsContainer = prevHostParentIsContainer.next;
        } while (prevHostParentIsContainer !== prevHostParent);
      }
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 1:
      if (
        !offscreenSubtreeWasHidden &&
        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
        (prevHostParent = deletedFiber.stateNode),
        "function" === typeof prevHostParent.componentWillUnmount)
      )
        try {
          callComponentWillUnmountWithTimer(deletedFiber, prevHostParent);
        } catch (error) {
          captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
        }
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 21:
      safelyDetachRef(deletedFiber, nearestMountedAncestor);
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 22:
      safelyDetachRef(deletedFiber, nearestMountedAncestor);
      deletedFiber.mode & 1
        ? ((offscreenSubtreeWasHidden =
            (prevHostParent = offscreenSubtreeWasHidden) ||
            null !== deletedFiber.memoizedState),
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          ),
          (offscreenSubtreeWasHidden = prevHostParent))
        : recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
      break;
    default:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
  }
}
function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
  if (null === finishedWork.memoizedState) {
    var current = finishedWork.alternate;
    if (
      null !== current &&
      ((current = current.memoizedState),
      null !== current && ((current = current.dehydrated), null !== current))
    )
      try {
        retryIfBlockedOn(current);
        var hydrationCallbacks = finishedRoot.hydrationCallbacks;
        if (null !== hydrationCallbacks) {
          var onHydrated = hydrationCallbacks.onHydrated;
          onHydrated && onHydrated(current);
        }
      } catch (error) {
        captureCommitPhaseError(finishedWork, finishedWork.return, error);
      }
  }
}
function getRetryCache(finishedWork) {
  switch (finishedWork.tag) {
    case 13:
    case 19:
      var retryCache = finishedWork.stateNode;
      null === retryCache &&
        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
      return retryCache;
    case 22:
      return (
        (finishedWork = finishedWork.stateNode),
        (retryCache = finishedWork._retryCache),
        null === retryCache &&
          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
        retryCache
      );
    default:
      throw Error(formatProdErrorMessage(435, finishedWork.tag));
  }
}
function detachOffscreenInstance(instance) {
  var fiber = instance._current;
  if (null === fiber) throw Error(formatProdErrorMessage(456));
  if (0 === (instance._pendingVisibility & 2)) {
    var root = enqueueConcurrentRenderForLane(fiber, 2);
    null !== root &&
      ((instance._pendingVisibility |= 2),
      scheduleUpdateOnFiber(root, fiber, 2));
  }
}
function attachOffscreenInstance(instance) {
  var fiber = instance._current;
  if (null === fiber) throw Error(formatProdErrorMessage(456));
  if (0 !== (instance._pendingVisibility & 2)) {
    var root = enqueueConcurrentRenderForLane(fiber, 2);
    null !== root &&
      ((instance._pendingVisibility &= -3),
      scheduleUpdateOnFiber(root, fiber, 2));
  }
}
function attachSuspenseRetryListeners(finishedWork, wakeables) {
  var retryCache = getRetryCache(finishedWork);
  wakeables.forEach(function (wakeable) {
    var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
    if (!retryCache.has(wakeable)) {
      retryCache.add(wakeable);
      if (isDevToolsPresent)
        if (null !== inProgressLanes && null !== inProgressRoot)
          restorePendingUpdaters(inProgressRoot, inProgressLanes);
        else throw Error(formatProdErrorMessage(413));
      wakeable.then(retry, retry);
    }
  });
}
function commitMutationEffects(root, finishedWork, committedLanes) {
  inProgressLanes = committedLanes;
  inProgressRoot = root;
  commitMutationEffectsOnFiber(finishedWork, root);
  inProgressRoot = inProgressLanes = null;
}
function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
  var deletions = parentFiber.deletions;
  if (null !== deletions)
    for (var i = 0; i < deletions.length; i++) {
      var childToDelete = deletions[i];
      try {
        var root = root$jscomp$0,
          returnFiber = parentFiber,
          parent = returnFiber;
        a: for (; null !== parent; ) {
          switch (parent.tag) {
            case 27:
            case 5:
              hostParent = parent.stateNode;
              hostParentIsContainer = !1;
              break a;
            case 3:
              hostParent = parent.stateNode.containerInfo;
              hostParentIsContainer = !0;
              break a;
            case 4:
              hostParent = parent.stateNode.containerInfo;
              hostParentIsContainer = !0;
              break a;
          }
          parent = parent.return;
        }
        if (null === hostParent) throw Error(formatProdErrorMessage(160));
        commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
        hostParent = null;
        hostParentIsContainer = !1;
        var alternate = childToDelete.alternate;
        null !== alternate && (alternate.return = null);
        childToDelete.return = null;
      } catch (error) {
        captureCommitPhaseError(childToDelete, parentFiber, error);
      }
    }
  if (parentFiber.subtreeFlags & 12854)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
        (parentFiber = parentFiber.sibling);
}
var currentHoistableRoot = null;
function commitMutationEffectsOnFiber(finishedWork, root) {
  var current = finishedWork.alternate,
    flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        try {
          commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
            commitHookEffectListMount(3, finishedWork);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
        if (shouldProfile(finishedWork)) {
          try {
            startLayoutEffectTimer(),
              commitHookEffectListUnmount(5, finishedWork, finishedWork.return);
          } catch (error$176) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$176
            );
          }
          recordLayoutEffectDuration(finishedWork);
        } else
          try {
            commitHookEffectListUnmount(5, finishedWork, finishedWork.return);
          } catch (error$177) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$177
            );
          }
      }
      break;
    case 1:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      flags & 64 &&
        offscreenSubtreeIsHidden &&
        ((finishedWork = finishedWork.updateQueue),
        null !== finishedWork &&
          ((current = finishedWork.callbacks),
          null !== current &&
            ((flags = finishedWork.shared.hiddenCallbacks),
            (finishedWork.shared.hiddenCallbacks =
              null === flags ? current : flags.concat(current)))));
      break;
    case 26:
      var hoistableRoot = currentHoistableRoot;
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      if (flags & 4)
        if (
          ((root = null !== current ? current.memoizedState : null),
          (flags = finishedWork.memoizedState),
          null === current)
        )
          if (null === flags)
            if (null === finishedWork.stateNode) {
              a: {
                current = finishedWork.type;
                flags = finishedWork.memoizedProps;
                root = hoistableRoot.ownerDocument || hoistableRoot;
                b: switch (current) {
                  case "title":
                    hoistableRoot = root.getElementsByTagName("title")[0];
                    if (
                      !hoistableRoot ||
                      hoistableRoot[internalHoistableMarker] ||
                      hoistableRoot[internalInstanceKey] ||
                      "http://www.w3.org/2000/svg" ===
                        hoistableRoot.namespaceURI ||
                      hoistableRoot.hasAttribute("itemprop")
                    )
                      (hoistableRoot = root.createElement(current)),
                        root.head.insertBefore(
                          hoistableRoot,
                          root.querySelector("head > title")
                        );
                    setInitialProperties(hoistableRoot, current, flags);
                    hoistableRoot[internalInstanceKey] = finishedWork;
                    markNodeAsHoistable(hoistableRoot);
                    current = hoistableRoot;
                    break a;
                  case "link":
                    var maybeNodes = getHydratableHoistableCache(
                      "link",
                      "href",
                      root
                    ).get(current + (flags.href || ""));
                    if (maybeNodes)
                      for (var i = 0; i < maybeNodes.length; i++)
                        if (
                          ((hoistableRoot = maybeNodes[i]),
                          hoistableRoot.getAttribute("href") ===
                            (null == flags.href ? null : flags.href) &&
                            hoistableRoot.getAttribute("rel") ===
                              (null == flags.rel ? null : flags.rel) &&
                            hoistableRoot.getAttribute("title") ===
                              (null == flags.title ? null : flags.title) &&
                            hoistableRoot.getAttribute("crossorigin") ===
                              (null == flags.crossOrigin
                                ? null
                                : flags.crossOrigin))
                        ) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    hoistableRoot = root.createElement(current);
                    setInitialProperties(hoistableRoot, current, flags);
                    root.head.appendChild(hoistableRoot);
                    break;
                  case "meta":
                    if (
                      (maybeNodes = getHydratableHoistableCache(
                        "meta",
                        "content",
                        root
                      ).get(current + (flags.content || "")))
                    )
                      for (i = 0; i < maybeNodes.length; i++)
                        if (
                          ((hoistableRoot = maybeNodes[i]),
                          hoistableRoot.getAttribute("content") ===
                            (null == flags.content
                              ? null
                              : "" + flags.content) &&
                            hoistableRoot.getAttribute("name") ===
                              (null == flags.name ? null : flags.name) &&
                            hoistableRoot.getAttribute("property") ===
                              (null == flags.property
                                ? null
                                : flags.property) &&
                            hoistableRoot.getAttribute("http-equiv") ===
                              (null == flags.httpEquiv
                                ? null
                                : flags.httpEquiv) &&
                            hoistableRoot.getAttribute("charset") ===
                              (null == flags.charSet ? null : flags.charSet))
                        ) {
                          maybeNodes.splice(i, 1);
                          break b;
                        }
                    hoistableRoot = root.createElement(current);
                    setInitialProperties(hoistableRoot, current, flags);
                    root.head.appendChild(hoistableRoot);
                    break;
                  default:
                    throw Error(formatProdErrorMessage(468, current));
                }
                hoistableRoot[internalInstanceKey] = finishedWork;
                markNodeAsHoistable(hoistableRoot);
                current = hoistableRoot;
              }
              finishedWork.stateNode = current;
            } else
              mountHoistable(
                hoistableRoot,
                finishedWork.type,
                finishedWork.stateNode
              );
          else
            finishedWork.stateNode = acquireResource(
              hoistableRoot,
              flags,
              finishedWork.memoizedProps
            );
        else if (root !== flags)
          null === root
            ? null !== current.stateNode &&
              ((current = current.stateNode),
              current.parentNode.removeChild(current))
            : root.count--,
            null === flags
              ? mountHoistable(
                  hoistableRoot,
                  finishedWork.type,
                  finishedWork.stateNode
                )
              : acquireResource(
                  hoistableRoot,
                  flags,
                  finishedWork.memoizedProps
                );
        else if (null === flags && null !== finishedWork.stateNode) {
          finishedWork.updateQueue = null;
          try {
            var domElement = finishedWork.stateNode,
              newProps = finishedWork.memoizedProps;
            updateProperties(
              domElement,
              finishedWork.type,
              current.memoizedProps,
              newProps
            );
            domElement[internalPropsKey] = newProps;
          } catch (error$178) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$178
            );
          }
        }
      break;
    case 27:
      if (flags & 4 && null === finishedWork.alternate) {
        hoistableRoot = finishedWork.stateNode;
        maybeNodes = finishedWork.memoizedProps;
        for (i = hoistableRoot.firstChild; i; ) {
          var nextNode = i.nextSibling,
            nodeName = i.nodeName;
          i[internalHoistableMarker] ||
            "HEAD" === nodeName ||
            "BODY" === nodeName ||
            "SCRIPT" === nodeName ||
            "STYLE" === nodeName ||
            ("LINK" === nodeName && "stylesheet" === i.rel.toLowerCase()) ||
            hoistableRoot.removeChild(i);
          i = nextNode;
        }
        i = finishedWork.type;
        for (nextNode = hoistableRoot.attributes; nextNode.length; )
          hoistableRoot.removeAttributeNode(nextNode[0]);
        setInitialProperties(hoistableRoot, i, maybeNodes);
        hoistableRoot[internalInstanceKey] = finishedWork;
        hoistableRoot[internalPropsKey] = maybeNodes;
      }
    case 5:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      if (finishedWork.flags & 32) {
        root = finishedWork.stateNode;
        try {
          setTextContent(root, "");
        } catch (error$179) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$179);
        }
      }
      if (flags & 4 && ((flags = finishedWork.stateNode), null != flags)) {
        root = finishedWork.memoizedProps;
        current = null !== current ? current.memoizedProps : root;
        hoistableRoot = finishedWork.type;
        finishedWork.updateQueue = null;
        try {
          updateProperties(flags, hoistableRoot, current, root),
            (flags[internalPropsKey] = root);
        } catch (error$182) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$182);
        }
      }
      break;
    case 6:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        if (null === finishedWork.stateNode)
          throw Error(formatProdErrorMessage(162));
        current = finishedWork.stateNode;
        flags = finishedWork.memoizedProps;
        try {
          current.nodeValue = flags;
        } catch (error$183) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$183);
        }
      }
      break;
    case 3:
      tagCaches = null;
      hoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(root.containerInfo);
      recursivelyTraverseMutationEffects(root, finishedWork);
      currentHoistableRoot = hoistableRoot;
      commitReconciliationEffects(finishedWork);
      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
        try {
          retryIfBlockedOn(root.containerInfo);
        } catch (error$184) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$184);
        }
      break;
    case 4:
      current = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(
        finishedWork.stateNode.containerInfo
      );
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      currentHoistableRoot = current;
      break;
    case 13:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      finishedWork.child.flags & 8192 &&
        ((root = null !== finishedWork.memoizedState),
        (current = null !== current && null !== current.memoizedState),
        alwaysThrottleRetries
          ? root !== current && (globalMostRecentFallbackTime = now$1())
          : root && !current && (globalMostRecentFallbackTime = now$1()));
      if (flags & 4) {
        try {
          if (null !== finishedWork.memoizedState) {
            var suspenseCallback = finishedWork.memoizedProps.suspenseCallback;
            if ("function" === typeof suspenseCallback) {
              var retryQueue = finishedWork.updateQueue;
              null !== retryQueue && suspenseCallback(new Set(retryQueue));
            }
          }
        } catch (error$186) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$186);
        }
        current = finishedWork.updateQueue;
        null !== current &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, current));
      }
      break;
    case 22:
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      domElement = null !== finishedWork.memoizedState;
      newProps = null !== current && null !== current.memoizedState;
      finishedWork.mode & 1
        ? ((suspenseCallback = offscreenSubtreeIsHidden),
          (retryQueue = offscreenSubtreeWasHidden),
          (offscreenSubtreeIsHidden = suspenseCallback || domElement),
          (offscreenSubtreeWasHidden = retryQueue || newProps),
          recursivelyTraverseMutationEffects(root, finishedWork),
          (offscreenSubtreeWasHidden = retryQueue),
          (offscreenSubtreeIsHidden = suspenseCallback))
        : recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      root = finishedWork.stateNode;
      root._current = finishedWork;
      root._visibility &= -3;
      root._visibility |= root._pendingVisibility & 2;
      if (
        flags & 8192 &&
        ((root._visibility = domElement
          ? root._visibility & -2
          : root._visibility | 1),
        domElement &&
          ((root = offscreenSubtreeIsHidden || offscreenSubtreeWasHidden),
          null === current ||
            newProps ||
            root ||
            (0 !== (finishedWork.mode & 1) &&
              recursivelyTraverseDisappearLayoutEffects(finishedWork))),
        null === finishedWork.memoizedProps ||
          "manual" !== finishedWork.memoizedProps.mode)
      )
        a: for (current = null, root = finishedWork; ; ) {
          if (5 === root.tag || 26 === root.tag || 27 === root.tag) {
            if (null === current) {
              current = root;
              try {
                (hoistableRoot = root.stateNode),
                  domElement
                    ? ((maybeNodes = hoistableRoot.style),
                      "function" === typeof maybeNodes.setProperty
                        ? maybeNodes.setProperty("display", "none", "important")
                        : (maybeNodes.display = "none"))
                    : ((i = root.stateNode),
                      (nextNode = root.memoizedProps.style),
                      (nodeName =
                        void 0 !== nextNode &&
                        null !== nextNode &&
                        nextNode.hasOwnProperty("display")
                          ? nextNode.display
                          : null),
                      (i.style.display =
                        null == nodeName || "boolean" === typeof nodeName
                          ? ""
                          : ("" + nodeName).trim()));
              } catch (error) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error
                );
              }
            }
          } else if (6 === root.tag) {
            if (null === current)
              try {
                root.stateNode.nodeValue = domElement ? "" : root.memoizedProps;
              } catch (error$166) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error$166
                );
              }
          } else if (
            ((22 !== root.tag && 23 !== root.tag) ||
              null === root.memoizedState ||
              root === finishedWork) &&
            null !== root.child
          ) {
            root.child.return = root;
            root = root.child;
            continue;
          }
          if (root === finishedWork) break a;
          for (; null === root.sibling; ) {
            if (null === root.return || root.return === finishedWork) break a;
            current === root && (current = null);
            root = root.return;
          }
          current === root && (current = null);
          root.sibling.return = root.return;
          root = root.sibling;
        }
      flags & 4 &&
        ((current = finishedWork.updateQueue),
        null !== current &&
          ((flags = current.retryQueue),
          null !== flags &&
            ((current.retryQueue = null),
            attachSuspenseRetryListeners(finishedWork, flags))));
      break;
    case 19:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        ((current = finishedWork.updateQueue),
        null !== current &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, current)));
      break;
    case 21:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        (null !== current && safelyDetachRef(finishedWork, finishedWork.return),
        safelyAttachRef(finishedWork, finishedWork.return));
      flags & 4 && (finishedWork.stateNode[internalInstanceKey] = finishedWork);
      break;
    default:
      recursivelyTraverseMutationEffects(root, finishedWork),
        commitReconciliationEffects(finishedWork);
  }
}
function commitReconciliationEffects(finishedWork) {
  var flags = finishedWork.flags;
  if (flags & 2) {
    try {
      if (27 !== finishedWork.tag) {
        b: {
          for (var parent = finishedWork.return; null !== parent; ) {
            if (isHostParent(parent)) {
              var JSCompiler_inline_result = parent;
              break b;
            }
            parent = parent.return;
          }
          throw Error(formatProdErrorMessage(160));
        }
        switch (JSCompiler_inline_result.tag) {
          case 27:
            var parent$jscomp$0 = JSCompiler_inline_result.stateNode,
              before = getHostSibling(finishedWork);
            insertOrAppendPlacementNode(finishedWork, before, parent$jscomp$0);
            break;
          case 5:
            var parent$167 = JSCompiler_inline_result.stateNode;
            JSCompiler_inline_result.flags & 32 &&
              (setTextContent(parent$167, ""),
              (JSCompiler_inline_result.flags &= -33));
            var before$168 = getHostSibling(finishedWork);
            insertOrAppendPlacementNode(finishedWork, before$168, parent$167);
            break;
          case 3:
          case 4:
            var parent$169 = JSCompiler_inline_result.stateNode.containerInfo,
              before$170 = getHostSibling(finishedWork);
            insertOrAppendPlacementNodeIntoContainer(
              finishedWork,
              before$170,
              parent$169
            );
            break;
          default:
            throw Error(formatProdErrorMessage(161));
        }
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    finishedWork.flags &= -3;
  }
  flags & 4096 && (finishedWork.flags &= -4097);
}
function commitLayoutEffects(finishedWork, root, committedLanes) {
  inProgressLanes = committedLanes;
  inProgressRoot = root;
  commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
  inProgressRoot = inProgressLanes = null;
}
function recursivelyTraverseLayoutEffects(root, parentFiber) {
  if (parentFiber.subtreeFlags & 8772)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
        (parentFiber = parentFiber.sibling);
}
function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedWork = parentFiber;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (shouldProfile(finishedWork))
          try {
            startLayoutEffectTimer(),
              commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
          } finally {
            recordLayoutEffectDuration(finishedWork);
          }
        else commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 1:
        safelyDetachRef(finishedWork, finishedWork.return);
        var instance = finishedWork.stateNode;
        if ("function" === typeof instance.componentWillUnmount) {
          var current = finishedWork,
            nearestMountedAncestor = finishedWork.return;
          try {
            callComponentWillUnmountWithTimer(current, instance);
          } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
          }
        }
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 26:
      case 27:
      case 5:
        safelyDetachRef(finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 22:
        safelyDetachRef(finishedWork, finishedWork.return);
        null === finishedWork.memoizedState &&
          recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      default:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseReappearLayoutEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var current = parentFiber.alternate,
      finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        commitHookLayoutEffects(finishedWork, 4);
        break;
      case 1:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        finishedRoot = finishedWork.stateNode;
        if ("function" === typeof finishedRoot.componentDidMount)
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        current = finishedWork.updateQueue;
        if (null !== current) {
          var hiddenCallbacks = current.shared.hiddenCallbacks;
          if (null !== hiddenCallbacks)
            for (
              current.shared.hiddenCallbacks = null, current = 0;
              current < hiddenCallbacks.length;
              current++
            )
              callCallback(hiddenCallbacks[current], finishedRoot);
        }
        includeWorkInProgressEffects &&
          flags & 64 &&
          commitClassCallbacks(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 26:
      case 27:
      case 5:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          null === current &&
          flags & 4 &&
          commitHostComponentMount(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 12:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 4 &&
          commitProfilerUpdate(finishedWork, current);
        break;
      case 13:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 4 &&
          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseReappearLayoutEffects(
            finishedRoot,
            finishedWork,
            includeWorkInProgressEffects
          );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      default:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitHookPassiveMountEffects(finishedWork, hookFlags) {
  if (shouldProfile(finishedWork)) {
    passiveEffectStartTime = now();
    try {
      commitHookEffectListMount(hookFlags, finishedWork);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    recordPassiveEffectDuration(finishedWork);
  } else
    try {
      commitHookEffectListMount(hookFlags, finishedWork);
    } catch (error$189) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error$189);
    }
}
function commitOffscreenPassiveMountEffects(current, finishedWork, instance) {
  var previousCache = null;
  null !== current &&
    null !== current.memoizedState &&
    null !== current.memoizedState.cachePool &&
    (previousCache = current.memoizedState.cachePool.pool);
  current = null;
  null !== finishedWork.memoizedState &&
    null !== finishedWork.memoizedState.cachePool &&
    (current = finishedWork.memoizedState.cachePool.pool);
  current !== previousCache &&
    (null != current && current.refCount++,
    null != previousCache && releaseCache(previousCache));
  if (enableTransitionTracing) {
    current = finishedWork.updateQueue;
    previousCache = null !== finishedWork.memoizedState;
    if (null !== current) {
      if (previousCache) {
        var transitions = current.transitions;
        null !== transitions &&
          transitions.forEach(function (transition) {
            null === instance._transitions &&
              (instance._transitions = new Set());
            instance._transitions.add(transition);
          });
        current = current.markerInstances;
        null !== current &&
          current.forEach(function (markerInstance) {
            var markerTransitions = markerInstance.transitions;
            null !== markerTransitions &&
              markerTransitions.forEach(function (transition) {
                null === instance._transitions
                  ? (instance._transitions = new Set())
                  : instance._transitions.has(transition) &&
                    (null === markerInstance.pendingBoundaries &&
                      (markerInstance.pendingBoundaries = new Map()),
                    null === instance._pendingMarkers &&
                      (instance._pendingMarkers = new Set()),
                    instance._pendingMarkers.add(markerInstance));
              });
          });
      }
      finishedWork.updateQueue = null;
    }
    commitTransitionProgress(finishedWork);
    previousCache ||
      ((instance._transitions = null), (instance._pendingMarkers = null));
  }
}
function commitCachePassiveMountEffect(current, finishedWork) {
  current = null;
  null !== finishedWork.alternate &&
    (current = finishedWork.alternate.memoizedState.cache);
  finishedWork = finishedWork.memoizedState.cache;
  finishedWork !== current &&
    (finishedWork.refCount++, null != current && releaseCache(current));
}
function commitTracingMarkerPassiveMountEffect(finishedWork) {
  var instance = finishedWork.stateNode;
  null !== instance.transitions &&
    null === instance.pendingBoundaries &&
    (addMarkerCompleteCallbackToPendingTransition(
      finishedWork.memoizedProps.name,
      instance.transitions
    ),
    (instance.transitions = null),
    (instance.pendingBoundaries = null),
    (instance.aborts = null),
    (instance.name = null));
}
function recursivelyTraversePassiveMountEffects(
  root,
  parentFiber,
  committedLanes,
  committedTransitions
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveMountOnFiber(
        root,
        parentFiber,
        committedLanes,
        committedTransitions
      ),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveMountOnFiber(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions
) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && commitHookPassiveMountEffects(finishedWork, 9);
      break;
    case 3:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      if (flags & 2048) {
        flags = null;
        null !== finishedWork.alternate &&
          (flags = finishedWork.alternate.memoizedState.cache);
        var nextCache = finishedWork.memoizedState.cache;
        nextCache !== flags &&
          (nextCache.refCount++, null != flags && releaseCache(flags));
        if (enableTransitionTracing) {
          var incompleteTransitions =
            finishedWork.stateNode.incompleteTransitions;
          null !== committedTransitions &&
            (committedTransitions.forEach(function (transition) {
              enableTransitionTracing &&
                (null === currentPendingTransitionCallbacks &&
                  (currentPendingTransitionCallbacks = {
                    transitionStart: [],
                    transitionProgress: null,
                    transitionComplete: null,
                    markerProgress: null,
                    markerIncomplete: null,
                    markerComplete: null
                  }),
                null === currentPendingTransitionCallbacks.transitionStart &&
                  (currentPendingTransitionCallbacks.transitionStart = []),
                currentPendingTransitionCallbacks.transitionStart.push(
                  transition
                ));
            }),
            clearTransitionsForLanes(finishedRoot, committedLanes));
          incompleteTransitions.forEach(function (markerInstance, transition) {
            var pendingBoundaries = markerInstance.pendingBoundaries;
            if (null === pendingBoundaries || 0 === pendingBoundaries.size)
              null === markerInstance.aborts &&
                enableTransitionTracing &&
                (null === currentPendingTransitionCallbacks &&
                  (currentPendingTransitionCallbacks = {
                    transitionStart: null,
                    transitionProgress: null,
                    transitionComplete: [],
                    markerProgress: null,
                    markerIncomplete: null,
                    markerComplete: null
                  }),
                null === currentPendingTransitionCallbacks.transitionComplete &&
                  (currentPendingTransitionCallbacks.transitionComplete = []),
                currentPendingTransitionCallbacks.transitionComplete.push(
                  transition
                )),
                incompleteTransitions.delete(transition);
          });
          clearTransitionsForLanes(finishedRoot, committedLanes);
        }
      }
      break;
    case 23:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork,
          finishedWork.stateNode
        );
      break;
    case 22:
      nextCache = finishedWork.stateNode;
      null !== finishedWork.memoizedState
        ? nextCache._visibility & 4
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : finishedWork.mode & 1
          ? recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
          : ((nextCache._visibility |= 4),
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            ))
        : nextCache._visibility & 4
        ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          )
        : ((nextCache._visibility |= 4),
          recursivelyTraverseReconnectPassiveEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions,
            0 !== (finishedWork.subtreeFlags & 10256)
          ));
      flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork,
          nextCache
        );
      break;
    case 24:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
      break;
    case 25:
      if (enableTransitionTracing) {
        recursivelyTraversePassiveMountEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions
        );
        flags & 2048 && commitTracingMarkerPassiveMountEffect(finishedWork);
        break;
      }
    default:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
  }
}
function recursivelyTraverseReconnectPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  committedLanes$jscomp$0,
  committedTransitions$jscomp$0,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      committedLanes = committedLanes$jscomp$0,
      committedTransitions = committedTransitions$jscomp$0,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        commitHookPassiveMountEffects(finishedWork, 8);
        break;
      case 23:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork,
            finishedWork.stateNode
          );
        break;
      case 22:
        var instance$194 = finishedWork.stateNode;
        null !== finishedWork.memoizedState
          ? instance$194._visibility & 4
            ? recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              )
            : finishedWork.mode & 1
            ? recursivelyTraverseAtomicPassiveEffects(
                finishedRoot,
                finishedWork
              )
            : ((instance$194._visibility |= 4),
              recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              ))
          : ((instance$194._visibility |= 4),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork,
            instance$194
          );
        break;
      case 24:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
        break;
      case 25:
        if (enableTransitionTracing) {
          recursivelyTraverseReconnectPassiveEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions,
            includeWorkInProgressEffects
          );
          includeWorkInProgressEffects &&
            flags & 2048 &&
            commitTracingMarkerPassiveMountEffect(finishedWork);
          break;
        }
      default:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseAtomicPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var finishedRoot = finishedRoot$jscomp$0,
        finishedWork = parentFiber,
        flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 22:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork,
              finishedWork.stateNode
            );
          break;
        case 24:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
      }
      parentFiber = parentFiber.sibling;
    }
}
var suspenseyCommitFlag = 8192;
function recursivelyAccumulateSuspenseyCommit(parentFiber) {
  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      accumulateSuspenseyCommitOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function accumulateSuspenseyCommitOnFiber(fiber) {
  switch (fiber.tag) {
    case 26:
      recursivelyAccumulateSuspenseyCommit(fiber);
      fiber.flags & suspenseyCommitFlag &&
        null !== fiber.memoizedState &&
        suspendResource(
          currentHoistableRoot,
          fiber.memoizedState,
          fiber.memoizedProps
        );
      break;
    case 5:
      recursivelyAccumulateSuspenseyCommit(fiber);
      break;
    case 3:
    case 4:
      var previousHoistableRoot = currentHoistableRoot;
      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
      recursivelyAccumulateSuspenseyCommit(fiber);
      currentHoistableRoot = previousHoistableRoot;
      break;
    case 22:
      null === fiber.memoizedState &&
        ((previousHoistableRoot = fiber.alternate),
        null !== previousHoistableRoot &&
        null !== previousHoistableRoot.memoizedState
          ? ((previousHoistableRoot = suspenseyCommitFlag),
            (suspenseyCommitFlag = 16777216),
            recursivelyAccumulateSuspenseyCommit(fiber),
            (suspenseyCommitFlag = previousHoistableRoot))
          : recursivelyAccumulateSuspenseyCommit(fiber));
      break;
    default:
      recursivelyAccumulateSuspenseyCommit(fiber);
  }
}
function detachAlternateSiblings(parentFiber) {
  var previousFiber = parentFiber.alternate;
  if (
    null !== previousFiber &&
    ((parentFiber = previousFiber.child), null !== parentFiber)
  ) {
    previousFiber.child = null;
    do
      (previousFiber = parentFiber.sibling),
        (parentFiber.sibling = null),
        (parentFiber = previousFiber);
    while (null !== parentFiber);
  }
}
function commitHookPassiveUnmountEffects(
  finishedWork,
  nearestMountedAncestor,
  hookFlags
) {
  shouldProfile(finishedWork)
    ? ((passiveEffectStartTime = now()),
      commitHookEffectListUnmount(
        hookFlags,
        finishedWork,
        nearestMountedAncestor
      ),
      recordPassiveEffectDuration(finishedWork))
    : commitHookEffectListUnmount(
        hookFlags,
        finishedWork,
        nearestMountedAncestor
      );
}
function recursivelyTraversePassiveUnmountEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveUnmountOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveUnmountOnFiber(finishedWork) {
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      finishedWork.flags & 2048 &&
        commitHookPassiveUnmountEffects(finishedWork, finishedWork.return, 9);
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState &&
      instance._visibility & 4 &&
      (null === finishedWork.return || 13 !== finishedWork.return.tag)
        ? ((instance._visibility &= -5),
          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
        : recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    default:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    deletions = parentFiber;
    switch (deletions.tag) {
      case 0:
      case 11:
      case 15:
        commitHookPassiveUnmountEffects(deletions, deletions.return, 8);
        recursivelyTraverseDisconnectPassiveEffects(deletions);
        break;
      case 22:
        i = deletions.stateNode;
        i._visibility & 4 &&
          ((i._visibility &= -5),
          recursivelyTraverseDisconnectPassiveEffects(deletions));
        break;
      default:
        recursivelyTraverseDisconnectPassiveEffects(deletions);
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
  deletedSubtreeRoot,
  nearestMountedAncestor$jscomp$0
) {
  for (; null !== nextEffect; ) {
    var fiber = nextEffect,
      nearestMountedAncestor = nearestMountedAncestor$jscomp$0;
    switch (fiber.tag) {
      case 0:
      case 11:
      case 15:
        commitHookPassiveUnmountEffects(fiber, nearestMountedAncestor, 8);
        break;
      case 23:
      case 22:
        null !== fiber.memoizedState &&
          null !== fiber.memoizedState.cachePool &&
          ((nearestMountedAncestor = fiber.memoizedState.cachePool.pool),
          null != nearestMountedAncestor && nearestMountedAncestor.refCount++);
        break;
      case 13:
        if (enableTransitionTracing) {
          var offscreenFiber = fiber.child,
            instance = offscreenFiber.stateNode,
            transitions = instance._transitions;
          if (null !== transitions) {
            var abortReason = {
              reason: "suspense",
              name: fiber.memoizedProps.unstable_name || null
            };
            if (
              null === fiber.memoizedState ||
              null === fiber.memoizedState.dehydrated
            )
              abortParentMarkerTransitionsForDeletedFiber(
                offscreenFiber,
                abortReason,
                transitions,
                instance,
                !0
              ),
                null !== nearestMountedAncestor &&
                  abortParentMarkerTransitionsForDeletedFiber(
                    nearestMountedAncestor,
                    abortReason,
                    transitions,
                    instance,
                    !1
                  );
          }
        }
        break;
      case 24:
        releaseCache(fiber.memoizedState.cache);
        break;
      case 25:
        enableTransitionTracing &&
          ((offscreenFiber = fiber.stateNode.transitions),
          null !== offscreenFiber &&
            ((instance = { reason: "marker", name: fiber.memoizedProps.name }),
            abortParentMarkerTransitionsForDeletedFiber(
              fiber,
              instance,
              offscreenFiber,
              null,
              !0
            ),
            null !== nearestMountedAncestor &&
              abortParentMarkerTransitionsForDeletedFiber(
                nearestMountedAncestor,
                instance,
                offscreenFiber,
                null,
                !1
              )));
    }
    nearestMountedAncestor = fiber.child;
    if (null !== nearestMountedAncestor)
      (nearestMountedAncestor.return = fiber),
        (nextEffect = nearestMountedAncestor);
    else
      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
        nearestMountedAncestor = nextEffect;
        offscreenFiber = nearestMountedAncestor.sibling;
        instance = nearestMountedAncestor.return;
        detachFiberAfterEffects(nearestMountedAncestor);
        if (nearestMountedAncestor === fiber) {
          nextEffect = null;
          break a;
        }
        if (null !== offscreenFiber) {
          offscreenFiber.return = instance;
          nextEffect = offscreenFiber;
          break a;
        }
        nextEffect = instance;
      }
  }
}
var DefaultCacheDispatcher = {
    getCacheSignal: function () {
      return readContext(CacheContext).controller.signal;
    },
    getCacheForType: function (resourceType) {
      var cache = readContext(CacheContext),
        cacheForType = cache.data.get(resourceType);
      void 0 === cacheForType &&
        ((cacheForType = resourceType()),
        cache.data.set(resourceType, cacheForType));
      return cacheForType;
    }
  },
  postPaintCallbackScheduled = !1,
  callbacks = [];
function schedulePostPaintCallback(callback) {
  callbacks.push(callback);
  postPaintCallbackScheduled ||
    ((postPaintCallbackScheduled = !0),
    requestPostPaintCallback(function (endTime) {
      for (var i = 0; i < callbacks.length; i++) callbacks[i](endTime);
      postPaintCallbackScheduled = !1;
      callbacks = [];
    }));
}
var PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
  ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher,
  ReactCurrentCache = ReactSharedInternals.ReactCurrentCache,
  ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner,
  ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig,
  executionContext = 0,
  workInProgressRoot = null,
  workInProgress = null,
  workInProgressRootRenderLanes = 0,
  workInProgressSuspendedReason = 0,
  workInProgressThrownValue = null,
  workInProgressRootDidAttachPingListener = !1,
  entangledRenderLanes = 0,
  workInProgressRootExitStatus = 0,
  workInProgressRootFatalError = null,
  workInProgressRootSkippedLanes = 0,
  workInProgressRootInterleavedUpdatedLanes = 0,
  workInProgressRootPingedLanes = 0,
  workInProgressDeferredLane = 0,
  workInProgressRootConcurrentErrors = null,
  workInProgressRootRecoverableErrors = null,
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1,
  didIncludeCommitPhaseUpdate = !1,
  globalMostRecentFallbackTime = 0,
  workInProgressRootRenderTargetTime = Infinity,
  workInProgressTransitions = null,
  currentPendingTransitionCallbacks = null,
  currentEndTime = null;
function addMarkerProgressCallbackToPendingTransition(
  markerName,
  transitions,
  pendingBoundaries
) {
  enableTransitionTracing &&
    (null === currentPendingTransitionCallbacks &&
      (currentPendingTransitionCallbacks = {
        transitionStart: null,
        transitionProgress: null,
        transitionComplete: null,
        markerProgress: new Map(),
        markerIncomplete: null,
        markerComplete: null
      }),
    null === currentPendingTransitionCallbacks.markerProgress &&
      (currentPendingTransitionCallbacks.markerProgress = new Map()),
    currentPendingTransitionCallbacks.markerProgress.set(markerName, {
      pendingBoundaries: pendingBoundaries,
      transitions: transitions
    }));
}
function addMarkerCompleteCallbackToPendingTransition(markerName, transitions) {
  enableTransitionTracing &&
    (null === currentPendingTransitionCallbacks &&
      (currentPendingTransitionCallbacks = {
        transitionStart: null,
        transitionProgress: null,
        transitionComplete: null,
        markerProgress: null,
        markerIncomplete: null,
        markerComplete: new Map()
      }),
    null === currentPendingTransitionCallbacks.markerComplete &&
      (currentPendingTransitionCallbacks.markerComplete = new Map()),
    currentPendingTransitionCallbacks.markerComplete.set(
      markerName,
      transitions
    ));
}
function addTransitionProgressCallbackToPendingTransition(
  transition,
  boundaries
) {
  enableTransitionTracing &&
    (null === currentPendingTransitionCallbacks &&
      (currentPendingTransitionCallbacks = {
        transitionStart: null,
        transitionProgress: new Map(),
        transitionComplete: null,
        markerProgress: null,
        markerIncomplete: null,
        markerComplete: null
      }),
    null === currentPendingTransitionCallbacks.transitionProgress &&
      (currentPendingTransitionCallbacks.transitionProgress = new Map()),
    currentPendingTransitionCallbacks.transitionProgress.set(
      transition,
      boundaries
    ));
}
var hasUncaughtError = !1,
  firstUncaughtError = null,
  legacyErrorBoundariesThatAlreadyFailed = null,
  rootCommittingMutationOrLayoutEffects = null,
  rootDoesHavePassiveEffects = !1,
  rootWithPendingPassiveEffects = null,
  pendingPassiveEffectsLanes = 0,
  pendingPassiveProfilerEffects = [],
  pendingPassiveEffectsRemainingLanes = 0,
  pendingPassiveTransitions = null,
  nestedUpdateCount = 0,
  rootWithNestedUpdates = null;
function requestUpdateLane(fiber) {
  if (0 === (fiber.mode & 1)) return 2;
  if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
  if (null !== requestCurrentTransition())
    return (
      (fiber = currentEntangledLane),
      0 !== fiber ? fiber : requestTransitionLane()
    );
  fiber = currentUpdatePriority;
  if (0 !== fiber) return fiber;
  fiber = window.event;
  fiber = void 0 === fiber ? 32 : getEventPriority(fiber.type);
  return fiber;
}
function requestDeferredLane() {
  0 === workInProgressDeferredLane &&
    (workInProgressDeferredLane =
      0 === (workInProgressRootRenderLanes & 536870912) || isHydrating
        ? claimNextTransitionLane()
        : 536870912);
  var suspenseHandler = suspenseHandlerStackCursor.current;
  null !== suspenseHandler && (suspenseHandler.flags |= 32);
  return workInProgressDeferredLane;
}
function scheduleUpdateOnFiber(root, fiber, lane) {
  if (
    (root === workInProgressRoot && 2 === workInProgressSuspendedReason) ||
    null !== root.cancelPendingCommit
  )
    prepareFreshStack(root, 0),
      markRootSuspended(
        root,
        workInProgressRootRenderLanes,
        workInProgressDeferredLane
      );
  markRootUpdated(root, lane);
  if (0 === (executionContext & 2) || root !== workInProgressRoot) {
    isDevToolsPresent && addFiberToLanesMap(root, fiber, lane);
    if (
      enableProfilerNestedUpdateScheduledHook &&
      0 !== (executionContext & 4) &&
      root === rootCommittingMutationOrLayoutEffects &&
      fiber.mode & 2
    )
      for (var current = fiber; null !== current; ) {
        if (12 === current.tag) {
          var _current$memoizedProp = current.memoizedProps,
            id = _current$memoizedProp.id;
          _current$memoizedProp = _current$memoizedProp.onNestedUpdateScheduled;
          "function" === typeof _current$memoizedProp &&
            _current$memoizedProp(id);
        }
        current = current.return;
      }
    if (
      enableTransitionTracing &&
      ((current = ReactCurrentBatchConfig$1.transition),
      null !== current &&
        null != current.name &&
        (-1 === current.startTime && (current.startTime = now$1()),
        enableTransitionTracing))
    ) {
      id = root.transitionLanes;
      _current$memoizedProp = 31 - clz32(lane);
      var transitions = id[_current$memoizedProp];
      null === transitions && (transitions = new Set());
      transitions.add(current);
      id[_current$memoizedProp] = transitions;
    }
    root === workInProgressRoot &&
      (0 === (executionContext & 2) &&
        (workInProgressRootInterleavedUpdatedLanes |= lane),
      4 === workInProgressRootExitStatus &&
        markRootSuspended(
          root,
          workInProgressRootRenderLanes,
          workInProgressDeferredLane
        ));
    ensureRootIsScheduled(root);
    2 === lane &&
      0 === executionContext &&
      0 === (fiber.mode & 1) &&
      ((workInProgressRootRenderTargetTime = now$1() + 500),
      flushSyncWorkAcrossRoots_impl(!0));
  }
}
function performConcurrentWorkOnRoot(root, didTimeout) {
  nestedUpdateScheduled = currentUpdateIsNested = !1;
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  var originalCallbackNode = root.callbackNode;
  if (flushPassiveEffects() && root.callbackNode !== originalCallbackNode)
    return null;
  var lanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : 0
  );
  if (0 === lanes) return null;
  var exitStatus = (didTimeout =
    !includesBlockingLane(root, lanes) &&
    0 === (lanes & root.expiredLanes) &&
    (disableSchedulerTimeoutInWorkLoop || !didTimeout))
    ? renderRootConcurrent(root, lanes)
    : renderRootSync(root, lanes);
  if (0 !== exitStatus) {
    var renderWasConcurrent = didTimeout;
    do {
      if (6 === exitStatus) markRootSuspended(root, lanes, 0);
      else {
        didTimeout = root.current.alternate;
        if (
          renderWasConcurrent &&
          !isRenderConsistentWithExternalStores(didTimeout)
        ) {
          exitStatus = renderRootSync(root, lanes);
          renderWasConcurrent = !1;
          continue;
        }
        if (2 === exitStatus) {
          renderWasConcurrent = lanes;
          var errorRetryLanes = getLanesToRetrySynchronouslyOnError(
            root,
            renderWasConcurrent
          );
          0 !== errorRetryLanes &&
            ((lanes = errorRetryLanes),
            (exitStatus = recoverFromConcurrentError(
              root,
              renderWasConcurrent,
              errorRetryLanes
            )));
        }
        if (1 === exitStatus)
          throw (
            ((originalCallbackNode = workInProgressRootFatalError),
            prepareFreshStack(root, 0),
            markRootSuspended(root, lanes, 0),
            ensureRootIsScheduled(root),
            originalCallbackNode)
          );
        root.finishedWork = didTimeout;
        root.finishedLanes = lanes;
        a: {
          renderWasConcurrent = root;
          switch (exitStatus) {
            case 0:
            case 1:
              throw Error(formatProdErrorMessage(345));
            case 4:
              if ((lanes & 4194176) === lanes) {
                markRootSuspended(
                  renderWasConcurrent,
                  lanes,
                  workInProgressDeferredLane
                );
                break a;
              }
              break;
            case 2:
            case 3:
            case 5:
              break;
            default:
              throw Error(formatProdErrorMessage(329));
          }
          if (
            (lanes & 62914560) === lanes &&
            (alwaysThrottleRetries || 3 === exitStatus) &&
            ((exitStatus = globalMostRecentFallbackTime + 300 - now$1()),
            10 < exitStatus)
          ) {
            markRootSuspended(
              renderWasConcurrent,
              lanes,
              workInProgressDeferredLane
            );
            if (0 !== getNextLanes(renderWasConcurrent, 0)) break a;
            renderWasConcurrent.timeoutHandle = scheduleTimeout(
              commitRootWhenReady.bind(
                null,
                renderWasConcurrent,
                didTimeout,
                workInProgressRootRecoverableErrors,
                workInProgressTransitions,
                workInProgressRootDidIncludeRecursiveRenderUpdate,
                lanes,
                workInProgressDeferredLane
              ),
              exitStatus
            );
            break a;
          }
          commitRootWhenReady(
            renderWasConcurrent,
            didTimeout,
            workInProgressRootRecoverableErrors,
            workInProgressTransitions,
            workInProgressRootDidIncludeRecursiveRenderUpdate,
            lanes,
            workInProgressDeferredLane
          );
        }
      }
      break;
    } while (1);
  }
  ensureRootIsScheduled(root);
  scheduleTaskForRootDuringMicrotask(root, now$1());
  root =
    root.callbackNode === originalCallbackNode
      ? performConcurrentWorkOnRoot.bind(null, root)
      : null;
  return root;
}
function recoverFromConcurrentError(
  root,
  originallyAttemptedLanes,
  errorRetryLanes
) {
  var errorsFromFirstAttempt = workInProgressRootConcurrentErrors,
    wasRootDehydrated = root.current.memoizedState.isDehydrated;
  wasRootDehydrated && (prepareFreshStack(root, errorRetryLanes).flags |= 256);
  errorRetryLanes = renderRootSync(root, errorRetryLanes);
  if (2 !== errorRetryLanes) {
    if (workInProgressRootDidAttachPingListener && !wasRootDehydrated)
      return (
        (root.errorRecoveryDisabledLanes |= originallyAttemptedLanes),
        (workInProgressRootInterleavedUpdatedLanes |= originallyAttemptedLanes),
        4
      );
    root = workInProgressRootRecoverableErrors;
    workInProgressRootRecoverableErrors = errorsFromFirstAttempt;
    null !== root && queueRecoverableErrors(root);
  }
  return errorRetryLanes;
}
function queueRecoverableErrors(errors) {
  null === workInProgressRootRecoverableErrors
    ? (workInProgressRootRecoverableErrors = errors)
    : workInProgressRootRecoverableErrors.push.apply(
        workInProgressRootRecoverableErrors,
        errors
      );
}
function commitRootWhenReady(
  root,
  finishedWork,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  lanes,
  spawnedLane
) {
  if (
    0 === (lanes & 42) &&
    ((suspendedState = { stylesheets: null, count: 0, unsuspend: noop }),
    accumulateSuspenseyCommitOnFiber(finishedWork),
    (finishedWork = waitForCommitToBeReady()),
    null !== finishedWork)
  ) {
    root.cancelPendingCommit = finishedWork(
      commitRoot.bind(
        null,
        root,
        recoverableErrors,
        transitions,
        didIncludeRenderPhaseUpdate
      )
    );
    markRootSuspended(root, lanes, spawnedLane);
    return;
  }
  commitRoot(
    root,
    recoverableErrors,
    transitions,
    didIncludeRenderPhaseUpdate,
    spawnedLane
  );
}
function isRenderConsistentWithExternalStores(finishedWork) {
  for (var node = finishedWork; ; ) {
    if (node.flags & 16384) {
      var updateQueue = node.updateQueue;
      if (
        null !== updateQueue &&
        ((updateQueue = updateQueue.stores), null !== updateQueue)
      )
        for (var i = 0; i < updateQueue.length; i++) {
          var check = updateQueue[i],
            getSnapshot = check.getSnapshot;
          check = check.value;
          try {
            if (!objectIs(getSnapshot(), check)) return !1;
          } catch (error) {
            return !1;
          }
        }
    }
    updateQueue = node.child;
    if (node.subtreeFlags & 16384 && null !== updateQueue)
      (updateQueue.return = node), (node = updateQueue);
    else {
      if (node === finishedWork) break;
      for (; null === node.sibling; ) {
        if (null === node.return || node.return === finishedWork) return !0;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return !0;
}
function markRootUpdated(root, updatedLanes) {
  root.pendingLanes |= updatedLanes;
  268435456 !== updatedLanes &&
    ((root.suspendedLanes = 0), (root.pingedLanes = 0));
  enableInfiniteRenderLoopDetection &&
    (executionContext & 2
      ? (workInProgressRootDidIncludeRecursiveRenderUpdate = !0)
      : executionContext & 4 && (didIncludeCommitPhaseUpdate = !0),
    throwIfInfiniteUpdateLoopDetected());
}
function markRootSuspended(root, suspendedLanes, spawnedLane) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes;
  for (
    var expirationTimes = root.expirationTimes, lanes = suspendedLanes;
    0 < lanes;

  ) {
    var index$5 = 31 - clz32(lanes),
      lane = 1 << index$5;
    expirationTimes[index$5] = -1;
    lanes &= ~lane;
  }
  0 !== spawnedLane &&
    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
}
function batchedUpdates$1(fn, a) {
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  try {
    return fn(a);
  } finally {
    (executionContext = prevExecutionContext),
      0 === executionContext &&
        ((workInProgressRootRenderTargetTime = now$1() + 500),
        flushSyncWorkAcrossRoots_impl(!0));
  }
}
function flushSync$1(fn) {
  null !== rootWithPendingPassiveEffects &&
    0 === rootWithPendingPassiveEffects.tag &&
    0 === (executionContext & 6) &&
    flushPassiveEffects();
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  var prevTransition = ReactCurrentBatchConfig$1.transition,
    previousPriority = currentUpdatePriority;
  try {
    if (
      ((ReactCurrentBatchConfig$1.transition = null),
      (currentUpdatePriority = 2),
      fn)
    )
      return fn();
  } finally {
    (currentUpdatePriority = previousPriority),
      (ReactCurrentBatchConfig$1.transition = prevTransition),
      (executionContext = prevExecutionContext),
      0 === (executionContext & 6) && flushSyncWorkAcrossRoots_impl(!1);
  }
}
function resetWorkInProgressStack() {
  if (null !== workInProgress) {
    if (0 === workInProgressSuspendedReason)
      var interruptedWork = workInProgress.return;
    else
      (interruptedWork = workInProgress),
        resetContextDependencies(),
        resetHooksOnUnwind(interruptedWork),
        (thenableState$1 = null),
        (thenableIndexCounter$1 = 0),
        (interruptedWork = workInProgress);
    for (; null !== interruptedWork; )
      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
        (interruptedWork = interruptedWork.return);
    workInProgress = null;
  }
}
function prepareFreshStack(root, lanes) {
  root.finishedWork = null;
  root.finishedLanes = 0;
  var timeoutHandle = root.timeoutHandle;
  -1 !== timeoutHandle &&
    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
  timeoutHandle = root.cancelPendingCommit;
  null !== timeoutHandle &&
    ((root.cancelPendingCommit = null), timeoutHandle());
  resetWorkInProgressStack();
  workInProgressRoot = root;
  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
  workInProgressRootRenderLanes = lanes;
  workInProgressSuspendedReason = 0;
  workInProgressThrownValue = null;
  workInProgressRootDidAttachPingListener = !1;
  workInProgressRootExitStatus = 0;
  workInProgressRootFatalError = null;
  workInProgressDeferredLane =
    workInProgressRootPingedLanes =
    workInProgressRootInterleavedUpdatedLanes =
    workInProgressRootSkippedLanes =
      0;
  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
    null;
  workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
  0 === (root.current.mode & 32) && 0 !== (lanes & 8) && (lanes |= lanes & 32);
  var allEntangledLanes = root.entangledLanes;
  if (0 !== allEntangledLanes)
    for (
      root = root.entanglements, allEntangledLanes &= lanes;
      0 < allEntangledLanes;

    ) {
      var index$3 = 31 - clz32(allEntangledLanes),
        lane = 1 << index$3;
      lanes |= root[index$3];
      allEntangledLanes &= ~lane;
    }
  entangledRenderLanes = lanes;
  finishQueueingConcurrentUpdates();
  return timeoutHandle;
}
function handleThrow(root, thrownValue) {
  currentlyRenderingFiber$1 = null;
  ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
  ReactCurrentOwner.current = null;
  thrownValue === SuspenseException
    ? ((thrownValue = getSuspendedThenable()),
      (workInProgressSuspendedReason =
        shouldRemainOnPreviousScreen() &&
        0 === (workInProgressRootSkippedLanes & 134217727) &&
        0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)
          ? 2
          : 3))
    : thrownValue === SuspenseyCommitException
    ? ((thrownValue = getSuspendedThenable()),
      (workInProgressSuspendedReason = 4))
    : (workInProgressSuspendedReason =
        thrownValue === SelectiveHydrationException
          ? 8
          : null !== thrownValue &&
            "object" === typeof thrownValue &&
            "function" === typeof thrownValue.then
          ? 6
          : 1);
  workInProgressThrownValue = thrownValue;
  root = workInProgress;
  if (null === root)
    (workInProgressRootExitStatus = 1),
      (workInProgressRootFatalError = thrownValue);
  else if (
    (root.mode & 2 && stopProfilerTimerIfRunningAndRecordDelta(root, !0),
    enableSchedulingProfiler)
  )
    switch ((markComponentRenderStopped(), workInProgressSuspendedReason)) {
      case 1:
        enableSchedulingProfiler &&
          null !== injectedProfilingHooks &&
          "function" === typeof injectedProfilingHooks.markComponentErrored &&
          injectedProfilingHooks.markComponentErrored(
            root,
            thrownValue,
            workInProgressRootRenderLanes
          );
        break;
      case 2:
      case 3:
      case 6:
      case 7:
        enableSchedulingProfiler &&
          null !== injectedProfilingHooks &&
          "function" === typeof injectedProfilingHooks.markComponentSuspended &&
          injectedProfilingHooks.markComponentSuspended(
            root,
            thrownValue,
            workInProgressRootRenderLanes
          );
    }
}
function shouldRemainOnPreviousScreen() {
  var handler = suspenseHandlerStackCursor.current;
  return null === handler
    ? !0
    : (workInProgressRootRenderLanes & 4194176) ===
      workInProgressRootRenderLanes
    ? null === shellBoundary
      ? !0
      : !1
    : (workInProgressRootRenderLanes & 62914560) ===
        workInProgressRootRenderLanes ||
      0 !== (workInProgressRootRenderLanes & 536870912)
    ? handler === shellBoundary
    : !1;
}
function pushDispatcher() {
  var prevDispatcher = ReactCurrentDispatcher.current;
  ReactCurrentDispatcher.current = ContextOnlyDispatcher;
  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
}
function pushCacheDispatcher() {
  var prevCacheDispatcher = ReactCurrentCache.current;
  ReactCurrentCache.current = DefaultCacheDispatcher;
  return prevCacheDispatcher;
}
function renderDidSuspendDelayIfPossible() {
  workInProgressRootExitStatus = 4;
  (0 === (workInProgressRootSkippedLanes & 134217727) &&
    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
    null === workInProgressRoot ||
    markRootSuspended(
      workInProgressRoot,
      workInProgressRootRenderLanes,
      workInProgressDeferredLane
    );
}
function renderRootSync(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevCacheDispatcher = pushCacheDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
    if (isDevToolsPresent) {
      var memoizedUpdaters = root.memoizedUpdaters;
      0 < memoizedUpdaters.size &&
        (restorePendingUpdaters(root, workInProgressRootRenderLanes),
        memoizedUpdaters.clear());
      movePendingFibersToMemoized(root, lanes);
    }
    workInProgressTransitions = getTransitionsForLanes(root, lanes);
    prepareFreshStack(root, lanes);
  }
  enableSchedulingProfiler && markRenderStarted(lanes);
  lanes = !1;
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        memoizedUpdaters = workInProgress;
        var thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
          case 8:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          case 3:
          case 2:
            lanes ||
              null !== suspenseHandlerStackCursor.current ||
              (lanes = !0);
          default:
            (workInProgressSuspendedReason = 0),
              (workInProgressThrownValue = null),
              throwAndUnwindWorkLoop(root, memoizedUpdaters, thrownValue);
        }
      }
      workLoopSync();
      break;
    } catch (thrownValue$202) {
      handleThrow(root, thrownValue$202);
    }
  while (1);
  lanes && root.shellSuspendCounter++;
  resetContextDependencies();
  executionContext = prevExecutionContext;
  ReactCurrentDispatcher.current = prevDispatcher;
  ReactCurrentCache.current = prevCacheDispatcher;
  if (null !== workInProgress) throw Error(formatProdErrorMessage(261));
  enableSchedulingProfiler && markRenderStopped();
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function renderRootConcurrent(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevCacheDispatcher = pushCacheDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes) {
    if (isDevToolsPresent) {
      var memoizedUpdaters = root.memoizedUpdaters;
      0 < memoizedUpdaters.size &&
        (restorePendingUpdaters(root, workInProgressRootRenderLanes),
        memoizedUpdaters.clear());
      movePendingFibersToMemoized(root, lanes);
    }
    workInProgressTransitions = getTransitionsForLanes(root, lanes);
    workInProgressRootRenderTargetTime = now$1() + 500;
    prepareFreshStack(root, lanes);
  }
  enableSchedulingProfiler && markRenderStarted(lanes);
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress)
        b: switch (
          ((lanes = workInProgress),
          (memoizedUpdaters = workInProgressThrownValue),
          workInProgressSuspendedReason)
        ) {
          case 1:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, memoizedUpdaters);
            break;
          case 2:
            if (isThenableResolved(memoizedUpdaters)) {
              workInProgressSuspendedReason = 0;
              workInProgressThrownValue = null;
              replaySuspendedUnitOfWork(lanes);
              break;
            }
            lanes = function () {
              2 === workInProgressSuspendedReason &&
                workInProgressRoot === root &&
                (workInProgressSuspendedReason = 7);
              ensureRootIsScheduled(root);
            };
            memoizedUpdaters.then(lanes, lanes);
            break a;
          case 3:
            workInProgressSuspendedReason = 7;
            break a;
          case 4:
            workInProgressSuspendedReason = 5;
            break a;
          case 7:
            isThenableResolved(memoizedUpdaters)
              ? ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                replaySuspendedUnitOfWork(lanes))
              : ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                throwAndUnwindWorkLoop(root, lanes, memoizedUpdaters));
            break;
          case 5:
            switch (workInProgress.tag) {
              case 5:
              case 26:
              case 27:
                lanes = workInProgress;
                workInProgressSuspendedReason = 0;
                workInProgressThrownValue = null;
                var sibling = lanes.sibling;
                if (null !== sibling) workInProgress = sibling;
                else {
                  var returnFiber = lanes.return;
                  null !== returnFiber
                    ? ((workInProgress = returnFiber),
                      completeUnitOfWork(returnFiber))
                    : (workInProgress = null);
                }
                break b;
            }
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, memoizedUpdaters);
            break;
          case 6:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            throwAndUnwindWorkLoop(root, lanes, memoizedUpdaters);
            break;
          case 8:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          default:
            throw Error(formatProdErrorMessage(462));
        }
      workLoopConcurrent();
      break;
    } catch (thrownValue$204) {
      handleThrow(root, thrownValue$204);
    }
  while (1);
  resetContextDependencies();
  ReactCurrentDispatcher.current = prevDispatcher;
  ReactCurrentCache.current = prevCacheDispatcher;
  executionContext = prevExecutionContext;
  if (null !== workInProgress)
    return (
      enableSchedulingProfiler &&
        enableSchedulingProfiler &&
        null !== injectedProfilingHooks &&
        "function" === typeof injectedProfilingHooks.markRenderYielded &&
        injectedProfilingHooks.markRenderYielded(),
      0
    );
  enableSchedulingProfiler && markRenderStopped();
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopConcurrent() {
  for (; null !== workInProgress && !shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  var current = unitOfWork.alternate;
  0 !== (unitOfWork.mode & 2)
    ? (startProfilerTimer(unitOfWork),
      (current = beginWork(current, unitOfWork, entangledRenderLanes)),
      stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, !0))
    : (current = beginWork(current, unitOfWork, entangledRenderLanes));
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === current
    ? completeUnitOfWork(unitOfWork)
    : (workInProgress = current);
  ReactCurrentOwner.current = null;
}
function replaySuspendedUnitOfWork(unitOfWork) {
  var current = unitOfWork.alternate,
    isProfilingMode = 0 !== (unitOfWork.mode & 2);
  isProfilingMode && startProfilerTimer(unitOfWork);
  switch (unitOfWork.tag) {
    case 2:
      unitOfWork.tag = 0;
    case 15:
    case 0:
      var Component = unitOfWork.type,
        unresolvedProps = unitOfWork.pendingProps;
      unresolvedProps =
        unitOfWork.elementType === Component
          ? unresolvedProps
          : resolveDefaultProps(Component, unresolvedProps);
      var context = isContextProvider(Component)
        ? previousContext
        : contextStackCursor.current;
      context = getMaskedContext(unitOfWork, context);
      current = replayFunctionComponent(
        current,
        unitOfWork,
        unresolvedProps,
        Component,
        context,
        workInProgressRootRenderLanes
      );
      break;
    case 11:
      Component = unitOfWork.type.render;
      unresolvedProps = unitOfWork.pendingProps;
      unresolvedProps =
        unitOfWork.elementType === Component
          ? unresolvedProps
          : resolveDefaultProps(Component, unresolvedProps);
      current = replayFunctionComponent(
        current,
        unitOfWork,
        unresolvedProps,
        Component,
        unitOfWork.ref,
        workInProgressRootRenderLanes
      );
      break;
    case 5:
      resetHooksOnUnwind(unitOfWork);
    default:
      unwindInterruptedWork(current, unitOfWork),
        (unitOfWork = workInProgress =
          resetWorkInProgress(unitOfWork, entangledRenderLanes)),
        (current = beginWork(current, unitOfWork, entangledRenderLanes));
  }
  isProfilingMode && stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, !0);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === current
    ? completeUnitOfWork(unitOfWork)
    : (workInProgress = current);
  ReactCurrentOwner.current = null;
}
function throwAndUnwindWorkLoop(root, unitOfWork, thrownValue) {
  resetContextDependencies();
  resetHooksOnUnwind(unitOfWork);
  thenableState$1 = null;
  thenableIndexCounter$1 = 0;
  var returnFiber = unitOfWork.return;
  try {
    if (
      throwException(
        root,
        returnFiber,
        unitOfWork,
        thrownValue,
        workInProgressRootRenderLanes
      )
    ) {
      workInProgressRootExitStatus = 1;
      workInProgressRootFatalError = thrownValue;
      workInProgress = null;
      return;
    }
  } catch (error) {
    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
    workInProgressRootExitStatus = 1;
    workInProgressRootFatalError = thrownValue;
    workInProgress = null;
    return;
  }
  if (unitOfWork.flags & 32768)
    a: {
      root = unitOfWork;
      do {
        unitOfWork = unwindWork(root.alternate, root);
        if (null !== unitOfWork) {
          unitOfWork.flags &= 32767;
          workInProgress = unitOfWork;
          break a;
        }
        if (0 !== (root.mode & 2)) {
          stopProfilerTimerIfRunningAndRecordDelta(root, !1);
          unitOfWork = root.actualDuration;
          for (thrownValue = root.child; null !== thrownValue; )
            (unitOfWork += thrownValue.actualDuration),
              (thrownValue = thrownValue.sibling);
          root.actualDuration = unitOfWork;
        }
        root = root.return;
        null !== root &&
          ((root.flags |= 32768),
          (root.subtreeFlags = 0),
          (root.deletions = null));
        workInProgress = root;
      } while (null !== root);
      workInProgressRootExitStatus = 6;
      workInProgress = null;
    }
  else completeUnitOfWork(unitOfWork);
}
function completeUnitOfWork(unitOfWork) {
  var completedWork = unitOfWork;
  do {
    var current = completedWork.alternate;
    unitOfWork = completedWork.return;
    0 === (completedWork.mode & 2)
      ? (current = completeWork(current, completedWork, entangledRenderLanes))
      : (startProfilerTimer(completedWork),
        (current = completeWork(current, completedWork, entangledRenderLanes)),
        stopProfilerTimerIfRunningAndRecordDelta(completedWork, !1));
    if (null !== current) {
      workInProgress = current;
      return;
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
}
function commitRoot(
  root,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  spawnedLane
) {
  var previousUpdateLanePriority = currentUpdatePriority,
    prevTransition = ReactCurrentBatchConfig$1.transition;
  try {
    (ReactCurrentBatchConfig$1.transition = null),
      (currentUpdatePriority = 2),
      commitRootImpl(
        root,
        recoverableErrors,
        transitions,
        didIncludeRenderPhaseUpdate,
        previousUpdateLanePriority,
        spawnedLane
      );
  } finally {
    (ReactCurrentBatchConfig$1.transition = prevTransition),
      (currentUpdatePriority = previousUpdateLanePriority);
  }
  return null;
}
function commitRootImpl(
  root,
  recoverableErrors,
  transitions,
  didIncludeRenderPhaseUpdate,
  renderPriorityLevel,
  spawnedLane
) {
  do flushPassiveEffects();
  while (null !== rootWithPendingPassiveEffects);
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
  var finishedWork = root.finishedWork,
    lanes = root.finishedLanes;
  enableSchedulingProfiler &&
    enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markCommitStarted &&
    injectedProfilingHooks.markCommitStarted(lanes);
  if (null === finishedWork)
    return enableSchedulingProfiler && markCommitStopped(), null;
  root.finishedWork = null;
  root.finishedLanes = 0;
  if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
  root.callbackNode = null;
  root.callbackPriority = 0;
  root.cancelPendingCommit = null;
  var remainingLanes = finishedWork.lanes | finishedWork.childLanes;
  remainingLanes |= concurrentlyUpdatedLanes;
  markRootFinished(root, remainingLanes, spawnedLane);
  didIncludeCommitPhaseUpdate = !1;
  root === workInProgressRoot &&
    ((workInProgress = workInProgressRoot = null),
    (workInProgressRootRenderLanes = 0));
  (0 === (finishedWork.subtreeFlags & 10256) &&
    0 === (finishedWork.flags & 10256)) ||
    rootDoesHavePassiveEffects ||
    ((rootDoesHavePassiveEffects = !0),
    (pendingPassiveEffectsRemainingLanes = remainingLanes),
    (pendingPassiveTransitions = transitions),
    scheduleCallback(NormalPriority$1, function () {
      flushPassiveEffects();
      return null;
    }));
  transitions = 0 !== (finishedWork.flags & 15990);
  if (0 !== (finishedWork.subtreeFlags & 15990) || transitions) {
    transitions = ReactCurrentBatchConfig$1.transition;
    ReactCurrentBatchConfig$1.transition = null;
    spawnedLane = currentUpdatePriority;
    currentUpdatePriority = 2;
    var prevExecutionContext = executionContext;
    executionContext |= 4;
    ReactCurrentOwner.current = null;
    var shouldFireAfterActiveInstanceBlur$208 = commitBeforeMutationEffects(
      root,
      finishedWork
    );
    commitTime = now();
    enableProfilerNestedUpdateScheduledHook &&
      (rootCommittingMutationOrLayoutEffects = root);
    commitMutationEffects(root, finishedWork, lanes);
    shouldFireAfterActiveInstanceBlur$208 &&
      ((_enabled = !0),
      dispatchAfterDetachedBlur(selectionInformation.focusedElem),
      (_enabled = !1));
    restoreSelection(selectionInformation);
    _enabled = !!eventsEnabled;
    selectionInformation = eventsEnabled = null;
    root.current = finishedWork;
    enableSchedulingProfiler &&
      enableSchedulingProfiler &&
      null !== injectedProfilingHooks &&
      "function" === typeof injectedProfilingHooks.markLayoutEffectsStarted &&
      injectedProfilingHooks.markLayoutEffectsStarted(lanes);
    commitLayoutEffects(finishedWork, root, lanes);
    enableSchedulingProfiler &&
      enableSchedulingProfiler &&
      null !== injectedProfilingHooks &&
      "function" === typeof injectedProfilingHooks.markLayoutEffectsStopped &&
      injectedProfilingHooks.markLayoutEffectsStopped();
    enableProfilerNestedUpdateScheduledHook &&
      (rootCommittingMutationOrLayoutEffects = null);
    requestPaint();
    executionContext = prevExecutionContext;
    currentUpdatePriority = spawnedLane;
    ReactCurrentBatchConfig$1.transition = transitions;
  } else (root.current = finishedWork), (commitTime = now());
  rootDoesHavePassiveEffects
    ? ((rootDoesHavePassiveEffects = !1),
      (rootWithPendingPassiveEffects = root),
      (pendingPassiveEffectsLanes = lanes))
    : releaseRootPooledCache(root, remainingLanes);
  remainingLanes = root.pendingLanes;
  0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
  onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
  isDevToolsPresent && root.memoizedUpdaters.clear();
  ensureRootIsScheduled(root);
  if (null !== recoverableErrors)
    for (
      renderPriorityLevel = root.onRecoverableError, finishedWork = 0;
      finishedWork < recoverableErrors.length;
      finishedWork++
    )
      (remainingLanes = recoverableErrors[finishedWork]),
        (transitions = {
          digest: remainingLanes.digest,
          componentStack: remainingLanes.stack
        }),
        renderPriorityLevel(remainingLanes.value, transitions);
  if (hasUncaughtError)
    throw (
      ((hasUncaughtError = !1),
      (root = firstUncaughtError),
      (firstUncaughtError = null),
      root)
    );
  0 !== (pendingPassiveEffectsLanes & 3) &&
    0 !== root.tag &&
    flushPassiveEffects();
  remainingLanes = root.pendingLanes;
  (enableInfiniteRenderLoopDetection &&
    (didIncludeRenderPhaseUpdate || didIncludeCommitPhaseUpdate)) ||
  (0 !== (lanes & 4194218) && 0 !== (remainingLanes & SyncUpdateLanes))
    ? ((nestedUpdateScheduled = !0),
      root === rootWithNestedUpdates
        ? nestedUpdateCount++
        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root)))
    : (nestedUpdateCount = 0);
  flushSyncWorkAcrossRoots_impl(!1);
  enableSchedulingProfiler && markCommitStopped();
  if (enableTransitionTracing) {
    var prevRootTransitionCallbacks = root.transitionCallbacks;
    null !== prevRootTransitionCallbacks &&
      schedulePostPaintCallback(function (endTime) {
        var prevPendingTransitionCallbacks = currentPendingTransitionCallbacks;
        null !== prevPendingTransitionCallbacks
          ? ((currentPendingTransitionCallbacks = null),
            scheduleCallback(IdlePriority, function () {
              processTransitionCallbacks(
                prevPendingTransitionCallbacks,
                endTime,
                prevRootTransitionCallbacks
              );
            }))
          : (currentEndTime = endTime);
      });
  }
  return null;
}
function releaseRootPooledCache(root, remainingLanes) {
  0 === (root.pooledCacheLanes &= remainingLanes) &&
    ((remainingLanes = root.pooledCache),
    null != remainingLanes &&
      ((root.pooledCache = null), releaseCache(remainingLanes)));
}
function flushPassiveEffects() {
  if (null !== rootWithPendingPassiveEffects) {
    var root$209 = rootWithPendingPassiveEffects,
      remainingLanes = pendingPassiveEffectsRemainingLanes;
    pendingPassiveEffectsRemainingLanes = 0;
    var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes);
    renderPriority = 32 > renderPriority ? 32 : renderPriority;
    var prevTransition = ReactCurrentBatchConfig$1.transition,
      previousPriority = currentUpdatePriority;
    try {
      return (
        (ReactCurrentBatchConfig$1.transition = null),
        (currentUpdatePriority = renderPriority),
        flushPassiveEffectsImpl()
      );
    } finally {
      (currentUpdatePriority = previousPriority),
        (ReactCurrentBatchConfig$1.transition = prevTransition),
        releaseRootPooledCache(root$209, remainingLanes);
    }
  }
  return !1;
}
function enqueuePendingPassiveProfilerEffect(fiber) {
  pendingPassiveProfilerEffects.push(fiber);
  rootDoesHavePassiveEffects ||
    ((rootDoesHavePassiveEffects = !0),
    scheduleCallback(NormalPriority$1, function () {
      flushPassiveEffects();
      return null;
    }));
}
function flushPassiveEffectsImpl() {
  if (null === rootWithPendingPassiveEffects) return !1;
  var transitions = pendingPassiveTransitions;
  pendingPassiveTransitions = null;
  var root = rootWithPendingPassiveEffects,
    lanes = pendingPassiveEffectsLanes;
  rootWithPendingPassiveEffects = null;
  pendingPassiveEffectsLanes = 0;
  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
  enableSchedulingProfiler &&
    enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markPassiveEffectsStarted &&
    injectedProfilingHooks.markPassiveEffectsStarted(lanes);
  var prevExecutionContext = executionContext;
  executionContext |= 4;
  commitPassiveUnmountOnFiber(root.current);
  commitPassiveMountOnFiber(root, root.current, lanes, transitions);
  transitions = pendingPassiveProfilerEffects;
  pendingPassiveProfilerEffects = [];
  for (lanes = 0; lanes < transitions.length; lanes++)
    commitPassiveEffectDurations(root, transitions[lanes]);
  enableSchedulingProfiler &&
    enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markPassiveEffectsStopped &&
    injectedProfilingHooks.markPassiveEffectsStopped();
  executionContext = prevExecutionContext;
  flushSyncWorkAcrossRoots_impl(!1);
  if (enableTransitionTracing) {
    var prevPendingTransitionCallbacks = currentPendingTransitionCallbacks,
      prevRootTransitionCallbacks = root.transitionCallbacks,
      prevEndTime = currentEndTime;
    null !== prevPendingTransitionCallbacks &&
      null !== prevRootTransitionCallbacks &&
      null !== prevEndTime &&
      ((currentEndTime = currentPendingTransitionCallbacks = null),
      scheduleCallback(IdlePriority, function () {
        processTransitionCallbacks(
          prevPendingTransitionCallbacks,
          prevEndTime,
          prevRootTransitionCallbacks
        );
      }));
  }
  if (injectedHook && "function" === typeof injectedHook.onPostCommitFiberRoot)
    try {
      injectedHook.onPostCommitFiberRoot(rendererID, root);
    } catch (err) {}
  root = root.current.stateNode;
  root.effectDuration = 0;
  root.passiveEffectDuration = 0;
  return !0;
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber, sourceFiber, 2);
  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
  null !== rootFiber &&
    (markRootUpdated(rootFiber, 2), ensureRootIsScheduled(rootFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (; null !== nearestMountedAncestor; ) {
      if (3 === nearestMountedAncestor.tag) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (1 === nearestMountedAncestor.tag) {
        var instance = nearestMountedAncestor.stateNode;
        if (
          "function" ===
            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
          ("function" === typeof instance.componentDidCatch &&
            (null === legacyErrorBoundariesThatAlreadyFailed ||
              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
        ) {
          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
          sourceFiber = createClassErrorUpdate(
            nearestMountedAncestor,
            sourceFiber,
            2
          );
          nearestMountedAncestor = enqueueUpdate(
            nearestMountedAncestor,
            sourceFiber,
            2
          );
          null !== nearestMountedAncestor &&
            (markRootUpdated(nearestMountedAncestor, 2),
            ensureRootIsScheduled(nearestMountedAncestor));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function attachPingListener(root, wakeable, lanes) {
  var pingCache = root.pingCache;
  if (null === pingCache) {
    pingCache = root.pingCache = new PossiblyWeakMap();
    var threadIDs = new Set();
    pingCache.set(wakeable, threadIDs);
  } else
    (threadIDs = pingCache.get(wakeable)),
      void 0 === threadIDs &&
        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
  threadIDs.has(lanes) ||
    ((workInProgressRootDidAttachPingListener = !0),
    threadIDs.add(lanes),
    (pingCache = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
    isDevToolsPresent && restorePendingUpdaters(root, lanes),
    wakeable.then(pingCache, pingCache));
}
function pingSuspendedRoot(root, wakeable, pingedLanes) {
  var pingCache = root.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
  enableInfiniteRenderLoopDetection &&
    (executionContext & 2
      ? (workInProgressRootDidIncludeRecursiveRenderUpdate = !0)
      : executionContext & 4 && (didIncludeCommitPhaseUpdate = !0),
    throwIfInfiniteUpdateLoopDetected());
  workInProgressRoot === root &&
    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
    (4 === workInProgressRootExitStatus ||
    (3 === workInProgressRootExitStatus &&
      (workInProgressRootRenderLanes & 62914560) ===
        workInProgressRootRenderLanes &&
      300 > now$1() - globalMostRecentFallbackTime)
      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
      : (workInProgressRootPingedLanes |= pingedLanes));
  ensureRootIsScheduled(root);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  0 === retryLane &&
    (retryLane = 0 === (boundaryFiber.mode & 1) ? 2 : claimNextRetryLane());
  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
  null !== boundaryFiber &&
    (markRootUpdated(boundaryFiber, retryLane),
    ensureRootIsScheduled(boundaryFiber));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  var suspenseState = boundaryFiber.memoizedState,
    retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = 0;
  switch (boundaryFiber.tag) {
    case 13:
      var retryCache = boundaryFiber.stateNode;
      var suspenseState = boundaryFiber.memoizedState;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      break;
    case 19:
      retryCache = boundaryFiber.stateNode;
      break;
    case 22:
      retryCache = boundaryFiber.stateNode._retryCache;
      break;
    default:
      throw Error(formatProdErrorMessage(314));
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function throwIfInfiniteUpdateLoopDetected() {
  if (50 < nestedUpdateCount)
    throw (
      ((nestedUpdateCount = 0),
      (rootWithNestedUpdates = null),
      enableInfiniteRenderLoopDetection &&
        executionContext & 2 &&
        null !== workInProgressRoot &&
        (workInProgressRoot.errorRecoveryDisabledLanes |=
          workInProgressRootRenderLanes),
      Error(formatProdErrorMessage(185)))
    );
}
var beginWork;
beginWork = function (current, workInProgress, renderLanes) {
  if (null !== current)
    if (
      current.memoizedProps !== workInProgress.pendingProps ||
      didPerformWorkStackCursor.current
    )
      didReceiveUpdate = !0;
    else {
      if (
        !checkScheduledUpdateOrContext(current, renderLanes) &&
        0 === (workInProgress.flags & 128)
      )
        return (
          (didReceiveUpdate = !1),
          attemptEarlyBailoutIfNoScheduledUpdate(
            current,
            workInProgress,
            renderLanes
          )
        );
      didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
    }
  else
    (didReceiveUpdate = !1),
      isHydrating &&
        0 !== (workInProgress.flags & 1048576) &&
        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
    case 2:
      var Component = workInProgress.type;
      resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress);
      current = workInProgress.pendingProps;
      var context = getMaskedContext(
        workInProgress,
        contextStackCursor.current
      );
      prepareToReadContext(workInProgress, renderLanes);
      enableSchedulingProfiler && markComponentRenderStarted(workInProgress);
      current = renderWithHooks(
        null,
        workInProgress,
        Component,
        current,
        context,
        renderLanes
      );
      Component = checkDidRenderIdHook();
      enableSchedulingProfiler && markComponentRenderStopped();
      workInProgress.flags |= 1;
      workInProgress.tag = 0;
      isHydrating && Component && pushMaterializedTreeId(workInProgress);
      reconcileChildren(null, workInProgress, current, renderLanes);
      workInProgress = workInProgress.child;
      return workInProgress;
    case 16:
      Component = workInProgress.elementType;
      a: {
        resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress);
        current = workInProgress.pendingProps;
        context = Component._init;
        Component = context(Component._payload);
        workInProgress.type = Component;
        context = workInProgress.tag = resolveLazyComponentTag(Component);
        current = resolveDefaultProps(Component, current);
        switch (context) {
          case 0:
            workInProgress = updateFunctionComponent(
              null,
              workInProgress,
              Component,
              current,
              renderLanes
            );
            break a;
          case 1:
            workInProgress = updateClassComponent(
              null,
              workInProgress,
              Component,
              current,
              renderLanes
            );
            break a;
          case 11:
            workInProgress = updateForwardRef(
              null,
              workInProgress,
              Component,
              current,
              renderLanes
            );
            break a;
          case 14:
            workInProgress = updateMemoComponent(
              null,
              workInProgress,
              Component,
              resolveDefaultProps(Component.type, current),
              renderLanes
            );
            break a;
        }
        throw Error(formatProdErrorMessage(306, Component, ""));
      }
      return workInProgress;
    case 0:
      return (
        (Component = workInProgress.type),
        (context = workInProgress.pendingProps),
        (context =
          workInProgress.elementType === Component
            ? context
            : resolveDefaultProps(Component, context)),
        updateFunctionComponent(
          current,
          workInProgress,
          Component,
          context,
          renderLanes
        )
      );
    case 1:
      return (
        (Component = workInProgress.type),
        (context = workInProgress.pendingProps),
        (context =
          workInProgress.elementType === Component
            ? context
            : resolveDefaultProps(Component, context)),
        updateClassComponent(
          current,
          workInProgress,
          Component,
          context,
          renderLanes
        )
      );
    case 3:
      a: {
        pushHostRootContext(workInProgress);
        if (null === current) throw Error(formatProdErrorMessage(387));
        context = workInProgress.pendingProps;
        var prevState = workInProgress.memoizedState;
        Component = prevState.element;
        cloneUpdateQueue(current, workInProgress);
        processUpdateQueue(workInProgress, context, null, renderLanes);
        var nextState = workInProgress.memoizedState;
        enableTransitionTracing &&
          push(transitionStack, workInProgressTransitions);
        enableTransitionTracing && pushRootMarkerInstance(workInProgress);
        context = nextState.cache;
        pushProvider(workInProgress, CacheContext, context);
        context !== prevState.cache &&
          propagateContextChange(workInProgress, CacheContext, renderLanes);
        suspendIfUpdateReadFromEntangledAsyncAction();
        context = nextState.element;
        if (prevState.isDehydrated)
          if (
            ((prevState = {
              element: context,
              isDehydrated: !1,
              cache: nextState.cache
            }),
            (workInProgress.updateQueue.baseState = prevState),
            (workInProgress.memoizedState = prevState),
            workInProgress.flags & 256)
          ) {
            Component = createCapturedValueAtFiber(
              Error(formatProdErrorMessage(423)),
              workInProgress
            );
            workInProgress = mountHostRootWithoutHydrating(
              current,
              workInProgress,
              context,
              renderLanes,
              Component
            );
            break a;
          } else if (context !== Component) {
            Component = createCapturedValueAtFiber(
              Error(formatProdErrorMessage(424)),
              workInProgress
            );
            workInProgress = mountHostRootWithoutHydrating(
              current,
              workInProgress,
              context,
              renderLanes,
              Component
            );
            break a;
          } else
            for (
              nextHydratableInstance = getNextHydratable(
                workInProgress.stateNode.containerInfo.firstChild
              ),
                hydrationParentFiber = workInProgress,
                isHydrating = !0,
                hydrationErrors = null,
                rootOrSingletonContext = !0,
                renderLanes = mountChildFibers(
                  workInProgress,
                  null,
                  context,
                  renderLanes
                ),
                workInProgress.child = renderLanes;
              renderLanes;

            )
              (renderLanes.flags = (renderLanes.flags & -3) | 4096),
                (renderLanes = renderLanes.sibling);
        else {
          resetHydrationState();
          if (context === Component) {
            workInProgress = bailoutOnAlreadyFinishedWork(
              current,
              workInProgress,
              renderLanes
            );
            break a;
          }
          reconcileChildren(current, workInProgress, context, renderLanes);
        }
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 26:
      return (
        markRef(current, workInProgress),
        (renderLanes = workInProgress.memoizedState =
          getResource(
            workInProgress.type,
            null === current ? null : current.memoizedProps,
            workInProgress.pendingProps
          )),
        null !== current ||
          isHydrating ||
          null !== renderLanes ||
          ((renderLanes = workInProgress.type),
          (current = workInProgress.pendingProps),
          (Component = getOwnerDocumentFromRootContainer(
            rootInstanceStackCursor.current
          ).createElement(renderLanes)),
          (Component[internalInstanceKey] = workInProgress),
          (Component[internalPropsKey] = current),
          setInitialProperties(Component, renderLanes, current),
          markNodeAsHoistable(Component),
          (workInProgress.stateNode = Component)),
        null
      );
    case 27:
      return (
        pushHostContext(workInProgress),
        null === current &&
          isHydrating &&
          ((Component = workInProgress.stateNode =
            resolveSingletonInstance(
              workInProgress.type,
              workInProgress.pendingProps,
              rootInstanceStackCursor.current
            )),
          (hydrationParentFiber = workInProgress),
          (rootOrSingletonContext = !0),
          (nextHydratableInstance = getNextHydratable(Component.firstChild))),
        (Component = workInProgress.pendingProps.children),
        null !== current || isHydrating
          ? reconcileChildren(current, workInProgress, Component, renderLanes)
          : (workInProgress.child = reconcileChildFibers(
              workInProgress,
              null,
              Component,
              renderLanes
            )),
        markRef(current, workInProgress),
        workInProgress.child
      );
    case 5:
      return (
        pushHostContext(workInProgress),
        null === current &&
          isHydrating &&
          (((context = Component = nextHydratableInstance), context)
            ? tryHydrateInstance(workInProgress, context) ||
              (shouldClientRenderOnMismatch(workInProgress) &&
                throwOnHydrationMismatch(),
              (nextHydratableInstance = getNextHydratableSibling(context)),
              (prevState = hydrationParentFiber),
              nextHydratableInstance &&
              tryHydrateInstance(workInProgress, nextHydratableInstance)
                ? deleteHydratableInstance(prevState, context)
                : (insertNonHydratedInstance(
                    hydrationParentFiber,
                    workInProgress
                  ),
                  (isHydrating = !1),
                  (hydrationParentFiber = workInProgress),
                  (nextHydratableInstance = Component)))
            : (shouldClientRenderOnMismatch(workInProgress) &&
                throwOnHydrationMismatch(),
              insertNonHydratedInstance(hydrationParentFiber, workInProgress),
              (isHydrating = !1),
              (hydrationParentFiber = workInProgress),
              (nextHydratableInstance = Component))),
        (context = workInProgress.type),
        (prevState = workInProgress.pendingProps),
        (nextState = null !== current ? current.memoizedProps : null),
        (Component = prevState.children),
        shouldSetTextContent(context, prevState)
          ? (Component = null)
          : null !== nextState &&
            shouldSetTextContent(context, nextState) &&
            (workInProgress.flags |= 32),
        null !== workInProgress.memoizedState &&
          ((context = renderWithHooks(
            current,
            workInProgress,
            TransitionAwareHostComponent,
            null,
            null,
            renderLanes
          )),
          (HostTransitionContext._currentValue = context),
          enableLazyContextPropagation ||
            (didReceiveUpdate &&
              null !== current &&
              current.memoizedState.memoizedState !== context &&
              propagateContextChange(
                workInProgress,
                HostTransitionContext,
                renderLanes
              ))),
        markRef(current, workInProgress),
        reconcileChildren(current, workInProgress, Component, renderLanes),
        workInProgress.child
      );
    case 6:
      return (
        null === current &&
          isHydrating &&
          (((Component = "" !== workInProgress.pendingProps),
          (current = renderLanes = nextHydratableInstance),
          current && Component)
            ? tryHydrateText(workInProgress, current) ||
              (shouldClientRenderOnMismatch(workInProgress) &&
                throwOnHydrationMismatch(),
              (nextHydratableInstance = getNextHydratableSibling(current)),
              (Component = hydrationParentFiber),
              nextHydratableInstance &&
              tryHydrateText(workInProgress, nextHydratableInstance)
                ? deleteHydratableInstance(Component, current)
                : (insertNonHydratedInstance(
                    hydrationParentFiber,
                    workInProgress
                  ),
                  (isHydrating = !1),
                  (hydrationParentFiber = workInProgress),
                  (nextHydratableInstance = renderLanes)))
            : (shouldClientRenderOnMismatch(workInProgress) &&
                throwOnHydrationMismatch(),
              insertNonHydratedInstance(hydrationParentFiber, workInProgress),
              (isHydrating = !1),
              (hydrationParentFiber = workInProgress),
              (nextHydratableInstance = renderLanes))),
        null
      );
    case 13:
      return updateSuspenseComponent(current, workInProgress, renderLanes);
    case 4:
      return (
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        ),
        (Component = workInProgress.pendingProps),
        null === current
          ? (workInProgress.child = reconcileChildFibers(
              workInProgress,
              null,
              Component,
              renderLanes
            ))
          : reconcileChildren(current, workInProgress, Component, renderLanes),
        workInProgress.child
      );
    case 11:
      return (
        (Component = workInProgress.type),
        (context = workInProgress.pendingProps),
        (context =
          workInProgress.elementType === Component
            ? context
            : resolveDefaultProps(Component, context)),
        updateForwardRef(
          current,
          workInProgress,
          Component,
          context,
          renderLanes
        )
      );
    case 7:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps,
          renderLanes
        ),
        workInProgress.child
      );
    case 8:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 12:
      return (
        (workInProgress.flags |= 4),
        (Component = workInProgress.stateNode),
        (Component.effectDuration = 0),
        (Component.passiveEffectDuration = 0),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 10:
      a: {
        Component = enableRenderableContext
          ? workInProgress.type
          : workInProgress.type._context;
        context = workInProgress.pendingProps;
        prevState = workInProgress.memoizedProps;
        nextState = context.value;
        pushProvider(workInProgress, Component, nextState);
        if (!enableLazyContextPropagation && null !== prevState)
          if (objectIs(prevState.value, nextState)) {
            if (
              prevState.children === context.children &&
              !didPerformWorkStackCursor.current
            ) {
              workInProgress = bailoutOnAlreadyFinishedWork(
                current,
                workInProgress,
                renderLanes
              );
              break a;
            }
          } else propagateContextChange(workInProgress, Component, renderLanes);
        reconcileChildren(
          current,
          workInProgress,
          context.children,
          renderLanes
        );
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 9:
      return (
        (context = enableRenderableContext
          ? workInProgress.type._context
          : workInProgress.type),
        (Component = workInProgress.pendingProps.children),
        prepareToReadContext(workInProgress, renderLanes),
        (context = readContext(context)),
        enableSchedulingProfiler && markComponentRenderStarted(workInProgress),
        (Component = Component(context)),
        enableSchedulingProfiler && markComponentRenderStopped(),
        (workInProgress.flags |= 1),
        reconcileChildren(current, workInProgress, Component, renderLanes),
        workInProgress.child
      );
    case 14:
      return (
        (Component = workInProgress.type),
        (context = resolveDefaultProps(Component, workInProgress.pendingProps)),
        (context = resolveDefaultProps(Component.type, context)),
        updateMemoComponent(
          current,
          workInProgress,
          Component,
          context,
          renderLanes
        )
      );
    case 15:
      return updateSimpleMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 17:
      return (
        (Component = workInProgress.type),
        (context = workInProgress.pendingProps),
        (context =
          workInProgress.elementType === Component
            ? context
            : resolveDefaultProps(Component, context)),
        resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress),
        (workInProgress.tag = 1),
        isContextProvider(Component)
          ? ((current = !0), pushContextProvider(workInProgress))
          : (current = !1),
        prepareToReadContext(workInProgress, renderLanes),
        constructClassInstance(workInProgress, Component, context),
        mountClassInstance(workInProgress, Component, context, renderLanes),
        finishClassComponent(
          null,
          workInProgress,
          Component,
          !0,
          current,
          renderLanes
        )
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress, renderLanes);
    case 21:
      return (
        (Component = workInProgress.pendingProps.children),
        markRef(current, workInProgress),
        reconcileChildren(current, workInProgress, Component, renderLanes),
        workInProgress.child
      );
    case 22:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 23:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 24:
      return (
        prepareToReadContext(workInProgress, renderLanes),
        (Component = readContext(CacheContext)),
        null === current
          ? ((context = peekCacheFromPool()),
            null === context &&
              ((context = workInProgressRoot),
              (prevState = createCache()),
              (context.pooledCache = prevState),
              prevState.refCount++,
              null !== prevState && (context.pooledCacheLanes |= renderLanes),
              (context = prevState)),
            (workInProgress.memoizedState = {
              parent: Component,
              cache: context
            }),
            initializeUpdateQueue(workInProgress),
            pushProvider(workInProgress, CacheContext, context))
          : (0 !== (current.lanes & renderLanes) &&
              (cloneUpdateQueue(current, workInProgress),
              processUpdateQueue(workInProgress, null, null, renderLanes),
              suspendIfUpdateReadFromEntangledAsyncAction()),
            (context = current.memoizedState),
            (prevState = workInProgress.memoizedState),
            context.parent !== Component
              ? ((context = { parent: Component, cache: Component }),
                (workInProgress.memoizedState = context),
                0 === workInProgress.lanes &&
                  (workInProgress.memoizedState =
                    workInProgress.updateQueue.baseState =
                      context),
                pushProvider(workInProgress, CacheContext, Component))
              : ((Component = prevState.cache),
                pushProvider(workInProgress, CacheContext, Component),
                Component !== context.cache &&
                  propagateContextChange(
                    workInProgress,
                    CacheContext,
                    renderLanes
                  ))),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 25:
      if (enableTransitionTracing)
        return (
          enableTransitionTracing
            ? (null === current &&
                ((Component = enableTransitionTracing
                  ? transitionStack.current
                  : null),
                null !== Component &&
                  ((Component = {
                    tag: 1,
                    transitions: new Set(Component),
                    pendingBoundaries: null,
                    name: workInProgress.pendingProps.name,
                    aborts: null
                  }),
                  (workInProgress.stateNode = Component),
                  (workInProgress.flags |= 2048))),
              (Component = workInProgress.stateNode),
              null !== Component &&
                pushMarkerInstance(workInProgress, Component),
              reconcileChildren(
                current,
                workInProgress,
                workInProgress.pendingProps.children,
                renderLanes
              ),
              (workInProgress = workInProgress.child))
            : (workInProgress = null),
          workInProgress
        );
  }
  throw Error(formatProdErrorMessage(156, workInProgress.tag));
};
function restorePendingUpdaters(root, lanes) {
  isDevToolsPresent &&
    root.memoizedUpdaters.forEach(function (schedulingFiber) {
      addFiberToLanesMap(root, schedulingFiber, lanes);
    });
}
function scheduleCallback(priorityLevel, callback) {
  return scheduleCallback$3(priorityLevel, callback);
}
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
  this.actualDuration = 0;
  this.actualStartTime = -1;
  this.treeBaseDuration = this.selfBaseDuration = 0;
}
function createFiber(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function shouldConstruct(Component) {
  Component = Component.prototype;
  return !(!Component || !Component.isReactComponent);
}
function resolveLazyComponentTag(Component) {
  if ("function" === typeof Component)
    return shouldConstruct(Component) ? 1 : 0;
  if (void 0 !== Component && null !== Component) {
    Component = Component.$$typeof;
    if (Component === REACT_FORWARD_REF_TYPE) return 11;
    if (Component === REACT_MEMO_TYPE) return 14;
  }
  return 2;
}
function createWorkInProgress(current, pendingProps) {
  var workInProgress = current.alternate;
  null === workInProgress
    ? ((workInProgress = createFiber(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      )),
      (workInProgress.elementType = current.elementType),
      (workInProgress.type = current.type),
      (workInProgress.stateNode = current.stateNode),
      (workInProgress.alternate = current),
      (current.alternate = workInProgress))
    : ((workInProgress.pendingProps = pendingProps),
      (workInProgress.type = current.type),
      (workInProgress.flags = 0),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null),
      (workInProgress.actualDuration = 0),
      (workInProgress.actualStartTime = -1));
  workInProgress.flags = current.flags & 31457280;
  workInProgress.childLanes = current.childLanes;
  workInProgress.lanes = current.lanes;
  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress.dependencies =
    null === pendingProps
      ? null
      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;
  workInProgress.refCleanup = current.refCleanup;
  workInProgress.selfBaseDuration = current.selfBaseDuration;
  workInProgress.treeBaseDuration = current.treeBaseDuration;
  return workInProgress;
}
function resetWorkInProgress(workInProgress, renderLanes) {
  workInProgress.flags &= 31457282;
  var current = workInProgress.alternate;
  null === current
    ? ((workInProgress.childLanes = 0),
      (workInProgress.lanes = renderLanes),
      (workInProgress.child = null),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.memoizedProps = null),
      (workInProgress.memoizedState = null),
      (workInProgress.updateQueue = null),
      (workInProgress.dependencies = null),
      (workInProgress.stateNode = null),
      (workInProgress.selfBaseDuration = 0),
      (workInProgress.treeBaseDuration = 0))
    : ((workInProgress.childLanes = current.childLanes),
      (workInProgress.lanes = current.lanes),
      (workInProgress.child = current.child),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null),
      (workInProgress.memoizedProps = current.memoizedProps),
      (workInProgress.memoizedState = current.memoizedState),
      (workInProgress.updateQueue = current.updateQueue),
      (workInProgress.type = current.type),
      (renderLanes = current.dependencies),
      (workInProgress.dependencies =
        null === renderLanes
          ? null
          : {
              lanes: renderLanes.lanes,
              firstContext: renderLanes.firstContext
            }),
      (workInProgress.selfBaseDuration = current.selfBaseDuration),
      (workInProgress.treeBaseDuration = current.treeBaseDuration));
  return workInProgress;
}
function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes
) {
  var fiberTag = 2;
  owner = type;
  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
  else if ("string" === typeof type)
    fiberTag = isHostHoistableType(
      type,
      pendingProps,
      contextStackCursor$1.current
    )
      ? 26
      : "html" === type || "head" === type || "body" === type
      ? 27
      : 5;
  else
    a: switch (type) {
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
      case REACT_STRICT_MODE_TYPE:
        fiberTag = 8;
        mode |= 8;
        0 !== (mode & 1) &&
          ((mode |= 16),
          enableDO_NOT_USE_disableStrictPassiveEffect &&
            pendingProps.DO_NOT_USE_disableStrictPassiveEffect &&
            (mode |= 64));
        break;
      case REACT_PROFILER_TYPE:
        return (
          (type = createFiber(12, pendingProps, key, mode | 2)),
          (type.elementType = REACT_PROFILER_TYPE),
          (type.lanes = lanes),
          (type.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
          type
        );
      case REACT_SUSPENSE_TYPE:
        return (
          (type = createFiber(13, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_LIST_TYPE:
        return (
          (type = createFiber(19, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_OFFSCREEN_TYPE:
        return createFiberFromOffscreen(pendingProps, mode, lanes, key);
      case REACT_LEGACY_HIDDEN_TYPE:
        return createFiberFromLegacyHidden(pendingProps, mode, lanes, key);
      case REACT_SCOPE_TYPE:
        return (
          (pendingProps = createFiber(21, pendingProps, key, mode)),
          (pendingProps.type = type),
          (pendingProps.elementType = type),
          (pendingProps.lanes = lanes),
          pendingProps
        );
      case REACT_CACHE_TYPE:
        return (
          (type = createFiber(24, pendingProps, key, mode)),
          (type.elementType = REACT_CACHE_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_TRACING_MARKER_TYPE:
        if (enableTransitionTracing)
          return (
            (type = createFiber(25, pendingProps, key, mode)),
            (type.elementType = REACT_TRACING_MARKER_TYPE),
            (type.lanes = lanes),
            (type.stateNode = {
              tag: 1,
              transitions: null,
              pendingBoundaries: null,
              aborts: null,
              name: pendingProps.name
            }),
            type
          );
      case REACT_DEBUG_TRACING_MODE_TYPE:
        if (enableDebugTracing) {
          fiberTag = 8;
          mode |= 4;
          break;
        }
      default:
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_PROVIDER_TYPE:
              if (!enableRenderableContext) {
                fiberTag = 10;
                break a;
              }
            case REACT_CONTEXT_TYPE:
              fiberTag = enableRenderableContext ? 10 : 9;
              break a;
            case REACT_CONSUMER_TYPE:
              if (enableRenderableContext) {
                fiberTag = 9;
                break a;
              }
            case REACT_FORWARD_REF_TYPE:
              fiberTag = 11;
              break a;
            case REACT_MEMO_TYPE:
              fiberTag = 14;
              break a;
            case REACT_LAZY_TYPE:
              fiberTag = 16;
              owner = null;
              break a;
          }
        throw Error(
          formatProdErrorMessage(130, null == type ? type : typeof type, "")
        );
    }
  pendingProps = createFiber(fiberTag, pendingProps, key, mode);
  pendingProps.elementType = type;
  pendingProps.type = owner;
  pendingProps.lanes = lanes;
  return pendingProps;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiber(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
  pendingProps = createFiber(22, pendingProps, key, mode);
  pendingProps.elementType = REACT_OFFSCREEN_TYPE;
  pendingProps.lanes = lanes;
  var primaryChildInstance = {
    _visibility: 1,
    _pendingVisibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null,
    _current: null,
    detach: function () {
      return detachOffscreenInstance(primaryChildInstance);
    },
    attach: function () {
      return attachOffscreenInstance(primaryChildInstance);
    }
  };
  pendingProps.stateNode = primaryChildInstance;
  return pendingProps;
}
function createFiberFromLegacyHidden(pendingProps, mode, lanes, key) {
  pendingProps = createFiber(23, pendingProps, key, mode);
  pendingProps.elementType = REACT_LEGACY_HIDDEN_TYPE;
  pendingProps.lanes = lanes;
  var instance = {
    _visibility: 1,
    _pendingVisibility: 1,
    _pendingMarkers: null,
    _transitions: null,
    _retryCache: null,
    _current: null,
    detach: function () {
      return detachOffscreenInstance(instance);
    },
    attach: function () {
      return attachOffscreenInstance(instance);
    }
  };
  pendingProps.stateNode = instance;
  return pendingProps;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiber(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiber(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onRecoverableError,
  formState
) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.finishedWork =
    this.pingCache =
    this.current =
    this.pendingChildren =
      null;
  this.timeoutHandle = -1;
  this.callbackNode =
    this.next =
    this.pendingContext =
    this.context =
    this.cancelPendingCommit =
      null;
  this.callbackPriority = 0;
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes =
    this.shellSuspendCounter =
    this.errorRecoveryDisabledLanes =
    this.finishedLanes =
    this.expiredLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.hydrationCallbacks = null;
  this.formState = formState;
  this.incompleteTransitions = new Map();
  if (enableTransitionTracing)
    for (
      this.transitionCallbacks = null,
        containerInfo = this.transitionLanes = [],
        tag = 0;
      31 > tag;
      tag++
    )
      containerInfo.push(null);
  this.passiveEffectDuration = this.effectDuration = 0;
  this.memoizedUpdaters = new Set();
  containerInfo = this.pendingUpdatersLaneMap = [];
  for (tag = 0; 31 > tag; tag++) containerInfo.push(new Set());
}
function createFiberRoot(
  containerInfo,
  tag,
  hydrate,
  initialChildren,
  hydrationCallbacks,
  isStrictMode,
  concurrentUpdatesByDefaultOverride,
  identifierPrefix,
  onRecoverableError,
  transitionCallbacks,
  formState
) {
  containerInfo = new FiberRootNode(
    containerInfo,
    tag,
    hydrate,
    identifierPrefix,
    onRecoverableError,
    formState
  );
  containerInfo.hydrationCallbacks = hydrationCallbacks;
  enableTransitionTracing &&
    (containerInfo.transitionCallbacks = transitionCallbacks);
  1 === tag
    ? ((tag = 1),
      !0 === isStrictMode && (tag |= 24),
      concurrentUpdatesByDefaultOverride && (tag |= 32))
    : (tag = 0);
  isDevToolsPresent && (tag |= 2);
  isStrictMode = createFiber(3, null, null, tag);
  containerInfo.current = isStrictMode;
  isStrictMode.stateNode = containerInfo;
  concurrentUpdatesByDefaultOverride = createCache();
  concurrentUpdatesByDefaultOverride.refCount++;
  containerInfo.pooledCache = concurrentUpdatesByDefaultOverride;
  concurrentUpdatesByDefaultOverride.refCount++;
  isStrictMode.memoizedState = {
    element: initialChildren,
    isDehydrated: hydrate,
    cache: concurrentUpdatesByDefaultOverride
  };
  initializeUpdateQueue(isStrictMode);
  return containerInfo;
}
function createPortal$1(children, containerInfo, implementation) {
  var key =
    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: REACT_PORTAL_TYPE,
    key: null == key ? null : "" + key,
    children: children,
    containerInfo: containerInfo,
    implementation: implementation
  };
}
function getContextForSubtree(parentComponent) {
  if (!parentComponent) return emptyContextObject;
  parentComponent = parentComponent._reactInternals;
  a: {
    if (
      getNearestMountedFiber(parentComponent) !== parentComponent ||
      1 !== parentComponent.tag
    )
      throw Error(formatProdErrorMessage(170));
    var JSCompiler_inline_result = parentComponent;
    do {
      switch (JSCompiler_inline_result.tag) {
        case 3:
          JSCompiler_inline_result = JSCompiler_inline_result.stateNode.context;
          break a;
        case 1:
          if (isContextProvider(JSCompiler_inline_result.type)) {
            JSCompiler_inline_result =
              JSCompiler_inline_result.stateNode
                .__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      JSCompiler_inline_result = JSCompiler_inline_result.return;
    } while (null !== JSCompiler_inline_result);
    throw Error(formatProdErrorMessage(171));
  }
  if (1 === parentComponent.tag) {
    var Component = parentComponent.type;
    if (isContextProvider(Component))
      return processChildContext(
        parentComponent,
        Component,
        JSCompiler_inline_result
      );
  }
  return JSCompiler_inline_result;
}
function createHydrationContainer(
  initialChildren,
  callback,
  containerInfo,
  tag,
  hydrationCallbacks,
  isStrictMode,
  concurrentUpdatesByDefaultOverride,
  identifierPrefix,
  onRecoverableError,
  transitionCallbacks,
  formState
) {
  initialChildren = createFiberRoot(
    containerInfo,
    tag,
    !0,
    initialChildren,
    hydrationCallbacks,
    isStrictMode,
    concurrentUpdatesByDefaultOverride,
    identifierPrefix,
    onRecoverableError,
    transitionCallbacks,
    formState
  );
  initialChildren.context = getContextForSubtree(null);
  containerInfo = initialChildren.current;
  tag = requestUpdateLane(containerInfo);
  hydrationCallbacks = createUpdate(tag);
  hydrationCallbacks.callback =
    void 0 !== callback && null !== callback ? callback : null;
  enqueueUpdate(containerInfo, hydrationCallbacks, tag);
  initialChildren.current.lanes = tag;
  markRootUpdated(initialChildren, tag);
  ensureRootIsScheduled(initialChildren);
  return initialChildren;
}
function updateContainer(element, container, parentComponent, callback) {
  var current = container.current,
    lane = requestUpdateLane(current);
  enableSchedulingProfiler &&
    enableSchedulingProfiler &&
    null !== injectedProfilingHooks &&
    "function" === typeof injectedProfilingHooks.markRenderScheduled &&
    injectedProfilingHooks.markRenderScheduled(lane);
  parentComponent = getContextForSubtree(parentComponent);
  null === container.context
    ? (container.context = parentComponent)
    : (container.pendingContext = parentComponent);
  container = createUpdate(lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  element = enqueueUpdate(current, container, lane);
  null !== element &&
    (scheduleUpdateOnFiber(element, current, lane),
    entangleTransitions(element, current, lane));
  return lane;
}
function getPublicRootInstance(container) {
  container = container.current;
  if (!container.child) return null;
  switch (container.child.tag) {
    case 27:
    case 5:
      return container.child.stateNode;
    default:
      return container.child.stateNode;
  }
}
function attemptSynchronousHydration(fiber) {
  switch (fiber.tag) {
    case 3:
      var root$212 = fiber.stateNode;
      if (root$212.current.memoizedState.isDehydrated) {
        var lanes = getHighestPriorityLanes(root$212.pendingLanes);
        0 !== lanes &&
          (upgradePendingLanesToSync(root$212, lanes),
          ensureRootIsScheduled(root$212),
          0 === (executionContext & 6) &&
            ((workInProgressRootRenderTargetTime = now$1() + 500),
            flushSyncWorkAcrossRoots_impl(!1)));
      }
      break;
    case 13:
      flushSync$1(function () {
        var root = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root && scheduleUpdateOnFiber(root, fiber, 2);
      }),
        markRetryLaneIfNotHydrated(fiber, 2);
  }
}
function markRetryLaneImpl(fiber, retryLane) {
  fiber = fiber.memoizedState;
  if (null !== fiber && null !== fiber.dehydrated) {
    var a = fiber.retryLane;
    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
  }
}
function markRetryLaneIfNotHydrated(fiber, retryLane) {
  markRetryLaneImpl(fiber, retryLane);
  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
}
function attemptContinuousHydration(fiber) {
  if (13 === fiber.tag) {
    var root = enqueueConcurrentRenderForLane(fiber, 67108864);
    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
    markRetryLaneIfNotHydrated(fiber, 67108864);
  }
}
function emptyFindFiberByHostInstance() {
  return null;
}
var isInsideEventHandler = !1;
function batchedUpdates(fn, a, b) {
  if (isInsideEventHandler) return fn(a, b);
  isInsideEventHandler = !0;
  try {
    return batchedUpdates$1(fn, a, b);
  } finally {
    if (
      ((isInsideEventHandler = !1),
      null !== restoreTarget || null !== restoreQueue)
    )
      flushSync$1(), restoreStateIfNeeded();
  }
}
function getListener(inst, registrationName) {
  var stateNode = inst.stateNode;
  if (null === stateNode) return null;
  var props = getFiberCurrentPropsFromNode(stateNode);
  if (null === props) return null;
  stateNode = props[registrationName];
  a: switch (registrationName) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (props = !props.disabled) ||
        ((inst = inst.type),
        (props = !(
          "button" === inst ||
          "input" === inst ||
          "select" === inst ||
          "textarea" === inst
        )));
      inst = !props;
      break a;
    default:
      inst = !1;
  }
  if (inst) return null;
  if (stateNode && "function" !== typeof stateNode)
    throw Error(
      formatProdErrorMessage(231, registrationName, typeof stateNode)
    );
  return stateNode;
}
var passiveBrowserEventsSupported = !1;
if (canUseDOM)
  try {
    var options = {};
    Object.defineProperty(options, "passive", {
      get: function () {
        passiveBrowserEventsSupported = !0;
      }
    });
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, options);
  } catch (e) {
    passiveBrowserEventsSupported = !1;
  }
var EventListenerWWW = require("EventListener"),
  root = null,
  startText = null,
  fallbackText = null;
function getData() {
  if (fallbackText) return fallbackText;
  var start,
    startValue = startText,
    startLength = startValue.length,
    end,
    endValue = "value" in root ? root.value : root.textContent,
    endLength = endValue.length;
  for (
    start = 0;
    start < startLength && startValue[start] === endValue[start];
    start++
  );
  var minEnd = startLength - start;
  for (
    end = 1;
    end <= minEnd &&
    startValue[startLength - end] === endValue[endLength - end];
    end++
  );
  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
}
function getEventCharCode(nativeEvent) {
  var keyCode = nativeEvent.keyCode;
  "charCode" in nativeEvent
    ? ((nativeEvent = nativeEvent.charCode),
      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
    : (nativeEvent = keyCode);
  10 === nativeEvent && (nativeEvent = 13);
  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
}
function functionThatReturnsTrue() {
  return !0;
}
function functionThatReturnsFalse() {
  return !1;
}
function createSyntheticEvent(Interface) {
  function SyntheticBaseEvent(
    reactName,
    reactEventType,
    targetInst,
    nativeEvent,
    nativeEventTarget
  ) {
    this._reactName = reactName;
    this._targetInst = targetInst;
    this.type = reactEventType;
    this.nativeEvent = nativeEvent;
    this.target = nativeEventTarget;
    this.currentTarget = null;
    for (var propName in Interface)
      Interface.hasOwnProperty(propName) &&
        ((reactName = Interface[propName]),
        (this[propName] = reactName
          ? reactName(nativeEvent)
          : nativeEvent[propName]));
    this.isDefaultPrevented = (
      null != nativeEvent.defaultPrevented
        ? nativeEvent.defaultPrevented
        : !1 === nativeEvent.returnValue
    )
      ? functionThatReturnsTrue
      : functionThatReturnsFalse;
    this.isPropagationStopped = functionThatReturnsFalse;
    return this;
  }
  assign(SyntheticBaseEvent.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var event = this.nativeEvent;
      event &&
        (event.preventDefault
          ? event.preventDefault()
          : "unknown" !== typeof event.returnValue && (event.returnValue = !1),
        (this.isDefaultPrevented = functionThatReturnsTrue));
    },
    stopPropagation: function () {
      var event = this.nativeEvent;
      event &&
        (event.stopPropagation
          ? event.stopPropagation()
          : "unknown" !== typeof event.cancelBubble &&
            (event.cancelBubble = !0),
        (this.isPropagationStopped = functionThatReturnsTrue));
    },
    persist: function () {},
    isPersistent: functionThatReturnsTrue
  });
  return SyntheticBaseEvent;
}
var EventInterface = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (event) {
      return event.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  SyntheticEvent = createSyntheticEvent(EventInterface),
  UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }),
  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
  lastMovementX,
  lastMovementY,
  lastMouseEvent,
  MouseEventInterface = assign({}, UIEventInterface, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: getEventModifierState,
    button: 0,
    buttons: 0,
    relatedTarget: function (event) {
      return void 0 === event.relatedTarget
        ? event.fromElement === event.srcElement
          ? event.toElement
          : event.fromElement
        : event.relatedTarget;
    },
    movementX: function (event) {
      if ("movementX" in event) return event.movementX;
      event !== lastMouseEvent &&
        (lastMouseEvent && "mousemove" === event.type
          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
            (lastMovementY = event.screenY - lastMouseEvent.screenY))
          : (lastMovementY = lastMovementX = 0),
        (lastMouseEvent = event));
      return lastMovementX;
    },
    movementY: function (event) {
      return "movementY" in event ? event.movementY : lastMovementY;
    }
  }),
  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
  DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }),
  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
  FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }),
  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
  AnimationEventInterface = assign({}, EventInterface, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
  ClipboardEventInterface = assign({}, EventInterface, {
    clipboardData: function (event) {
      return "clipboardData" in event
        ? event.clipboardData
        : window.clipboardData;
    }
  }),
  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
  CompositionEventInterface = assign({}, EventInterface, { data: 0 }),
  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
  normalizeKey = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  translateToKey = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  modifierKeyToProp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function modifierStateGetter(keyArg) {
  var nativeEvent = this.nativeEvent;
  return nativeEvent.getModifierState
    ? nativeEvent.getModifierState(keyArg)
    : (keyArg = modifierKeyToProp[keyArg])
    ? !!nativeEvent[keyArg]
    : !1;
}
function getEventModifierState() {
  return modifierStateGetter;
}
var KeyboardEventInterface = assign({}, UIEventInterface, {
    key: function (nativeEvent) {
      if (nativeEvent.key) {
        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
        if ("Unidentified" !== key) return key;
      }
      return "keypress" === nativeEvent.type
        ? ((nativeEvent = getEventCharCode(nativeEvent)),
          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
        ? translateToKey[nativeEvent.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: getEventModifierState,
    charCode: function (event) {
      return "keypress" === event.type ? getEventCharCode(event) : 0;
    },
    keyCode: function (event) {
      return "keydown" === event.type || "keyup" === event.type
        ? event.keyCode
        : 0;
    },
    which: function (event) {
      return "keypress" === event.type
        ? getEventCharCode(event)
        : "keydown" === event.type || "keyup" === event.type
        ? event.keyCode
        : 0;
    }
  }),
  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
  PointerEventInterface = assign({}, MouseEventInterface, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
  TouchEventInterface = assign({}, UIEventInterface, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: getEventModifierState
  }),
  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
  TransitionEventInterface = assign({}, EventInterface, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
  WheelEventInterface = assign({}, MouseEventInterface, {
    deltaX: function (event) {
      return "deltaX" in event
        ? event.deltaX
        : "wheelDeltaX" in event
        ? -event.wheelDeltaX
        : 0;
    },
    deltaY: function (event) {
      return "deltaY" in event
        ? event.deltaY
        : "wheelDeltaY" in event
        ? -event.wheelDeltaY
        : "wheelDelta" in event
        ? -event.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
  END_KEYCODES = [9, 13, 27, 32],
  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
  documentMode = null;
canUseDOM &&
  "documentMode" in document &&
  (documentMode = document.documentMode);
var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
  useFallbackCompositionData =
    canUseDOM &&
    (!canUseCompositionEvent ||
      (documentMode && 8 < documentMode && 11 >= documentMode)),
  SPACEBAR_CHAR = String.fromCharCode(32),
  hasSpaceKeypress = !1;
function isFallbackCompositionEnd(domEventName, nativeEvent) {
  switch (domEventName) {
    case "keyup":
      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
    case "keydown":
      return 229 !== nativeEvent.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function getDataFromCustomEvent(nativeEvent) {
  nativeEvent = nativeEvent.detail;
  return "object" === typeof nativeEvent && "data" in nativeEvent
    ? nativeEvent.data
    : null;
}
var isComposing = !1;
function getNativeBeforeInputChars(domEventName, nativeEvent) {
  switch (domEventName) {
    case "compositionend":
      return getDataFromCustomEvent(nativeEvent);
    case "keypress":
      if (32 !== nativeEvent.which) return null;
      hasSpaceKeypress = !0;
      return SPACEBAR_CHAR;
    case "textInput":
      return (
        (domEventName = nativeEvent.data),
        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
      );
    default:
      return null;
  }
}
function getFallbackBeforeInputChars(domEventName, nativeEvent) {
  if (isComposing)
    return "compositionend" === domEventName ||
      (!canUseCompositionEvent &&
        isFallbackCompositionEnd(domEventName, nativeEvent))
      ? ((domEventName = getData()),
        (fallbackText = startText = root = null),
        (isComposing = !1),
        domEventName)
      : null;
  switch (domEventName) {
    case "paste":
      return null;
    case "keypress":
      if (
        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
        (nativeEvent.ctrlKey && nativeEvent.altKey)
      ) {
        if (nativeEvent.char && 1 < nativeEvent.char.length)
          return nativeEvent.char;
        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
      }
      return null;
    case "compositionend":
      return useFallbackCompositionData && "ko" !== nativeEvent.locale
        ? null
        : nativeEvent.data;
    default:
      return null;
  }
}
var supportedInputTypes = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return "input" === nodeName
    ? !!supportedInputTypes[elem.type]
    : "textarea" === nodeName
    ? !0
    : !1;
}
function createAndAccumulateChangeEvent(
  dispatchQueue,
  inst,
  nativeEvent,
  target
) {
  enqueueStateRestore(target);
  inst = accumulateTwoPhaseListeners(inst, "onChange");
  0 < inst.length &&
    ((nativeEvent = new SyntheticEvent(
      "onChange",
      "change",
      null,
      nativeEvent,
      target
    )),
    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
}
var activeElement$1 = null,
  activeElementInst$1 = null;
function runEventInBatch(dispatchQueue) {
  processDispatchQueue(dispatchQueue, 0);
}
function getInstIfValueChanged(targetInst) {
  var targetNode = getNodeFromInstance(targetInst);
  if (updateValueIfChanged(targetNode)) return targetInst;
}
function getTargetInstForChangeEvent(domEventName, targetInst) {
  if ("change" === domEventName) return targetInst;
}
var isInputEventSupported = !1;
if (canUseDOM) {
  var JSCompiler_inline_result$jscomp$373;
  if (canUseDOM) {
    var isSupported$jscomp$inline_1636 = "oninput" in document;
    if (!isSupported$jscomp$inline_1636) {
      var element$jscomp$inline_1637 = document.createElement("div");
      element$jscomp$inline_1637.setAttribute("oninput", "return;");
      isSupported$jscomp$inline_1636 =
        "function" === typeof element$jscomp$inline_1637.oninput;
    }
    JSCompiler_inline_result$jscomp$373 = isSupported$jscomp$inline_1636;
  } else JSCompiler_inline_result$jscomp$373 = !1;
  isInputEventSupported =
    JSCompiler_inline_result$jscomp$373 &&
    (!document.documentMode || 9 < document.documentMode);
}
function stopWatchingForValueChange() {
  activeElement$1 &&
    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
    (activeElementInst$1 = activeElement$1 = null));
}
function handlePropertyChange(nativeEvent) {
  if (
    "value" === nativeEvent.propertyName &&
    getInstIfValueChanged(activeElementInst$1)
  ) {
    var dispatchQueue = [];
    createAndAccumulateChangeEvent(
      dispatchQueue,
      activeElementInst$1,
      nativeEvent,
      getEventTarget(nativeEvent)
    );
    batchedUpdates(runEventInBatch, dispatchQueue);
  }
}
function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
  "focusin" === domEventName
    ? (stopWatchingForValueChange(),
      (activeElement$1 = target),
      (activeElementInst$1 = targetInst),
      activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
    : "focusout" === domEventName && stopWatchingForValueChange();
}
function getTargetInstForInputEventPolyfill(domEventName) {
  if (
    "selectionchange" === domEventName ||
    "keyup" === domEventName ||
    "keydown" === domEventName
  )
    return getInstIfValueChanged(activeElementInst$1);
}
function getTargetInstForClickEvent(domEventName, targetInst) {
  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
}
function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
  if ("input" === domEventName || "change" === domEventName)
    return getInstIfValueChanged(targetInst);
}
function getLeafNode(node) {
  for (; node && node.firstChild; ) node = node.firstChild;
  return node;
}
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  root = 0;
  for (var nodeEnd; node; ) {
    if (3 === node.nodeType) {
      nodeEnd = root + node.textContent.length;
      if (root <= offset && nodeEnd >= offset)
        return { node: node, offset: offset - root };
      root = nodeEnd;
    }
    a: {
      for (; node; ) {
        if (node.nextSibling) {
          node = node.nextSibling;
          break a;
        }
        node = node.parentNode;
      }
      node = void 0;
    }
    node = getLeafNode(node);
  }
}
function containsNode(outerNode, innerNode) {
  return outerNode && innerNode
    ? outerNode === innerNode
      ? !0
      : outerNode && 3 === outerNode.nodeType
      ? !1
      : innerNode && 3 === innerNode.nodeType
      ? containsNode(outerNode, innerNode.parentNode)
      : "contains" in outerNode
      ? outerNode.contains(innerNode)
      : outerNode.compareDocumentPosition
      ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
      : !1
    : !1;
}
function getActiveElementDeep() {
  for (
    var win = window, element = getActiveElement();
    element instanceof win.HTMLIFrameElement;

  ) {
    try {
      var JSCompiler_inline_result =
        "string" === typeof element.contentWindow.location.href;
    } catch (err) {
      JSCompiler_inline_result = !1;
    }
    if (JSCompiler_inline_result) win = element.contentWindow;
    else break;
    element = getActiveElement(win.document);
  }
  return element;
}
function hasSelectionCapabilities(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName &&
    (("input" === nodeName &&
      ("text" === elem.type ||
        "search" === elem.type ||
        "tel" === elem.type ||
        "url" === elem.type ||
        "password" === elem.type)) ||
      "textarea" === nodeName ||
      "true" === elem.contentEditable)
  );
}
function restoreSelection(priorSelectionInformation) {
  var curFocusedElem = getActiveElementDeep(),
    priorFocusedElem = priorSelectionInformation.focusedElem,
    priorSelectionRange = priorSelectionInformation.selectionRange;
  if (
    curFocusedElem !== priorFocusedElem &&
    priorFocusedElem &&
    priorFocusedElem.ownerDocument &&
    containsNode(
      priorFocusedElem.ownerDocument.documentElement,
      priorFocusedElem
    )
  ) {
    if (
      null !== priorSelectionRange &&
      hasSelectionCapabilities(priorFocusedElem)
    )
      if (
        ((curFocusedElem = priorSelectionRange.start),
        (priorSelectionInformation = priorSelectionRange.end),
        void 0 === priorSelectionInformation &&
          (priorSelectionInformation = curFocusedElem),
        "selectionStart" in priorFocusedElem)
      )
        (priorFocusedElem.selectionStart = curFocusedElem),
          (priorFocusedElem.selectionEnd = Math.min(
            priorSelectionInformation,
            priorFocusedElem.value.length
          ));
      else if (
        ((priorSelectionInformation =
          ((curFocusedElem = priorFocusedElem.ownerDocument || document) &&
            curFocusedElem.defaultView) ||
          window),
        priorSelectionInformation.getSelection)
      ) {
        priorSelectionInformation = priorSelectionInformation.getSelection();
        var length = priorFocusedElem.textContent.length,
          start = Math.min(priorSelectionRange.start, length);
        priorSelectionRange =
          void 0 === priorSelectionRange.end
            ? start
            : Math.min(priorSelectionRange.end, length);
        !priorSelectionInformation.extend &&
          start > priorSelectionRange &&
          ((length = priorSelectionRange),
          (priorSelectionRange = start),
          (start = length));
        length = getNodeForCharacterOffset(priorFocusedElem, start);
        var endMarker = getNodeForCharacterOffset(
          priorFocusedElem,
          priorSelectionRange
        );
        length &&
          endMarker &&
          (1 !== priorSelectionInformation.rangeCount ||
            priorSelectionInformation.anchorNode !== length.node ||
            priorSelectionInformation.anchorOffset !== length.offset ||
            priorSelectionInformation.focusNode !== endMarker.node ||
            priorSelectionInformation.focusOffset !== endMarker.offset) &&
          ((curFocusedElem = curFocusedElem.createRange()),
          curFocusedElem.setStart(length.node, length.offset),
          priorSelectionInformation.removeAllRanges(),
          start > priorSelectionRange
            ? (priorSelectionInformation.addRange(curFocusedElem),
              priorSelectionInformation.extend(
                endMarker.node,
                endMarker.offset
              ))
            : (curFocusedElem.setEnd(endMarker.node, endMarker.offset),
              priorSelectionInformation.addRange(curFocusedElem)));
      }
    curFocusedElem = [];
    for (
      priorSelectionInformation = priorFocusedElem;
      (priorSelectionInformation = priorSelectionInformation.parentNode);

    )
      1 === priorSelectionInformation.nodeType &&
        curFocusedElem.push({
          element: priorSelectionInformation,
          left: priorSelectionInformation.scrollLeft,
          top: priorSelectionInformation.scrollTop
        });
    "function" === typeof priorFocusedElem.focus && priorFocusedElem.focus();
    for (
      priorFocusedElem = 0;
      priorFocusedElem < curFocusedElem.length;
      priorFocusedElem++
    )
      (priorSelectionInformation = curFocusedElem[priorFocusedElem]),
        (priorSelectionInformation.element.scrollLeft =
          priorSelectionInformation.left),
        (priorSelectionInformation.element.scrollTop =
          priorSelectionInformation.top);
  }
}
var skipSelectionChangeEvent =
    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
  activeElement = null,
  activeElementInst = null,
  lastSelection = null,
  mouseDown = !1;
function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
  var doc =
    nativeEventTarget.window === nativeEventTarget
      ? nativeEventTarget.document
      : 9 === nativeEventTarget.nodeType
      ? nativeEventTarget
      : nativeEventTarget.ownerDocument;
  mouseDown ||
    null == activeElement ||
    activeElement !== getActiveElement(doc) ||
    ((doc = activeElement),
    "selectionStart" in doc && hasSelectionCapabilities(doc)
      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
      : ((doc = (
          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (doc = {
          anchorNode: doc.anchorNode,
          anchorOffset: doc.anchorOffset,
          focusNode: doc.focusNode,
          focusOffset: doc.focusOffset
        })),
    (lastSelection && shallowEqual(lastSelection, doc)) ||
      ((lastSelection = doc),
      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
      0 < doc.length &&
        ((nativeEvent = new SyntheticEvent(
          "onSelect",
          "select",
          null,
          nativeEvent,
          nativeEventTarget
        )),
        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
        (nativeEvent.target = activeElement))));
}
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit" + styleProp] = "webkit" + eventName;
  prefixes["Moz" + styleProp] = "moz" + eventName;
  return prefixes;
}
var vendorPrefixes = {
    animationend: makePrefixMap("Animation", "AnimationEnd"),
    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
    animationstart: makePrefixMap("Animation", "AnimationStart"),
    transitionend: makePrefixMap("Transition", "TransitionEnd")
  },
  prefixedEventNames = {},
  style = {};
canUseDOM &&
  ((style = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete vendorPrefixes.animationend.animation,
    delete vendorPrefixes.animationiteration.animation,
    delete vendorPrefixes.animationstart.animation),
  "TransitionEvent" in window ||
    delete vendorPrefixes.transitionend.transition);
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
  if (!vendorPrefixes[eventName]) return eventName;
  var prefixMap = vendorPrefixes[eventName],
    styleProp;
  for (styleProp in prefixMap)
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
  return eventName;
}
var ANIMATION_END = getVendorPrefixedEventName("animationend"),
  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
  topLevelEventsToReactNames = new Map(),
  simpleEventPluginEvents =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
      " "
    );
topLevelEventsToReactNames.set("beforeblur", null);
topLevelEventsToReactNames.set("afterblur", null);
function registerSimpleEvent(domEventName, reactName) {
  topLevelEventsToReactNames.set(domEventName, reactName);
  registerTwoPhaseEvent(reactName, [domEventName]);
}
function extractEvents$1(
  dispatchQueue,
  domEventName,
  maybeTargetInst,
  nativeEvent,
  nativeEventTarget
) {
  if (
    "submit" === domEventName &&
    maybeTargetInst &&
    maybeTargetInst.stateNode === nativeEventTarget
  ) {
    var action = getFiberCurrentPropsFromNode(nativeEventTarget).action,
      submitter = nativeEvent.submitter;
    submitter &&
      ((domEventName = (domEventName = getFiberCurrentPropsFromNode(submitter))
        ? domEventName.formAction
        : submitter.getAttribute("formAction")),
      null != domEventName && ((action = domEventName), (submitter = null)));
    if ("function" === typeof action) {
      var event = new SyntheticEvent(
        "action",
        "action",
        null,
        nativeEvent,
        nativeEventTarget
      );
      dispatchQueue.push({
        event: event,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (!nativeEvent.defaultPrevented) {
                event.preventDefault();
                if (submitter) {
                  var temp = submitter.ownerDocument.createElement("input");
                  temp.name = submitter.name;
                  temp.value = submitter.value;
                  submitter.parentNode.insertBefore(temp, submitter);
                  var formData = new FormData(nativeEventTarget);
                  temp.parentNode.removeChild(temp);
                } else formData = new FormData(nativeEventTarget);
                startHostTransition(
                  maybeTargetInst,
                  {
                    pending: !0,
                    data: formData,
                    method: nativeEventTarget.method,
                    action: action
                  },
                  action,
                  formData
                );
              }
            },
            currentTarget: nativeEventTarget
          }
        ]
      });
    }
  }
}
for (
  var i$jscomp$inline_1677 = 0;
  i$jscomp$inline_1677 < simpleEventPluginEvents.length;
  i$jscomp$inline_1677++
) {
  var eventName$jscomp$inline_1678 =
      simpleEventPluginEvents[i$jscomp$inline_1677],
    domEventName$jscomp$inline_1679 =
      eventName$jscomp$inline_1678.toLowerCase(),
    capitalizedEvent$jscomp$inline_1680 =
      eventName$jscomp$inline_1678[0].toUpperCase() +
      eventName$jscomp$inline_1678.slice(1);
  registerSimpleEvent(
    domEventName$jscomp$inline_1679,
    "on" + capitalizedEvent$jscomp$inline_1680
  );
}
registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
registerSimpleEvent(ANIMATION_START, "onAnimationStart");
registerSimpleEvent("dblclick", "onDoubleClick");
registerSimpleEvent("focusin", "onFocus");
registerSimpleEvent("focusout", "onBlur");
registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
registerTwoPhaseEvent(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
registerTwoPhaseEvent(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
registerTwoPhaseEvent("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste"
]);
registerTwoPhaseEvent(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
registerTwoPhaseEvent(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var mediaEventTypes =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nonDelegatedEvents = new Set(
    "cancel close invalid load scroll scrollend toggle"
      .split(" ")
      .concat(mediaEventTypes)
  );
function executeDispatch(event, listener, currentTarget) {
  var type = event.type || "unknown-event";
  event.currentTarget = currentTarget;
  invokeGuardedCallbackAndCatchFirstError(type, listener, void 0, event);
  event.currentTarget = null;
}
function processDispatchQueue(dispatchQueue, eventSystemFlags) {
  eventSystemFlags = 0 !== (eventSystemFlags & 4);
  for (var i = 0; i < dispatchQueue.length; i++) {
    var _dispatchQueue$i = dispatchQueue[i],
      event = _dispatchQueue$i.event;
    _dispatchQueue$i = _dispatchQueue$i.listeners;
    a: {
      var previousInstance = void 0;
      if (eventSystemFlags)
        for (
          var i$jscomp$0 = _dispatchQueue$i.length - 1;
          0 <= i$jscomp$0;
          i$jscomp$0--
        ) {
          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
            instance = _dispatchListeners$i.instance,
            currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          executeDispatch(event, _dispatchListeners$i, currentTarget);
          previousInstance = instance;
        }
      else
        for (
          i$jscomp$0 = 0;
          i$jscomp$0 < _dispatchQueue$i.length;
          i$jscomp$0++
        ) {
          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
          instance = _dispatchListeners$i.instance;
          currentTarget = _dispatchListeners$i.currentTarget;
          _dispatchListeners$i = _dispatchListeners$i.listener;
          if (instance !== previousInstance && event.isPropagationStopped())
            break a;
          executeDispatch(event, _dispatchListeners$i, currentTarget);
          previousInstance = instance;
        }
    }
  }
  if (hasRethrowError)
    throw (
      ((dispatchQueue = rethrowError),
      (hasRethrowError = !1),
      (rethrowError = null),
      dispatchQueue)
    );
}
function listenToNonDelegatedEvent(domEventName, targetElement) {
  var listenerSet = getEventListenerSet(targetElement),
    listenerSetKey = domEventName + "__bubble";
  listenerSet.has(listenerSetKey) ||
    (addTrappedEventListener(targetElement, domEventName, 2, !1),
    listenerSet.add(listenerSetKey));
}
function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
  var eventSystemFlags = 0;
  isCapturePhaseListener && (eventSystemFlags |= 4);
  addTrappedEventListener(
    target,
    domEventName,
    eventSystemFlags,
    isCapturePhaseListener
  );
}
var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
function listenToAllSupportedEvents(rootContainerElement) {
  if (!rootContainerElement[listeningMarker]) {
    rootContainerElement[listeningMarker] = !0;
    allNativeEvents.forEach(function (domEventName) {
      "selectionchange" !== domEventName &&
        (nonDelegatedEvents.has(domEventName) ||
          listenToNativeEvent(domEventName, !1, rootContainerElement),
        listenToNativeEvent(domEventName, !0, rootContainerElement));
    });
    var ownerDocument =
      9 === rootContainerElement.nodeType
        ? rootContainerElement
        : rootContainerElement.ownerDocument;
    null === ownerDocument ||
      ownerDocument[listeningMarker] ||
      ((ownerDocument[listeningMarker] = !0),
      listenToNativeEvent("selectionchange", !1, ownerDocument));
  }
}
function addTrappedEventListener(
  targetContainer,
  domEventName,
  eventSystemFlags,
  isCapturePhaseListener,
  isDeferredListenerForLegacyFBSupport
) {
  eventSystemFlags = createEventListenerWrapperWithPriority(
    targetContainer,
    domEventName,
    eventSystemFlags
  );
  var isPassiveListener = void 0;
  !passiveBrowserEventsSupported ||
    ("touchstart" !== domEventName &&
      "touchmove" !== domEventName &&
      "wheel" !== domEventName) ||
    (isPassiveListener = !0);
  targetContainer =
    enableLegacyFBSupport && isDeferredListenerForLegacyFBSupport
      ? targetContainer.ownerDocument
      : targetContainer;
  if (enableLegacyFBSupport && isDeferredListenerForLegacyFBSupport) {
    var originalListener = eventSystemFlags;
    eventSystemFlags = function () {
      unsubscribeListener.remove();
      for (
        var _len = arguments.length, p = Array(_len), _key = 0;
        _key < _len;
        _key++
      )
        p[_key] = arguments[_key];
      return originalListener.apply(this, p);
    };
  }
  var unsubscribeListener = isCapturePhaseListener
    ? void 0 !== isPassiveListener
      ? EventListenerWWW.captureWithPassiveFlag(
          targetContainer,
          domEventName,
          eventSystemFlags,
          isPassiveListener
        )
      : EventListenerWWW.capture(
          targetContainer,
          domEventName,
          eventSystemFlags
        )
    : void 0 !== isPassiveListener
    ? EventListenerWWW.bubbleWithPassiveFlag(
        targetContainer,
        domEventName,
        eventSystemFlags,
        isPassiveListener
      )
    : EventListenerWWW.listen(targetContainer, domEventName, eventSystemFlags);
}
function dispatchEventForPluginEventSystem(
  domEventName,
  eventSystemFlags,
  nativeEvent,
  targetInst$jscomp$0,
  targetContainer
) {
  var ancestorInst = targetInst$jscomp$0;
  if (0 === (eventSystemFlags & 1) && 0 === (eventSystemFlags & 2)) {
    if (
      enableLegacyFBSupport &&
      "click" === domEventName &&
      0 === (eventSystemFlags & 20) &&
      nativeEvent !== currentReplayingEvent
    ) {
      addTrappedEventListener(targetContainer, domEventName, 16, !1, !0);
      return;
    }
    if (null !== targetInst$jscomp$0)
      a: for (;;) {
        if (null === targetInst$jscomp$0) return;
        var nodeTag = targetInst$jscomp$0.tag;
        if (3 === nodeTag || 4 === nodeTag) {
          var container = targetInst$jscomp$0.stateNode.containerInfo;
          if (
            container === targetContainer ||
            (8 === container.nodeType &&
              container.parentNode === targetContainer)
          )
            break;
          if (4 === nodeTag)
            for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
              var grandTag = nodeTag.tag;
              if (3 === grandTag || 4 === grandTag)
                if (
                  ((grandTag = nodeTag.stateNode.containerInfo),
                  grandTag === targetContainer ||
                    (8 === grandTag.nodeType &&
                      grandTag.parentNode === targetContainer))
                )
                  return;
              nodeTag = nodeTag.return;
            }
          for (; null !== container; ) {
            nodeTag = getClosestInstanceFromNode(container);
            if (null === nodeTag) return;
            grandTag = nodeTag.tag;
            if (
              5 === grandTag ||
              6 === grandTag ||
              26 === grandTag ||
              27 === grandTag
            ) {
              targetInst$jscomp$0 = ancestorInst = nodeTag;
              continue a;
            }
            container = container.parentNode;
          }
        }
        targetInst$jscomp$0 = targetInst$jscomp$0.return;
      }
  }
  batchedUpdates(function () {
    var targetInst = ancestorInst,
      nativeEventTarget = getEventTarget(nativeEvent),
      dispatchQueue = [];
    a: {
      var reactName = topLevelEventsToReactNames.get(domEventName);
      if (void 0 !== reactName) {
        var SyntheticEventCtor = SyntheticEvent,
          reactEventType = domEventName;
        switch (domEventName) {
          case "keypress":
            if (0 === getEventCharCode(nativeEvent)) break a;
          case "keydown":
          case "keyup":
            SyntheticEventCtor = SyntheticKeyboardEvent;
            break;
          case "focusin":
            reactEventType = "focus";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "focusout":
            reactEventType = "blur";
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "beforeblur":
          case "afterblur":
            SyntheticEventCtor = SyntheticFocusEvent;
            break;
          case "click":
            if (2 === nativeEvent.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            SyntheticEventCtor = SyntheticMouseEvent;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            SyntheticEventCtor = SyntheticDragEvent;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            SyntheticEventCtor = SyntheticTouchEvent;
            break;
          case ANIMATION_END:
          case ANIMATION_ITERATION:
          case ANIMATION_START:
            SyntheticEventCtor = SyntheticAnimationEvent;
            break;
          case TRANSITION_END:
            SyntheticEventCtor = SyntheticTransitionEvent;
            break;
          case "scroll":
          case "scrollend":
            SyntheticEventCtor = SyntheticUIEvent;
            break;
          case "wheel":
            SyntheticEventCtor = SyntheticWheelEvent;
            break;
          case "copy":
          case "cut":
          case "paste":
            SyntheticEventCtor = SyntheticClipboardEvent;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            SyntheticEventCtor = SyntheticPointerEvent;
        }
        var inCapturePhase = 0 !== (eventSystemFlags & 4);
        eventSystemFlags & 1
          ? ((inCapturePhase = accumulateEventHandleNonManagedNodeListeners(
              reactEventType,
              targetContainer,
              inCapturePhase
            )),
            0 < inCapturePhase.length &&
              ((reactName = new SyntheticEventCtor(
                reactName,
                reactEventType,
                null,
                nativeEvent,
                nativeEventTarget
              )),
              dispatchQueue.push({
                event: reactName,
                listeners: inCapturePhase
              })))
          : ((inCapturePhase = accumulateSinglePhaseListeners(
              targetInst,
              reactName,
              nativeEvent.type,
              inCapturePhase,
              !inCapturePhase &&
                ("scroll" === domEventName || "scrollend" === domEventName),
              nativeEvent
            )),
            0 < inCapturePhase.length &&
              ((reactName = new SyntheticEventCtor(
                reactName,
                reactEventType,
                null,
                nativeEvent,
                nativeEventTarget
              )),
              dispatchQueue.push({
                event: reactName,
                listeners: inCapturePhase
              })));
      }
    }
    if (0 === (eventSystemFlags & 7)) {
      a: {
        reactName =
          "mouseover" === domEventName || "pointerover" === domEventName;
        SyntheticEventCtor =
          "mouseout" === domEventName || "pointerout" === domEventName;
        if (
          reactName &&
          nativeEvent !== currentReplayingEvent &&
          (reactEventType =
            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
          (getClosestInstanceFromNode(reactEventType) ||
            reactEventType[internalContainerInstanceKey])
        )
          break a;
        if (SyntheticEventCtor || reactName) {
          reactName =
            nativeEventTarget.window === nativeEventTarget
              ? nativeEventTarget
              : (reactName = nativeEventTarget.ownerDocument)
              ? reactName.defaultView || reactName.parentWindow
              : window;
          if (SyntheticEventCtor) {
            if (
              ((reactEventType =
                nativeEvent.relatedTarget || nativeEvent.toElement),
              (SyntheticEventCtor = targetInst),
              (reactEventType = reactEventType
                ? getClosestInstanceFromNode(reactEventType)
                : null),
              null !== reactEventType)
            ) {
              inCapturePhase = getNearestMountedFiber(reactEventType);
              var tag = reactEventType.tag;
              if (
                reactEventType !== inCapturePhase ||
                (5 !== tag && 27 !== tag && 6 !== tag)
              )
                reactEventType = null;
            }
          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
          if (SyntheticEventCtor !== reactEventType) {
            tag = SyntheticMouseEvent;
            var leaveEventType = "onMouseLeave",
              enterEventType = "onMouseEnter",
              eventTypePrefix = "mouse";
            if ("pointerout" === domEventName || "pointerover" === domEventName)
              (tag = SyntheticPointerEvent),
                (leaveEventType = "onPointerLeave"),
                (enterEventType = "onPointerEnter"),
                (eventTypePrefix = "pointer");
            inCapturePhase =
              null == SyntheticEventCtor
                ? reactName
                : getNodeFromInstance(SyntheticEventCtor);
            var toNode =
              null == reactEventType
                ? reactName
                : getNodeFromInstance(reactEventType);
            reactName = new tag(
              leaveEventType,
              eventTypePrefix + "leave",
              SyntheticEventCtor,
              nativeEvent,
              nativeEventTarget
            );
            reactName.target = inCapturePhase;
            reactName.relatedTarget = toNode;
            leaveEventType = null;
            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
              ((tag = new tag(
                enterEventType,
                eventTypePrefix + "enter",
                reactEventType,
                nativeEvent,
                nativeEventTarget
              )),
              (tag.target = toNode),
              (tag.relatedTarget = inCapturePhase),
              (leaveEventType = tag));
            inCapturePhase = leaveEventType;
            if (SyntheticEventCtor && reactEventType)
              b: {
                tag = SyntheticEventCtor;
                enterEventType = reactEventType;
                eventTypePrefix = 0;
                for (toNode = tag; toNode; toNode = getParent(toNode))
                  eventTypePrefix++;
                toNode = 0;
                for (
                  leaveEventType = enterEventType;
                  leaveEventType;
                  leaveEventType = getParent(leaveEventType)
                )
                  toNode++;
                for (; 0 < eventTypePrefix - toNode; )
                  (tag = getParent(tag)), eventTypePrefix--;
                for (; 0 < toNode - eventTypePrefix; )
                  (enterEventType = getParent(enterEventType)), toNode--;
                for (; eventTypePrefix--; ) {
                  if (
                    tag === enterEventType ||
                    (null !== enterEventType &&
                      tag === enterEventType.alternate)
                  )
                    break b;
                  tag = getParent(tag);
                  enterEventType = getParent(enterEventType);
                }
                tag = null;
              }
            else tag = null;
            null !== SyntheticEventCtor &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                reactName,
                SyntheticEventCtor,
                tag,
                !1
              );
            null !== reactEventType &&
              null !== inCapturePhase &&
              accumulateEnterLeaveListenersForEvent(
                dispatchQueue,
                inCapturePhase,
                reactEventType,
                tag,
                !0
              );
          }
        }
      }
      a: {
        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
        SyntheticEventCtor =
          reactName.nodeName && reactName.nodeName.toLowerCase();
        if (
          "select" === SyntheticEventCtor ||
          ("input" === SyntheticEventCtor && "file" === reactName.type)
        )
          var getTargetInstFunc = getTargetInstForChangeEvent;
        else if (isTextInputElement(reactName))
          if (isInputEventSupported)
            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
          else {
            getTargetInstFunc = getTargetInstForInputEventPolyfill;
            var handleEventFunc = handleEventsForInputEventPolyfill;
          }
        else
          (SyntheticEventCtor = reactName.nodeName),
            !SyntheticEventCtor ||
            "input" !== SyntheticEventCtor.toLowerCase() ||
            ("checkbox" !== reactName.type && "radio" !== reactName.type)
              ? targetInst &&
                isCustomElement(targetInst.elementType) &&
                (getTargetInstFunc = getTargetInstForChangeEvent)
              : (getTargetInstFunc = getTargetInstForClickEvent);
        if (
          getTargetInstFunc &&
          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
        ) {
          createAndAccumulateChangeEvent(
            dispatchQueue,
            getTargetInstFunc,
            nativeEvent,
            nativeEventTarget
          );
          break a;
        }
        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
        "focusout" === domEventName &&
          targetInst &&
          "number" === reactName.type &&
          (disableInputAttributeSyncing ||
            (null != targetInst.memoizedProps.value &&
              setDefaultValue(reactName, "number", reactName.value)));
      }
      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
      switch (domEventName) {
        case "focusin":
          if (
            isTextInputElement(handleEventFunc) ||
            "true" === handleEventFunc.contentEditable
          )
            (activeElement = handleEventFunc),
              (activeElementInst = targetInst),
              (lastSelection = null);
          break;
        case "focusout":
          lastSelection = activeElementInst = activeElement = null;
          break;
        case "mousedown":
          mouseDown = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          mouseDown = !1;
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
          break;
        case "selectionchange":
          if (skipSelectionChangeEvent) break;
        case "keydown":
        case "keyup":
          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
      }
      var fallbackData;
      if (canUseCompositionEvent)
        b: {
          switch (domEventName) {
            case "compositionstart":
              var eventType = "onCompositionStart";
              break b;
            case "compositionend":
              eventType = "onCompositionEnd";
              break b;
            case "compositionupdate":
              eventType = "onCompositionUpdate";
              break b;
          }
          eventType = void 0;
        }
      else
        isComposing
          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
            (eventType = "onCompositionEnd")
          : "keydown" === domEventName &&
            229 === nativeEvent.keyCode &&
            (eventType = "onCompositionStart");
      eventType &&
        (useFallbackCompositionData &&
          "ko" !== nativeEvent.locale &&
          (isComposing || "onCompositionStart" !== eventType
            ? "onCompositionEnd" === eventType &&
              isComposing &&
              (fallbackData = getData())
            : ((root = nativeEventTarget),
              (startText = "value" in root ? root.value : root.textContent),
              (isComposing = !0))),
        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
        0 < handleEventFunc.length &&
          ((eventType = new SyntheticCompositionEvent(
            eventType,
            domEventName,
            null,
            nativeEvent,
            nativeEventTarget
          )),
          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
          fallbackData
            ? (eventType.data = fallbackData)
            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
              null !== fallbackData && (eventType.data = fallbackData))));
      if (
        (fallbackData = canUseTextInputEvent
          ? getNativeBeforeInputChars(domEventName, nativeEvent)
          : getFallbackBeforeInputChars(domEventName, nativeEvent))
      )
        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
          0 < eventType.length &&
            ((handleEventFunc = new SyntheticCompositionEvent(
              "onBeforeInput",
              "beforeinput",
              null,
              nativeEvent,
              nativeEventTarget
            )),
            dispatchQueue.push({
              event: handleEventFunc,
              listeners: eventType
            }),
            (handleEventFunc.data = fallbackData));
      extractEvents$1(
        dispatchQueue,
        domEventName,
        targetInst,
        nativeEvent,
        nativeEventTarget
      );
    }
    processDispatchQueue(dispatchQueue, eventSystemFlags);
  });
}
function createDispatchListener(instance, listener, currentTarget) {
  return {
    instance: instance,
    listener: listener,
    currentTarget: currentTarget
  };
}
function accumulateSinglePhaseListeners(
  targetFiber,
  reactName,
  nativeEventType,
  inCapturePhase,
  accumulateTargetOnly,
  nativeEvent
) {
  reactName = inCapturePhase
    ? null !== reactName
      ? reactName + "Capture"
      : null
    : reactName;
  for (
    var listeners = [], instance = targetFiber, lastHostComponent = null;
    null !== instance;

  ) {
    var _instance = instance;
    targetFiber = _instance.stateNode;
    _instance = _instance.tag;
    (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
    null === targetFiber
      ? 21 === _instance &&
        null !== lastHostComponent &&
        null !== targetFiber &&
        ((targetFiber = targetFiber[internalEventHandlerListenersKey] || null),
        null !== targetFiber &&
          targetFiber.forEach(function (entry) {
            entry.type === nativeEventType &&
              entry.capture === inCapturePhase &&
              listeners.push(
                createDispatchListener(
                  instance,
                  entry.callback,
                  lastHostComponent
                )
              );
          }))
      : ((lastHostComponent = targetFiber),
        (targetFiber =
          lastHostComponent[internalEventHandlerListenersKey] || null),
        null !== targetFiber &&
          targetFiber.forEach(function (entry) {
            entry.type === nativeEventType &&
              entry.capture === inCapturePhase &&
              listeners.push(
                createDispatchListener(
                  instance,
                  entry.callback,
                  lastHostComponent
                )
              );
          }),
        null !== reactName &&
          ((targetFiber = getListener(instance, reactName)),
          null != targetFiber &&
            listeners.push(
              createDispatchListener(instance, targetFiber, lastHostComponent)
            )));
    if (accumulateTargetOnly) break;
    "beforeblur" === nativeEvent.type &&
      ((targetFiber = nativeEvent._detachedInterceptFiber),
      null === targetFiber ||
        (targetFiber !== instance && targetFiber !== instance.alternate) ||
        (listeners = []));
    instance = instance.return;
  }
  return listeners;
}
function accumulateTwoPhaseListeners(targetFiber, reactName) {
  for (
    var captureName = reactName + "Capture", listeners = [];
    null !== targetFiber;

  ) {
    var _instance2 = targetFiber,
      stateNode = _instance2.stateNode;
    _instance2 = _instance2.tag;
    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
      null === stateNode ||
      ((_instance2 = getListener(targetFiber, captureName)),
      null != _instance2 &&
        listeners.unshift(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ),
      (_instance2 = getListener(targetFiber, reactName)),
      null != _instance2 &&
        listeners.push(
          createDispatchListener(targetFiber, _instance2, stateNode)
        ));
    targetFiber = targetFiber.return;
  }
  return listeners;
}
function getParent(inst) {
  if (null === inst) return null;
  do inst = inst.return;
  while (inst && 5 !== inst.tag && 27 !== inst.tag);
  return inst ? inst : null;
}
function accumulateEnterLeaveListenersForEvent(
  dispatchQueue,
  event,
  target,
  common,
  inCapturePhase
) {
  for (
    var registrationName = event._reactName, listeners = [];
    null !== target && target !== common;

  ) {
    var _instance3 = target,
      alternate = _instance3.alternate,
      stateNode = _instance3.stateNode;
    _instance3 = _instance3.tag;
    if (null !== alternate && alternate === common) break;
    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
      null === stateNode ||
      ((alternate = stateNode),
      inCapturePhase
        ? ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.unshift(
              createDispatchListener(target, stateNode, alternate)
            ))
        : inCapturePhase ||
          ((stateNode = getListener(target, registrationName)),
          null != stateNode &&
            listeners.push(
              createDispatchListener(target, stateNode, alternate)
            )));
    target = target.return;
  }
  0 !== listeners.length &&
    dispatchQueue.push({ event: event, listeners: listeners });
}
function accumulateEventHandleNonManagedNodeListeners(
  reactEventType,
  currentTarget,
  inCapturePhase
) {
  var listeners = [],
    eventListeners = currentTarget[internalEventHandlerListenersKey] || null;
  null !== eventListeners &&
    eventListeners.forEach(function (entry) {
      entry.type === reactEventType &&
        entry.capture === inCapturePhase &&
        listeners.push(
          createDispatchListener(null, entry.callback, currentTarget)
        );
    });
  return listeners;
}
var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
  NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
function normalizeMarkupForTextOrAttribute(markup) {
  return ("string" === typeof markup ? markup : "" + markup)
    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
}
function noop$1() {}
function setProp(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "children":
      "string" === typeof value
        ? "body" === tag ||
          ("textarea" === tag && "" === value) ||
          setTextContent(domElement, value)
        : "number" === typeof value &&
          "body" !== tag &&
          setTextContent(domElement, "" + value);
      break;
    case "className":
      setValueForKnownAttribute(domElement, "class", value);
      break;
    case "tabIndex":
      setValueForKnownAttribute(domElement, "tabindex", value);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      setValueForKnownAttribute(domElement, key, value);
      break;
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "src":
    case "href":
      if ("" === value && ("a" !== tag || "href" !== key)) {
        domElement.removeAttribute(key);
        break;
      }
      if (
        null == value ||
        "function" === typeof value ||
        "symbol" === typeof value ||
        "boolean" === typeof value
      ) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL(enableTrustedTypesIntegration ? value : "" + value);
      domElement.setAttribute(key, value);
      break;
    case "action":
    case "formAction":
      if ("function" === typeof value) {
        domElement.setAttribute(
          key,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        "function" === typeof prevValue &&
          ("formAction" === key
            ? ("input" !== tag &&
                setProp(domElement, tag, "name", props.name, props, null),
              setProp(
                domElement,
                tag,
                "formEncType",
                props.formEncType,
                props,
                null
              ),
              setProp(
                domElement,
                tag,
                "formMethod",
                props.formMethod,
                props,
                null
              ),
              setProp(
                domElement,
                tag,
                "formTarget",
                props.formTarget,
                props,
                null
              ))
            : (setProp(domElement, tag, "encType", props.encType, props, null),
              setProp(domElement, tag, "method", props.method, props, null),
              setProp(domElement, tag, "target", props.target, props, null)));
      if (
        null == value ||
        "symbol" === typeof value ||
        "boolean" === typeof value
      ) {
        domElement.removeAttribute(key);
        break;
      }
      value = sanitizeURL(enableTrustedTypesIntegration ? value : "" + value);
      domElement.setAttribute(key, value);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          disableIEWorkarounds
            ? (domElement.innerHTML = key)
            : setInnerHTML$1(domElement, key);
        }
      }
      break;
    case "multiple":
      domElement.multiple =
        value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "muted":
      domElement.muted =
        value && "function" !== typeof value && "symbol" !== typeof value;
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (
        null == value ||
        "function" === typeof value ||
        "boolean" === typeof value ||
        "symbol" === typeof value
      ) {
        domElement.removeAttribute("xlink:href");
        break;
      }
      key = sanitizeURL(enableTrustedTypesIntegration ? value : "" + value);
      domElement.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        key
      );
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      null != value && "function" !== typeof value && "symbol" !== typeof value
        ? domElement.setAttribute(
            key,
            enableTrustedTypesIntegration ? value : "" + value
          )
        : domElement.removeAttribute(key);
      break;
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      value && "function" !== typeof value && "symbol" !== typeof value
        ? domElement.setAttribute(key, "")
        : domElement.removeAttribute(key);
      break;
    case "capture":
    case "download":
      !0 === value
        ? domElement.setAttribute(key, "")
        : !1 !== value &&
          null != value &&
          "function" !== typeof value &&
          "symbol" !== typeof value
        ? domElement.setAttribute(key, value)
        : domElement.removeAttribute(key);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      null != value &&
      "function" !== typeof value &&
      "symbol" !== typeof value &&
      !isNaN(value) &&
      1 <= value
        ? domElement.setAttribute(key, value)
        : domElement.removeAttribute(key);
      break;
    case "rowSpan":
    case "start":
      null == value ||
      "function" === typeof value ||
      "symbol" === typeof value ||
      isNaN(value)
        ? domElement.removeAttribute(key)
        : domElement.setAttribute(key, value);
      break;
    case "xlinkActuate":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:actuate",
        value
      );
      break;
    case "xlinkArcrole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:arcrole",
        value
      );
      break;
    case "xlinkRole":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:role",
        value
      );
      break;
    case "xlinkShow":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:show",
        value
      );
      break;
    case "xlinkTitle":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:title",
        value
      );
      break;
    case "xlinkType":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/1999/xlink",
        "xlink:type",
        value
      );
      break;
    case "xmlBase":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:base",
        value
      );
      break;
    case "xmlLang":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:lang",
        value
      );
      break;
    case "xmlSpace":
      setValueForNamespacedAttribute(
        domElement,
        "http://www.w3.org/XML/1998/namespace",
        "xml:space",
        value
      );
      break;
    case "is":
      setValueForAttribute(domElement, "is", value);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (
        !(2 < key.length) ||
        ("o" !== key[0] && "O" !== key[0]) ||
        ("n" !== key[1] && "N" !== key[1])
      )
        (key = aliases.get(key) || key),
          setValueForAttribute(domElement, key, value);
  }
}
function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
  switch (key) {
    case "style":
      setValueForStyles(domElement, value, prevValue);
      break;
    case "dangerouslySetInnerHTML":
      if (null != value) {
        if ("object" !== typeof value || !("__html" in value))
          throw Error(formatProdErrorMessage(61));
        key = value.__html;
        if (null != key) {
          if (null != props.children) throw Error(formatProdErrorMessage(60));
          disableIEWorkarounds
            ? (domElement.innerHTML = key)
            : setInnerHTML$1(domElement, key);
        }
      }
      break;
    case "children":
      "string" === typeof value
        ? setTextContent(domElement, value)
        : "number" === typeof value && setTextContent(domElement, "" + value);
      break;
    case "onScroll":
      null != value && listenToNonDelegatedEvent("scroll", domElement);
      break;
    case "onScrollEnd":
      null != value && listenToNonDelegatedEvent("scrollend", domElement);
      break;
    case "onClick":
      null != value && (domElement.onclick = noop$1);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!registrationNameDependencies.hasOwnProperty(key))
        a: {
          if (
            "o" === key[0] &&
            "n" === key[1] &&
            ((props = key.endsWith("Capture")),
            (tag = key.slice(2, props ? key.length - 7 : void 0)),
            (prevValue = getFiberCurrentPropsFromNode(domElement)),
            (prevValue = null != prevValue ? prevValue[key] : null),
            "function" === typeof prevValue &&
              domElement.removeEventListener(tag, prevValue, props),
            "function" === typeof value)
          ) {
            "function" !== typeof prevValue &&
              null !== prevValue &&
              (key in domElement
                ? (domElement[key] = null)
                : domElement.hasAttribute(key) &&
                  domElement.removeAttribute(key));
            domElement.addEventListener(tag, value, props);
            break a;
          }
          key in domElement
            ? (domElement[key] = value)
            : !0 === value
            ? domElement.setAttribute(key, "")
            : setValueForAttribute(domElement, key, value);
        }
  }
}
function setInitialProperties(domElement, tag, props) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      listenToNonDelegatedEvent("invalid", domElement);
      var name = null,
        type = null,
        value = null,
        defaultValue = null,
        checked = null,
        defaultChecked = null;
      for (propKey in props)
        if (props.hasOwnProperty(propKey)) {
          var propValue = props[propKey];
          if (null != propValue)
            switch (propKey) {
              case "name":
                name = propValue;
                break;
              case "type":
                type = propValue;
                break;
              case "checked":
                checked = propValue;
                break;
              case "defaultChecked":
                defaultChecked = propValue;
                break;
              case "value":
                value = propValue;
                break;
              case "defaultValue":
                defaultValue = propValue;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (null != propValue)
                  throw Error(formatProdErrorMessage(137, tag));
                break;
              default:
                setProp(domElement, tag, propKey, propValue, props, null);
            }
        }
      initInput(
        domElement,
        value,
        defaultValue,
        checked,
        defaultChecked,
        type,
        name,
        !1
      );
      track(domElement);
      return;
    case "select":
      listenToNonDelegatedEvent("invalid", domElement);
      var propKey = (type = value = null);
      for (name in props)
        if (
          props.hasOwnProperty(name) &&
          ((defaultValue = props[name]), null != defaultValue)
        )
          switch (name) {
            case "value":
              value = defaultValue;
              break;
            case "defaultValue":
              type = defaultValue;
              break;
            case "multiple":
              propKey = defaultValue;
            default:
              setProp(domElement, tag, name, defaultValue, props, null);
          }
      tag = value;
      props = type;
      domElement.multiple = !!propKey;
      null != tag
        ? updateOptions(domElement, !!propKey, tag, !1)
        : null != props && updateOptions(domElement, !!propKey, props, !0);
      return;
    case "textarea":
      listenToNonDelegatedEvent("invalid", domElement);
      value = name = propKey = null;
      for (type in props)
        if (
          props.hasOwnProperty(type) &&
          ((defaultValue = props[type]), null != defaultValue)
        )
          switch (type) {
            case "value":
              propKey = defaultValue;
              break;
            case "defaultValue":
              name = defaultValue;
              break;
            case "children":
              value = defaultValue;
              break;
            case "dangerouslySetInnerHTML":
              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
              break;
            default:
              setProp(domElement, tag, type, defaultValue, props, null);
          }
      initTextarea(domElement, propKey, name, value);
      track(domElement);
      return;
    case "option":
      for (defaultValue in props)
        if (
          props.hasOwnProperty(defaultValue) &&
          ((propKey = props[defaultValue]), null != propKey)
        )
          switch (defaultValue) {
            case "selected":
              domElement.selected =
                propKey &&
                "function" !== typeof propKey &&
                "symbol" !== typeof propKey;
              break;
            default:
              setProp(domElement, tag, defaultValue, propKey, props, null);
          }
      return;
    case "dialog":
      listenToNonDelegatedEvent("cancel", domElement);
      listenToNonDelegatedEvent("close", domElement);
      break;
    case "iframe":
    case "object":
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "video":
    case "audio":
      for (propKey = 0; propKey < mediaEventTypes.length; propKey++)
        listenToNonDelegatedEvent(mediaEventTypes[propKey], domElement);
      break;
    case "image":
      listenToNonDelegatedEvent("error", domElement);
      listenToNonDelegatedEvent("load", domElement);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", domElement);
      break;
    case "embed":
    case "source":
    case "img":
    case "link":
      listenToNonDelegatedEvent("error", domElement),
        listenToNonDelegatedEvent("load", domElement);
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (checked in props)
        if (
          props.hasOwnProperty(checked) &&
          ((propKey = props[checked]), null != propKey)
        )
          switch (checked) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(formatProdErrorMessage(137, tag));
            default:
              setProp(domElement, tag, checked, propKey, props, null);
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (defaultChecked in props)
          props.hasOwnProperty(defaultChecked) &&
            ((propKey = props[defaultChecked]),
            null != propKey &&
              setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey,
                props,
                null
              ));
        return;
      }
  }
  for (value in props)
    props.hasOwnProperty(value) &&
      ((propKey = props[value]),
      null != propKey && setProp(domElement, tag, value, propKey, props, null));
}
function updateProperties(domElement, tag, lastProps, nextProps) {
  switch (tag) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var name = null,
        type = null,
        value = null,
        defaultValue = null,
        lastDefaultValue = null,
        checked = null,
        defaultChecked = null;
      for (propKey in lastProps) {
        var lastProp = lastProps[propKey];
        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
          switch (propKey) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              lastDefaultValue = lastProp;
            default:
              nextProps.hasOwnProperty(propKey) ||
                setProp(domElement, tag, propKey, null, nextProps, lastProp);
          }
      }
      for (var propKey$241 in nextProps) {
        var propKey = nextProps[propKey$241];
        lastProp = lastProps[propKey$241];
        if (
          nextProps.hasOwnProperty(propKey$241) &&
          (null != propKey || null != lastProp)
        )
          switch (propKey$241) {
            case "type":
              type = propKey;
              break;
            case "name":
              name = propKey;
              break;
            case "checked":
              checked = propKey;
              break;
            case "defaultChecked":
              defaultChecked = propKey;
              break;
            case "value":
              value = propKey;
              break;
            case "defaultValue":
              defaultValue = propKey;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              propKey !== lastProp &&
                setProp(
                  domElement,
                  tag,
                  propKey$241,
                  propKey,
                  nextProps,
                  lastProp
                );
          }
      }
      updateInput(
        domElement,
        value,
        defaultValue,
        lastDefaultValue,
        checked,
        defaultChecked,
        type,
        name
      );
      return;
    case "select":
      propKey = value = defaultValue = propKey$241 = null;
      for (type in lastProps)
        if (
          ((lastDefaultValue = lastProps[type]),
          lastProps.hasOwnProperty(type) && null != lastDefaultValue)
        )
          switch (type) {
            case "value":
              break;
            case "multiple":
              propKey = lastDefaultValue;
            default:
              nextProps.hasOwnProperty(type) ||
                setProp(
                  domElement,
                  tag,
                  type,
                  null,
                  nextProps,
                  lastDefaultValue
                );
          }
      for (name in nextProps)
        if (
          ((type = nextProps[name]),
          (lastDefaultValue = lastProps[name]),
          nextProps.hasOwnProperty(name) &&
            (null != type || null != lastDefaultValue))
        )
          switch (name) {
            case "value":
              propKey$241 = type;
              break;
            case "defaultValue":
              defaultValue = type;
              break;
            case "multiple":
              value = type;
            default:
              type !== lastDefaultValue &&
                setProp(
                  domElement,
                  tag,
                  name,
                  type,
                  nextProps,
                  lastDefaultValue
                );
          }
      tag = defaultValue;
      lastProps = value;
      nextProps = propKey;
      null != propKey$241
        ? updateOptions(domElement, !!lastProps, propKey$241, !1)
        : !!nextProps !== !!lastProps &&
          (null != tag
            ? updateOptions(domElement, !!lastProps, tag, !0)
            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
      return;
    case "textarea":
      propKey = propKey$241 = null;
      for (defaultValue in lastProps)
        if (
          ((name = lastProps[defaultValue]),
          lastProps.hasOwnProperty(defaultValue) &&
            null != name &&
            !nextProps.hasOwnProperty(defaultValue))
        )
          switch (defaultValue) {
            case "value":
              break;
            case "children":
              break;
            default:
              setProp(domElement, tag, defaultValue, null, nextProps, name);
          }
      for (value in nextProps)
        if (
          ((name = nextProps[value]),
          (type = lastProps[value]),
          nextProps.hasOwnProperty(value) && (null != name || null != type))
        )
          switch (value) {
            case "value":
              propKey$241 = name;
              break;
            case "defaultValue":
              propKey = name;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (null != name) throw Error(formatProdErrorMessage(91));
              break;
            default:
              name !== type &&
                setProp(domElement, tag, value, name, nextProps, type);
          }
      updateTextarea(domElement, propKey$241, propKey);
      return;
    case "option":
      for (var propKey$257 in lastProps)
        if (
          ((propKey$241 = lastProps[propKey$257]),
          lastProps.hasOwnProperty(propKey$257) &&
            null != propKey$241 &&
            !nextProps.hasOwnProperty(propKey$257))
        )
          switch (propKey$257) {
            case "selected":
              domElement.selected = !1;
              break;
            default:
              setProp(
                domElement,
                tag,
                propKey$257,
                null,
                nextProps,
                propKey$241
              );
          }
      for (lastDefaultValue in nextProps)
        if (
          ((propKey$241 = nextProps[lastDefaultValue]),
          (propKey = lastProps[lastDefaultValue]),
          nextProps.hasOwnProperty(lastDefaultValue) &&
            propKey$241 !== propKey &&
            (null != propKey$241 || null != propKey))
        )
          switch (lastDefaultValue) {
            case "selected":
              domElement.selected =
                propKey$241 &&
                "function" !== typeof propKey$241 &&
                "symbol" !== typeof propKey$241;
              break;
            default:
              setProp(
                domElement,
                tag,
                lastDefaultValue,
                propKey$241,
                nextProps,
                propKey
              );
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var propKey$262 in lastProps)
        (propKey$241 = lastProps[propKey$262]),
          lastProps.hasOwnProperty(propKey$262) &&
            null != propKey$241 &&
            !nextProps.hasOwnProperty(propKey$262) &&
            setProp(domElement, tag, propKey$262, null, nextProps, propKey$241);
      for (checked in nextProps)
        if (
          ((propKey$241 = nextProps[checked]),
          (propKey = lastProps[checked]),
          nextProps.hasOwnProperty(checked) &&
            propKey$241 !== propKey &&
            (null != propKey$241 || null != propKey))
        )
          switch (checked) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (null != propKey$241)
                throw Error(formatProdErrorMessage(137, tag));
              break;
            default:
              setProp(
                domElement,
                tag,
                checked,
                propKey$241,
                nextProps,
                propKey
              );
          }
      return;
    default:
      if (isCustomElement(tag)) {
        for (var propKey$267 in lastProps)
          (propKey$241 = lastProps[propKey$267]),
            lastProps.hasOwnProperty(propKey$267) &&
              null != propKey$241 &&
              !nextProps.hasOwnProperty(propKey$267) &&
              setPropOnCustomElement(
                domElement,
                tag,
                propKey$267,
                null,
                nextProps,
                propKey$241
              );
        for (defaultChecked in nextProps)
          (propKey$241 = nextProps[defaultChecked]),
            (propKey = lastProps[defaultChecked]),
            !nextProps.hasOwnProperty(defaultChecked) ||
              propKey$241 === propKey ||
              (null == propKey$241 && null == propKey) ||
              setPropOnCustomElement(
                domElement,
                tag,
                defaultChecked,
                propKey$241,
                nextProps,
                propKey
              );
        return;
      }
  }
  for (var propKey$272 in lastProps)
    (propKey$241 = lastProps[propKey$272]),
      lastProps.hasOwnProperty(propKey$272) &&
        null != propKey$241 &&
        !nextProps.hasOwnProperty(propKey$272) &&
        setProp(domElement, tag, propKey$272, null, nextProps, propKey$241);
  for (lastProp in nextProps)
    (propKey$241 = nextProps[lastProp]),
      (propKey = lastProps[lastProp]),
      !nextProps.hasOwnProperty(lastProp) ||
        propKey$241 === propKey ||
        (null == propKey$241 && null == propKey) ||
        setProp(domElement, tag, lastProp, propKey$241, nextProps, propKey);
}
var eventsEnabled = null,
  selectionInformation = null;
function getOwnerDocumentFromRootContainer(rootContainerElement) {
  return 9 === rootContainerElement.nodeType
    ? rootContainerElement
    : rootContainerElement.ownerDocument;
}
function getOwnHostContext(namespaceURI) {
  switch (namespaceURI) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function getChildHostContextProd(parentNamespace, type) {
  if (0 === parentNamespace)
    switch (type) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return 1 === parentNamespace && "foreignObject" === type
    ? 0
    : parentNamespace;
}
function beforeActiveInstanceBlur(internalInstanceHandle) {
  _enabled = !0;
  var target = selectionInformation.focusedElem,
    event = createEvent("beforeblur", !0);
  event._detachedInterceptFiber = internalInstanceHandle;
  target.dispatchEvent(event);
  _enabled = !1;
}
function shouldSetTextContent(type, props) {
  return (
    "textarea" === type ||
    "noscript" === type ||
    "string" === typeof props.children ||
    "number" === typeof props.children ||
    ("object" === typeof props.dangerouslySetInnerHTML &&
      null !== props.dangerouslySetInnerHTML &&
      null != props.dangerouslySetInnerHTML.__html)
  );
}
var currentPopstateTransitionEvent = null;
function shouldAttemptEagerTransition() {
  var event = window.event;
  if (event && "popstate" === event.type) {
    if (event === currentPopstateTransitionEvent) return !1;
    currentPopstateTransitionEvent = event;
    return !0;
  }
  currentPopstateTransitionEvent = null;
  return !1;
}
var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
  localPromise = "function" === typeof Promise ? Promise : void 0,
  localRequestAnimationFrame =
    "function" === typeof requestAnimationFrame
      ? requestAnimationFrame
      : scheduleTimeout;
function getInstanceFromScope(scopeInstance) {
  scopeInstance = scopeInstance[internalInstanceKey] || null;
  return scopeInstance;
}
var scheduleMicrotask =
  "function" === typeof queueMicrotask
    ? queueMicrotask
    : "undefined" !== typeof localPromise
    ? function (callback) {
        return localPromise
          .resolve(null)
          .then(callback)
          .catch(handleErrorInNextTick);
      }
    : scheduleTimeout;
function handleErrorInNextTick(error) {
  setTimeout(function () {
    throw error;
  });
}
function createEvent(type, bubbles) {
  var event = document.createEvent("Event");
  event.initEvent(type, bubbles, !1);
  return event;
}
function dispatchAfterDetachedBlur(target) {
  var event = createEvent("afterblur", !1);
  event.relatedTarget = target;
  document.dispatchEvent(event);
}
function clearSuspenseBoundary(parentInstance, suspenseInstance) {
  var node = suspenseInstance,
    depth = 0;
  do {
    var nextNode = node.nextSibling;
    parentInstance.removeChild(node);
    if (nextNode && 8 === nextNode.nodeType)
      if (((node = nextNode.data), "/$" === node)) {
        if (0 === depth) {
          parentInstance.removeChild(nextNode);
          retryIfBlockedOn(suspenseInstance);
          return;
        }
        depth--;
      } else ("$" !== node && "$?" !== node && "$!" !== node) || depth++;
    node = nextNode;
  } while (node);
  retryIfBlockedOn(suspenseInstance);
}
function clearContainer(container) {
  var nodeType = container.nodeType;
  if (9 === nodeType) clearContainerSparingly(container);
  else if (1 === nodeType)
    switch (container.nodeName) {
      case "HEAD":
      case "HTML":
      case "BODY":
        clearContainerSparingly(container);
        break;
      default:
        container.textContent = "";
    }
}
function clearContainerSparingly(container) {
  var nextNode = container.firstChild;
  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
  for (; nextNode; ) {
    var node = nextNode;
    nextNode = nextNode.nextSibling;
    switch (node.nodeName) {
      case "HTML":
      case "HEAD":
      case "BODY":
        clearContainerSparingly(node);
        detachDeletedInstance(node);
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if ("stylesheet" === node.rel.toLowerCase()) continue;
    }
    container.removeChild(node);
  }
}
function canHydrateInstance(instance, type, props, inRootOrSingleton) {
  for (; 1 === instance.nodeType; ) {
    var anyProps = props;
    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
      if (
        !inRootOrSingleton &&
        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
      )
        break;
    } else if (!inRootOrSingleton)
      if ("input" === type && "hidden" === instance.type) {
        var name = null == anyProps.name ? null : "" + anyProps.name;
        if (
          "hidden" === anyProps.type &&
          instance.getAttribute("name") === name
        )
          return instance;
      } else return instance;
    else if (!instance[internalHoistableMarker])
      switch (type) {
        case "meta":
          if (!instance.hasAttribute("itemprop")) break;
          return instance;
        case "link":
          name = instance.getAttribute("rel");
          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
            break;
          else if (
            name !== anyProps.rel ||
            instance.getAttribute("href") !==
              (null == anyProps.href ? null : anyProps.href) ||
            instance.getAttribute("crossorigin") !==
              (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) ||
            instance.getAttribute("title") !==
              (null == anyProps.title ? null : anyProps.title)
          )
            break;
          return instance;
        case "style":
          if (instance.hasAttribute("data-precedence")) break;
          return instance;
        case "script":
          name = instance.getAttribute("src");
          if (
            (name !== (null == anyProps.src ? null : anyProps.src) ||
              instance.getAttribute("type") !==
                (null == anyProps.type ? null : anyProps.type) ||
              instance.getAttribute("crossorigin") !==
                (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) &&
            name &&
            instance.hasAttribute("async") &&
            !instance.hasAttribute("itemprop")
          )
            break;
          return instance;
        default:
          return instance;
      }
    instance = getNextHydratableSibling(instance);
    if (null === instance) break;
  }
  return null;
}
function canHydrateTextInstance(instance, text, inRootOrSingleton) {
  if ("" === text) return null;
  for (; 3 !== instance.nodeType; ) {
    if (
      (1 !== instance.nodeType ||
        "INPUT" !== instance.nodeName ||
        "hidden" !== instance.type) &&
      !inRootOrSingleton
    )
      return null;
    instance = getNextHydratableSibling(instance);
    if (null === instance) return null;
  }
  return instance;
}
function getNextHydratable(node) {
  for (; null != node; node = node.nextSibling) {
    var nodeType = node.nodeType;
    if (1 === nodeType || 3 === nodeType) break;
    if (8 === nodeType) {
      nodeType = node.data;
      if (
        "$" === nodeType ||
        "$!" === nodeType ||
        "$?" === nodeType ||
        "F!" === nodeType ||
        "F" === nodeType
      )
        break;
      if ("/$" === nodeType) return null;
    }
  }
  return node;
}
function getNextHydratableSibling(instance) {
  return getNextHydratable(instance.nextSibling);
}
function hydrateInstance(
  instance,
  type,
  props,
  hostContext,
  internalInstanceHandle
) {
  instance[internalInstanceKey] = internalInstanceHandle;
  instance[internalPropsKey] = props;
  switch (type) {
    case "dialog":
      listenToNonDelegatedEvent("cancel", instance);
      listenToNonDelegatedEvent("close", instance);
      break;
    case "iframe":
    case "object":
    case "embed":
      listenToNonDelegatedEvent("load", instance);
      break;
    case "video":
    case "audio":
      for (hostContext = 0; hostContext < mediaEventTypes.length; hostContext++)
        listenToNonDelegatedEvent(mediaEventTypes[hostContext], instance);
      break;
    case "source":
      listenToNonDelegatedEvent("error", instance);
      break;
    case "img":
    case "image":
    case "link":
      listenToNonDelegatedEvent("error", instance);
      listenToNonDelegatedEvent("load", instance);
      break;
    case "details":
      listenToNonDelegatedEvent("toggle", instance);
      break;
    case "input":
      listenToNonDelegatedEvent("invalid", instance);
      initInput(
        instance,
        props.value,
        props.defaultValue,
        props.checked,
        props.defaultChecked,
        props.type,
        props.name,
        !0
      );
      track(instance);
      break;
    case "select":
      listenToNonDelegatedEvent("invalid", instance);
      break;
    case "textarea":
      listenToNonDelegatedEvent("invalid", instance),
        initTextarea(instance, props.value, props.defaultValue, props.children),
        track(instance);
  }
  hostContext = props.children;
  ("string" !== typeof hostContext && "number" !== typeof hostContext) ||
    instance.textContent === "" + hostContext ||
    (!0 !== props.suppressHydrationWarning &&
      ((internalInstanceHandle = instance.textContent),
      normalizeMarkupForTextOrAttribute(hostContext),
      normalizeMarkupForTextOrAttribute(internalInstanceHandle)),
    "body" !== type && (instance.textContent = hostContext));
  null != props.onScroll && listenToNonDelegatedEvent("scroll", instance);
  null != props.onScrollEnd && listenToNonDelegatedEvent("scrollend", instance);
  null != props.onClick && (instance.onclick = noop$1);
}
function getParentSuspenseInstance(targetInstance) {
  targetInstance = targetInstance.previousSibling;
  for (var depth = 0; targetInstance; ) {
    if (8 === targetInstance.nodeType) {
      var data = targetInstance.data;
      if ("$" === data || "$!" === data || "$?" === data) {
        if (0 === depth) return targetInstance;
        depth--;
      } else "/$" === data && depth++;
    }
    targetInstance = targetInstance.previousSibling;
  }
  return null;
}
function requestPostPaintCallback(callback) {
  localRequestAnimationFrame(function () {
    localRequestAnimationFrame(function (time) {
      return callback(time);
    });
  });
}
function resolveSingletonInstance(type, props, rootContainerInstance) {
  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
  switch (type) {
    case "html":
      type = props.documentElement;
      if (!type) throw Error(formatProdErrorMessage(452));
      return type;
    case "head":
      type = props.head;
      if (!type) throw Error(formatProdErrorMessage(453));
      return type;
    case "body":
      type = props.body;
      if (!type) throw Error(formatProdErrorMessage(454));
      return type;
    default:
      throw Error(formatProdErrorMessage(451));
  }
}
var preloadPropsMap = new Map(),
  preconnectsSet = new Set();
function getHoistableRoot(container) {
  return "function" === typeof container.getRootNode
    ? container.getRootNode()
    : container.ownerDocument;
}
var ReactDOMClientDispatcher = {
  prefetchDNS: prefetchDNS$1,
  preconnect: preconnect$1,
  preload: preload$1,
  preloadModule: preloadModule$1,
  preinitStyle: preinitStyle,
  preinitScript: preinitScript,
  preinitModuleScript: preinitModuleScript
};
function preconnectAs(rel, href, crossOrigin) {
  var ownerDocument = document;
  if ("string" === typeof href && href) {
    var limitedEscapedHref =
      escapeSelectorAttributeValueInsideDoubleQuotes(href);
    limitedEscapedHref =
      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
    "string" === typeof crossOrigin &&
      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
    preconnectsSet.has(limitedEscapedHref) ||
      (preconnectsSet.add(limitedEscapedHref),
      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
      null === ownerDocument.querySelector(limitedEscapedHref) &&
        ((href = ownerDocument.createElement("link")),
        setInitialProperties(href, "link", rel),
        markNodeAsHoistable(href),
        ownerDocument.head.appendChild(href)));
  }
}
function prefetchDNS$1(href) {
  preconnectAs("dns-prefetch", href, null);
}
function preconnect$1(href, crossOrigin) {
  preconnectAs("preconnect", href, crossOrigin);
}
function preload$1(href, as, options) {
  var ownerDocument = document;
  if (href && as && ownerDocument) {
    var preloadSelector =
      'link[rel="preload"][as="' +
      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
      '"]';
    "image" === as
      ? options && options.imageSrcSet
        ? ((preloadSelector +=
            '[imagesrcset="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(
              options.imageSrcSet
            ) +
            '"]'),
          "string" === typeof options.imageSizes &&
            (preloadSelector +=
              '[imagesizes="' +
              escapeSelectorAttributeValueInsideDoubleQuotes(
                options.imageSizes
              ) +
              '"]'))
        : (preloadSelector +=
            '[href="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
            '"]')
      : (preloadSelector +=
          '[href="' +
          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
          '"]');
    var key = preloadSelector;
    switch (as) {
      case "style":
        key = getStyleKey(href);
        break;
      case "script":
        key = getScriptKey(href);
    }
    preloadPropsMap.has(key) ||
      ((href = assign(
        {
          rel: "preload",
          href:
            "image" === as && options && options.imageSrcSet ? void 0 : href,
          as: as
        },
        options
      )),
      preloadPropsMap.set(key, href),
      null !== ownerDocument.querySelector(preloadSelector) ||
        ("style" === as &&
          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
        ("script" === as &&
          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
        ((as = ownerDocument.createElement("link")),
        setInitialProperties(as, "link", href),
        markNodeAsHoistable(as),
        ownerDocument.head.appendChild(as)));
  }
}
function preloadModule$1(href, options) {
  var ownerDocument = document;
  if (href) {
    var as = options && "string" === typeof options.as ? options.as : "script",
      preloadSelector =
        'link[rel="modulepreload"][as="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
        '"][href="' +
        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
        '"]',
      key = preloadSelector;
    switch (as) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        key = getScriptKey(href);
    }
    if (
      !preloadPropsMap.has(key) &&
      ((href = assign({ rel: "modulepreload", href: href }, options)),
      preloadPropsMap.set(key, href),
      null === ownerDocument.querySelector(preloadSelector))
    ) {
      switch (as) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
            return;
      }
      as = ownerDocument.createElement("link");
      setInitialProperties(as, "link", href);
      markNodeAsHoistable(as);
      ownerDocument.head.appendChild(as);
    }
  }
}
function preinitStyle(href, precedence, options) {
  var ownerDocument = document;
  if (href) {
    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles,
      key = getStyleKey(href);
    precedence = precedence || "default";
    var resource = styles.get(key);
    if (!resource) {
      var state = { loading: 0, preload: null };
      if (
        (resource = ownerDocument.querySelector(
          getStylesheetSelectorFromKey(key)
        ))
      )
        state.loading = 5;
      else {
        href = assign(
          { rel: "stylesheet", href: href, "data-precedence": precedence },
          options
        );
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForStylesheet(href, options);
        var link = (resource = ownerDocument.createElement("link"));
        markNodeAsHoistable(link);
        setInitialProperties(link, "link", href);
        link._p = new Promise(function (resolve, reject) {
          link.onload = resolve;
          link.onerror = reject;
        });
        link.addEventListener("load", function () {
          state.loading |= 1;
        });
        link.addEventListener("error", function () {
          state.loading |= 2;
        });
        state.loading |= 4;
        insertStylesheet(resource, precedence, ownerDocument);
      }
      resource = {
        type: "stylesheet",
        instance: resource,
        count: 1,
        state: state
      };
      styles.set(key, resource);
    }
  }
}
function preinitScript(src, options) {
  var ownerDocument = document;
  if (src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
      key = getScriptKey(src),
      resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = assign({ src: src, async: !0 }, options)),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function preinitModuleScript(src, options) {
  var ownerDocument = document;
  if (src) {
    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
      key = getScriptKey(src),
      resource = scripts.get(key);
    resource ||
      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
      resource ||
        ((src = assign({ src: src, async: !0, type: "module" }, options)),
        (options = preloadPropsMap.get(key)) &&
          adoptPreloadPropsForScript(src, options),
        (resource = ownerDocument.createElement("script")),
        markNodeAsHoistable(resource),
        setInitialProperties(resource, "link", src),
        ownerDocument.head.appendChild(resource)),
      (resource = {
        type: "script",
        instance: resource,
        count: 1,
        state: null
      }),
      scripts.set(key, resource));
  }
}
function getResource(type, currentProps, pendingProps) {
  currentProps = (currentProps = rootInstanceStackCursor.current)
    ? getHoistableRoot(currentProps)
    : null;
  if (!currentProps) throw Error(formatProdErrorMessage(446));
  switch (type) {
    case "meta":
    case "title":
      return null;
    case "style":
      return "string" === typeof pendingProps.precedence &&
        "string" === typeof pendingProps.href
        ? ((pendingProps = getStyleKey(pendingProps.href)),
          (currentProps = getResourcesFromRoot(currentProps).hoistableStyles),
          (type = currentProps.get(pendingProps)),
          type ||
            ((type = { type: "style", instance: null, count: 0, state: null }),
            currentProps.set(pendingProps, type)),
          type)
        : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (
        "stylesheet" === pendingProps.rel &&
        "string" === typeof pendingProps.href &&
        "string" === typeof pendingProps.precedence
      ) {
        type = getStyleKey(pendingProps.href);
        var styles$280 = getResourcesFromRoot(currentProps).hoistableStyles,
          resource$281 = styles$280.get(type);
        resource$281 ||
          ((currentProps = currentProps.ownerDocument || currentProps),
          (resource$281 = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }),
          styles$280.set(type, resource$281),
          preloadPropsMap.has(type) ||
            preloadStylesheet(
              currentProps,
              type,
              {
                rel: "preload",
                as: "style",
                href: pendingProps.href,
                crossOrigin: pendingProps.crossOrigin,
                integrity: pendingProps.integrity,
                media: pendingProps.media,
                hrefLang: pendingProps.hrefLang,
                referrerPolicy: pendingProps.referrerPolicy
              },
              resource$281.state
            ));
        return resource$281;
      }
      return null;
    case "script":
      return "string" === typeof pendingProps.src && !0 === pendingProps.async
        ? ((pendingProps = getScriptKey(pendingProps.src)),
          (currentProps = getResourcesFromRoot(currentProps).hoistableScripts),
          (type = currentProps.get(pendingProps)),
          type ||
            ((type = { type: "script", instance: null, count: 0, state: null }),
            currentProps.set(pendingProps, type)),
          type)
        : { type: "void", instance: null, count: 0, state: null };
    default:
      throw Error(formatProdErrorMessage(444, type));
  }
}
function getStyleKey(href) {
  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
}
function getStylesheetSelectorFromKey(key) {
  return 'link[rel="stylesheet"][' + key + "]";
}
function stylesheetPropsFromRawProps(rawProps) {
  return assign({}, rawProps, {
    "data-precedence": rawProps.precedence,
    precedence: null
  });
}
function preloadStylesheet(ownerDocument, key, preloadProps, state) {
  preloadPropsMap.set(key, preloadProps);
  ownerDocument.querySelector(getStylesheetSelectorFromKey(key)) ||
    (ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
      ? (state.loading = 1)
      : ((key = ownerDocument.createElement("link")),
        (state.preload = key),
        key.addEventListener("load", function () {
          return (state.loading |= 1);
        }),
        key.addEventListener("error", function () {
          return (state.loading |= 2);
        }),
        setInitialProperties(key, "link", preloadProps),
        markNodeAsHoistable(key),
        ownerDocument.head.appendChild(key)));
}
function getScriptKey(src) {
  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
}
function getScriptSelectorFromKey(key) {
  return "script[async]" + key;
}
function acquireResource(hoistableRoot, resource, props) {
  resource.count++;
  if (null === resource.instance)
    switch (resource.type) {
      case "style":
        var instance = hoistableRoot.querySelector(
          'style[data-href~="' +
            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
            '"]'
        );
        if (instance)
          return (
            (resource.instance = instance),
            markNodeAsHoistable(instance),
            instance
          );
        var styleProps = assign({}, props, {
          "data-href": props.href,
          "data-precedence": props.precedence,
          href: null,
          precedence: null
        });
        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
          "style"
        );
        markNodeAsHoistable(instance);
        setInitialProperties(instance, "style", styleProps);
        insertStylesheet(instance, props.precedence, hoistableRoot);
        return (resource.instance = instance);
      case "stylesheet":
        styleProps = getStyleKey(props.href);
        var instance$285 = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(styleProps)
        );
        if (instance$285)
          return (
            (resource.state.loading |= 4),
            (resource.instance = instance$285),
            markNodeAsHoistable(instance$285),
            instance$285
          );
        instance = stylesheetPropsFromRawProps(props);
        (styleProps = preloadPropsMap.get(styleProps)) &&
          adoptPreloadPropsForStylesheet(instance, styleProps);
        instance$285 = (
          hoistableRoot.ownerDocument || hoistableRoot
        ).createElement("link");
        markNodeAsHoistable(instance$285);
        var linkInstance = instance$285;
        linkInstance._p = new Promise(function (resolve, reject) {
          linkInstance.onload = resolve;
          linkInstance.onerror = reject;
        });
        setInitialProperties(instance$285, "link", instance);
        resource.state.loading |= 4;
        insertStylesheet(instance$285, props.precedence, hoistableRoot);
        return (resource.instance = instance$285);
      case "script":
        instance$285 = getScriptKey(props.src);
        if (
          (styleProps = hoistableRoot.querySelector(
            getScriptSelectorFromKey(instance$285)
          ))
        )
          return (
            (resource.instance = styleProps),
            markNodeAsHoistable(styleProps),
            styleProps
          );
        instance = props;
        if ((styleProps = preloadPropsMap.get(instance$285)))
          (instance = assign({}, props)),
            adoptPreloadPropsForScript(instance, styleProps);
        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
        styleProps = hoistableRoot.createElement("script");
        markNodeAsHoistable(styleProps);
        setInitialProperties(styleProps, "link", instance);
        hoistableRoot.head.appendChild(styleProps);
        return (resource.instance = styleProps);
      case "void":
        return null;
      default:
        throw Error(formatProdErrorMessage(443, resource.type));
    }
  else
    "stylesheet" === resource.type &&
      0 === (resource.state.loading & 4) &&
      ((instance = resource.instance),
      (resource.state.loading |= 4),
      insertStylesheet(instance, props.precedence, hoistableRoot));
  return resource.instance;
}
function insertStylesheet(instance, precedence, root) {
  for (
    var nodes = root.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      last = nodes.length ? nodes[nodes.length - 1] : null,
      prior = last,
      i = 0;
    i < nodes.length;
    i++
  ) {
    var node = nodes[i];
    if (node.dataset.precedence === precedence) prior = node;
    else if (prior !== last) break;
  }
  prior
    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
    : ((precedence = 9 === root.nodeType ? root.head : root),
      precedence.insertBefore(instance, precedence.firstChild));
}
function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
  null == stylesheetProps.crossOrigin &&
    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
  null == stylesheetProps.referrerPolicy &&
    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
}
function adoptPreloadPropsForScript(scriptProps, preloadProps) {
  null == scriptProps.crossOrigin &&
    (scriptProps.crossOrigin = preloadProps.crossOrigin);
  null == scriptProps.referrerPolicy &&
    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
  null == scriptProps.integrity &&
    (scriptProps.integrity = preloadProps.integrity);
}
var tagCaches = null;
function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
  if (null === tagCaches) {
    var cache = new Map();
    var caches = (tagCaches = new Map());
    caches.set(ownerDocument, cache);
  } else
    (caches = tagCaches),
      (cache = caches.get(ownerDocument)),
      cache || ((cache = new Map()), caches.set(ownerDocument, cache));
  if (cache.has(type)) return cache;
  cache.set(type, null);
  ownerDocument = ownerDocument.getElementsByTagName(type);
  for (caches = 0; caches < ownerDocument.length; caches++) {
    var node = ownerDocument[caches];
    if (
      !(
        node[internalHoistableMarker] ||
        node[internalInstanceKey] ||
        ("link" === type && "stylesheet" === node.getAttribute("rel"))
      ) &&
      "http://www.w3.org/2000/svg" !== node.namespaceURI
    ) {
      var nodeKey = node.getAttribute(keyAttribute) || "";
      nodeKey = type + nodeKey;
      var existing = cache.get(nodeKey);
      existing ? existing.push(node) : cache.set(nodeKey, [node]);
    }
  }
  return cache;
}
function mountHoistable(hoistableRoot, type, instance) {
  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
  hoistableRoot.head.insertBefore(
    instance,
    "title" === type ? hoistableRoot.querySelector("head > title") : null
  );
}
function isHostHoistableType(type, props, hostContext) {
  if (1 === hostContext || null != props.itemProp) return !1;
  switch (type) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (
        "string" !== typeof props.precedence ||
        "string" !== typeof props.href ||
        "" === props.href
      )
        break;
      return !0;
    case "link":
      if (
        "string" !== typeof props.rel ||
        "string" !== typeof props.href ||
        "" === props.href ||
        props.onLoad ||
        props.onError
      )
        break;
      switch (props.rel) {
        case "stylesheet":
          return (
            (type = props.disabled),
            "string" === typeof props.precedence && null == type
          );
        default:
          return !0;
      }
    case "script":
      if (
        !0 === props.async &&
        !props.onLoad &&
        !props.onError &&
        "string" === typeof props.src &&
        props.src
      )
        return !0;
  }
  return !1;
}
var suspendedState = null;
function noop() {}
function suspendResource(hoistableRoot, resource, props) {
  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
  var state = suspendedState;
  if (
    "stylesheet" === resource.type &&
    ("string" !== typeof props.media ||
      !1 !== matchMedia(props.media).matches) &&
    0 === (resource.state.loading & 4)
  ) {
    if (null === resource.instance) {
      var key = getStyleKey(props.href),
        instance = hoistableRoot.querySelector(
          getStylesheetSelectorFromKey(key)
        );
      if (instance) {
        hoistableRoot = instance._p;
        null !== hoistableRoot &&
          "object" === typeof hoistableRoot &&
          "function" === typeof hoistableRoot.then &&
          (state.count++,
          (state = onUnsuspend.bind(state)),
          hoistableRoot.then(state, state));
        resource.state.loading |= 4;
        resource.instance = instance;
        markNodeAsHoistable(instance);
        return;
      }
      instance = hoistableRoot.ownerDocument || hoistableRoot;
      props = stylesheetPropsFromRawProps(props);
      (key = preloadPropsMap.get(key)) &&
        adoptPreloadPropsForStylesheet(props, key);
      instance = instance.createElement("link");
      markNodeAsHoistable(instance);
      var linkInstance = instance;
      linkInstance._p = new Promise(function (resolve, reject) {
        linkInstance.onload = resolve;
        linkInstance.onerror = reject;
      });
      setInitialProperties(instance, "link", props);
      resource.instance = instance;
    }
    null === state.stylesheets && (state.stylesheets = new Map());
    state.stylesheets.set(resource, hoistableRoot);
    (hoistableRoot = resource.state.preload) &&
      0 === (resource.state.loading & 3) &&
      (state.count++,
      (resource = onUnsuspend.bind(state)),
      hoistableRoot.addEventListener("load", resource),
      hoistableRoot.addEventListener("error", resource));
  }
}
function waitForCommitToBeReady() {
  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
  var state = suspendedState;
  state.stylesheets &&
    0 === state.count &&
    insertSuspendedStylesheets(state, state.stylesheets);
  return 0 < state.count
    ? function (commit) {
        var stylesheetTimer = setTimeout(function () {
          state.stylesheets &&
            insertSuspendedStylesheets(state, state.stylesheets);
          if (state.unsuspend) {
            var unsuspend = state.unsuspend;
            state.unsuspend = null;
            unsuspend();
          }
        }, 6e4);
        state.unsuspend = commit;
        return function () {
          state.unsuspend = null;
          clearTimeout(stylesheetTimer);
        };
      }
    : null;
}
function onUnsuspend() {
  this.count--;
  if (0 === this.count)
    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
    else if (this.unsuspend) {
      var unsuspend = this.unsuspend;
      this.unsuspend = null;
      unsuspend();
    }
}
var precedencesByRoot = null;
function insertSuspendedStylesheets(state, resources) {
  state.stylesheets = null;
  null !== state.unsuspend &&
    (state.count++,
    (precedencesByRoot = new Map()),
    resources.forEach(insertStylesheetIntoRoot, state),
    (precedencesByRoot = null),
    onUnsuspend.call(state));
}
function insertStylesheetIntoRoot(root, resource) {
  if (!(resource.state.loading & 4)) {
    var precedences = precedencesByRoot.get(root);
    if (precedences) var last = precedences.get(null);
    else {
      precedences = new Map();
      precedencesByRoot.set(root, precedences);
      for (
        var nodes = root.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ),
          i = 0;
        i < nodes.length;
        i++
      ) {
        var node = nodes[i];
        if (
          "link" === node.nodeName ||
          "not all" !== node.getAttribute("media")
        )
          precedences.set(node.dataset.precedence, node), (last = node);
      }
      last && precedences.set(null, last);
    }
    nodes = resource.instance;
    node = nodes.getAttribute("data-precedence");
    i = precedences.get(node) || last;
    i === last && precedences.set(null, nodes);
    precedences.set(node, nodes);
    this.count++;
    last = onUnsuspend.bind(this);
    nodes.addEventListener("load", last);
    nodes.addEventListener("error", last);
    i
      ? i.parentNode.insertBefore(nodes, i.nextSibling)
      : ((root = 9 === root.nodeType ? root.head : root),
        root.insertBefore(nodes, root.firstChild));
    resource.state.loading |= 4;
  }
}
var randomKey = Math.random().toString(36).slice(2),
  internalInstanceKey = "__reactFiber$" + randomKey,
  internalPropsKey = "__reactProps$" + randomKey,
  internalContainerInstanceKey = "__reactContainer$" + randomKey,
  internalEventHandlersKey = "__reactEvents$" + randomKey,
  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
  internalEventHandlesSetKey = "__reactHandles$" + randomKey,
  internalRootNodeResourcesKey = "__reactResources$" + randomKey,
  internalHoistableMarker = "__reactMarker$" + randomKey;
function detachDeletedInstance(node) {
  delete node[internalInstanceKey];
  delete node[internalPropsKey];
  delete node[internalEventHandlersKey];
  delete node[internalEventHandlerListenersKey];
  delete node[internalEventHandlesSetKey];
}
function getClosestInstanceFromNode(targetNode) {
  var targetInst = targetNode[internalInstanceKey];
  if (targetInst) return targetInst;
  for (var parentNode = targetNode.parentNode; parentNode; ) {
    if (
      (targetInst =
        parentNode[internalContainerInstanceKey] ||
        parentNode[internalInstanceKey])
    ) {
      parentNode = targetInst.alternate;
      if (
        null !== targetInst.child ||
        (null !== parentNode && null !== parentNode.child)
      )
        for (
          targetNode = getParentSuspenseInstance(targetNode);
          null !== targetNode;

        ) {
          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
          targetNode = getParentSuspenseInstance(targetNode);
        }
      return targetInst;
    }
    targetNode = parentNode;
    parentNode = targetNode.parentNode;
  }
  return null;
}
function getInstanceFromNode(node) {
  if (
    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
  ) {
    var tag = node.tag;
    if (
      5 === tag ||
      6 === tag ||
      13 === tag ||
      26 === tag ||
      27 === tag ||
      3 === tag
    )
      return node;
  }
  return null;
}
function getNodeFromInstance(inst) {
  var tag = inst.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
  throw Error(formatProdErrorMessage(33));
}
function getFiberCurrentPropsFromNode(node) {
  return node[internalPropsKey] || null;
}
function getEventListenerSet(node) {
  var elementListenerSet = node[internalEventHandlersKey];
  void 0 === elementListenerSet &&
    (elementListenerSet = node[internalEventHandlersKey] = new Set());
  return elementListenerSet;
}
function addEventHandleToTarget(target, eventHandle) {
  var eventHandles = target[internalEventHandlesSetKey];
  void 0 === eventHandles &&
    (eventHandles = target[internalEventHandlesSetKey] = new Set());
  eventHandles.add(eventHandle);
}
function doesTargetHaveEventHandle(target, eventHandle) {
  target = target[internalEventHandlesSetKey];
  return void 0 === target ? !1 : target.has(eventHandle);
}
function getResourcesFromRoot(root) {
  var resources = root[internalRootNodeResourcesKey];
  resources ||
    (resources = root[internalRootNodeResourcesKey] =
      { hoistableStyles: new Map(), hoistableScripts: new Map() });
  return resources;
}
function markNodeAsHoistable(node) {
  node[internalHoistableMarker] = !0;
}
var hasScheduledReplayAttempt = !1,
  queuedFocus = null,
  queuedDrag = null,
  queuedMouse = null,
  queuedPointers = new Map(),
  queuedPointerCaptures = new Map(),
  queuedExplicitHydrationTargets = [],
  discreteReplayableEvents =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    );
function clearIfContinuousEvent(domEventName, nativeEvent) {
  switch (domEventName) {
    case "focusin":
    case "focusout":
      queuedFocus = null;
      break;
    case "dragenter":
    case "dragleave":
      queuedDrag = null;
      break;
    case "mouseover":
    case "mouseout":
      queuedMouse = null;
      break;
    case "pointerover":
    case "pointerout":
      queuedPointers.delete(nativeEvent.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      queuedPointerCaptures.delete(nativeEvent.pointerId);
  }
}
function accumulateOrCreateContinuousQueuedReplayableEvent(
  existingQueuedEvent,
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (
    null === existingQueuedEvent ||
    existingQueuedEvent.nativeEvent !== nativeEvent
  )
    return (
      (existingQueuedEvent = {
        blockedOn: blockedOn,
        domEventName: domEventName,
        eventSystemFlags: eventSystemFlags,
        nativeEvent: nativeEvent,
        targetContainers: [targetContainer]
      }),
      null !== blockedOn &&
        ((blockedOn = getInstanceFromNode(blockedOn)),
        null !== blockedOn && attemptContinuousHydration(blockedOn)),
      existingQueuedEvent
    );
  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
  blockedOn = existingQueuedEvent.targetContainers;
  null !== targetContainer &&
    -1 === blockedOn.indexOf(targetContainer) &&
    blockedOn.push(targetContainer);
  return existingQueuedEvent;
}
function queueIfContinuousEvent(
  blockedOn,
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  switch (domEventName) {
    case "focusin":
      return (
        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedFocus,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "dragenter":
      return (
        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedDrag,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "mouseover":
      return (
        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedMouse,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )),
        !0
      );
    case "pointerover":
      var pointerId = nativeEvent.pointerId;
      queuedPointers.set(
        pointerId,
        accumulateOrCreateContinuousQueuedReplayableEvent(
          queuedPointers.get(pointerId) || null,
          blockedOn,
          domEventName,
          eventSystemFlags,
          targetContainer,
          nativeEvent
        )
      );
      return !0;
    case "gotpointercapture":
      return (
        (pointerId = nativeEvent.pointerId),
        queuedPointerCaptures.set(
          pointerId,
          accumulateOrCreateContinuousQueuedReplayableEvent(
            queuedPointerCaptures.get(pointerId) || null,
            blockedOn,
            domEventName,
            eventSystemFlags,
            targetContainer,
            nativeEvent
          )
        ),
        !0
      );
  }
  return !1;
}
function attemptExplicitHydrationTarget(queuedTarget) {
  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
  if (null !== targetInst) {
    var nearestMounted = getNearestMountedFiber(targetInst);
    if (null !== nearestMounted)
      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
        if (
          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
          null !== targetInst)
        ) {
          queuedTarget.blockedOn = targetInst;
          runWithPriority(queuedTarget.priority, function () {
            if (13 === nearestMounted.tag) {
              var lane = requestUpdateLane(nearestMounted),
                root = enqueueConcurrentRenderForLane(nearestMounted, lane);
              null !== root &&
                scheduleUpdateOnFiber(root, nearestMounted, lane);
              markRetryLaneIfNotHydrated(nearestMounted, lane);
            }
          });
          return;
        }
      } else if (
        3 === targetInst &&
        nearestMounted.stateNode.current.memoizedState.isDehydrated
      ) {
        queuedTarget.blockedOn =
          3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        return;
      }
  }
  queuedTarget.blockedOn = null;
}
function attemptReplayContinuousQueuedEvent(queuedEvent) {
  if (null !== queuedEvent.blockedOn) return !1;
  for (
    var targetContainers = queuedEvent.targetContainers;
    0 < targetContainers.length;

  ) {
    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
    if (null === nextBlockedOn) {
      nextBlockedOn = queuedEvent.nativeEvent;
      var nativeEventClone = new nextBlockedOn.constructor(
        nextBlockedOn.type,
        nextBlockedOn
      );
      currentReplayingEvent = nativeEventClone;
      nextBlockedOn.target.dispatchEvent(nativeEventClone);
      currentReplayingEvent = null;
    } else
      return (
        (targetContainers = getInstanceFromNode(nextBlockedOn)),
        null !== targetContainers &&
          attemptContinuousHydration(targetContainers),
        (queuedEvent.blockedOn = nextBlockedOn),
        !1
      );
    targetContainers.shift();
  }
  return !0;
}
function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
}
function replayUnblockedEvents() {
  hasScheduledReplayAttempt = !1;
  null !== queuedFocus &&
    attemptReplayContinuousQueuedEvent(queuedFocus) &&
    (queuedFocus = null);
  null !== queuedDrag &&
    attemptReplayContinuousQueuedEvent(queuedDrag) &&
    (queuedDrag = null);
  null !== queuedMouse &&
    attemptReplayContinuousQueuedEvent(queuedMouse) &&
    (queuedMouse = null);
  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
}
function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
  queuedEvent.blockedOn === unblocked &&
    ((queuedEvent.blockedOn = null),
    hasScheduledReplayAttempt ||
      ((hasScheduledReplayAttempt = !0),
      Scheduler.unstable_scheduleCallback(
        Scheduler.unstable_NormalPriority,
        replayUnblockedEvents
      )));
}
var lastScheduledReplayQueue = null;
function scheduleReplayQueueIfNeeded(formReplayingQueue) {
  lastScheduledReplayQueue !== formReplayingQueue &&
    ((lastScheduledReplayQueue = formReplayingQueue),
    Scheduler.unstable_scheduleCallback(
      Scheduler.unstable_NormalPriority,
      function () {
        lastScheduledReplayQueue === formReplayingQueue &&
          (lastScheduledReplayQueue = null);
        for (var i = 0; i < formReplayingQueue.length; i += 3) {
          var form = formReplayingQueue[i],
            submitterOrAction = formReplayingQueue[i + 1],
            formData = formReplayingQueue[i + 2];
          if ("function" !== typeof submitterOrAction)
            if (null === findInstanceBlockingTarget(submitterOrAction || form))
              continue;
            else break;
          var formInst = getInstanceFromNode(form);
          null !== formInst &&
            (formReplayingQueue.splice(i, 3),
            (i -= 3),
            startHostTransition(
              formInst,
              {
                pending: !0,
                data: formData,
                method: form.method,
                action: submitterOrAction
              },
              submitterOrAction,
              formData
            ));
        }
      }
    ));
}
function retryIfBlockedOn(unblocked) {
  function unblock(queuedEvent) {
    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
  }
  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
  queuedPointers.forEach(unblock);
  queuedPointerCaptures.forEach(unblock);
  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
    var queuedTarget = queuedExplicitHydrationTargets[i];
    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
  }
  for (
    ;
    0 < queuedExplicitHydrationTargets.length &&
    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

  )
    attemptExplicitHydrationTarget(i),
      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
  i = unblocked.getRootNode().$$reactFormReplay;
  if (null != i)
    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
      var form = i[queuedTarget],
        submitterOrAction = i[queuedTarget + 1],
        formProps = getFiberCurrentPropsFromNode(form);
      if ("function" === typeof submitterOrAction)
        formProps || scheduleReplayQueueIfNeeded(i);
      else if (formProps) {
        var action = null;
        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
          if (
            ((form = submitterOrAction),
            (formProps = getFiberCurrentPropsFromNode(submitterOrAction)))
          )
            action = formProps.formAction;
          else {
            if (null !== findInstanceBlockingTarget(form)) continue;
          }
        else action = formProps.action;
        "function" === typeof action
          ? (i[queuedTarget + 1] = action)
          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
        scheduleReplayQueueIfNeeded(i);
      }
    }
}
var ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig,
  _enabled = !0;
function createEventListenerWrapperWithPriority(
  targetContainer,
  domEventName,
  eventSystemFlags
) {
  switch (getEventPriority(domEventName)) {
    case 2:
      var listenerWrapper = dispatchDiscreteEvent;
      break;
    case 8:
      listenerWrapper = dispatchContinuousEvent;
      break;
    default:
      listenerWrapper = dispatchEvent;
  }
  return listenerWrapper.bind(
    null,
    domEventName,
    eventSystemFlags,
    targetContainer
  );
}
function dispatchDiscreteEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var previousPriority = currentUpdatePriority,
    prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = null;
  try {
    (currentUpdatePriority = 2),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (currentUpdatePriority = previousPriority),
      (ReactCurrentBatchConfig.transition = prevTransition);
  }
}
function dispatchContinuousEvent(
  domEventName,
  eventSystemFlags,
  container,
  nativeEvent
) {
  var previousPriority = currentUpdatePriority,
    prevTransition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = null;
  try {
    (currentUpdatePriority = 8),
      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
  } finally {
    (currentUpdatePriority = previousPriority),
      (ReactCurrentBatchConfig.transition = prevTransition);
  }
}
function dispatchEvent(
  domEventName,
  eventSystemFlags,
  targetContainer,
  nativeEvent
) {
  if (_enabled) {
    var blockedOn = findInstanceBlockingEvent(nativeEvent);
    if (null === blockedOn)
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        return_targetInst,
        targetContainer
      ),
        clearIfContinuousEvent(domEventName, nativeEvent);
    else if (
      queueIfContinuousEvent(
        blockedOn,
        domEventName,
        eventSystemFlags,
        targetContainer,
        nativeEvent
      )
    )
      nativeEvent.stopPropagation();
    else if (
      (clearIfContinuousEvent(domEventName, nativeEvent),
      eventSystemFlags & 4 &&
        -1 < discreteReplayableEvents.indexOf(domEventName))
    ) {
      for (; null !== blockedOn; ) {
        var fiber = getInstanceFromNode(blockedOn);
        null !== fiber && attemptSynchronousHydration(fiber);
        fiber = findInstanceBlockingEvent(nativeEvent);
        null === fiber &&
          dispatchEventForPluginEventSystem(
            domEventName,
            eventSystemFlags,
            nativeEvent,
            return_targetInst,
            targetContainer
          );
        if (fiber === blockedOn) break;
        blockedOn = fiber;
      }
      null !== blockedOn && nativeEvent.stopPropagation();
    } else
      dispatchEventForPluginEventSystem(
        domEventName,
        eventSystemFlags,
        nativeEvent,
        null,
        targetContainer
      );
  }
}
function findInstanceBlockingEvent(nativeEvent) {
  nativeEvent = getEventTarget(nativeEvent);
  return findInstanceBlockingTarget(nativeEvent);
}
var return_targetInst = null;
function findInstanceBlockingTarget(targetNode) {
  return_targetInst = null;
  targetNode = getClosestInstanceFromNode(targetNode);
  if (null !== targetNode) {
    var nearestMounted = getNearestMountedFiber(targetNode);
    if (null === nearestMounted) targetNode = null;
    else {
      var tag = nearestMounted.tag;
      if (13 === tag) {
        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
        if (null !== targetNode) return targetNode;
        targetNode = null;
      } else if (3 === tag) {
        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
          return 3 === nearestMounted.tag
            ? nearestMounted.stateNode.containerInfo
            : null;
        targetNode = null;
      } else nearestMounted !== targetNode && (targetNode = null);
    }
  }
  return_targetInst = targetNode;
  return null;
}
function getEventPriority(domEventName) {
  switch (domEventName) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (getCurrentPriorityLevel()) {
        case ImmediatePriority:
          return 2;
        case UserBlockingPriority:
          return 8;
        case NormalPriority$1:
        case LowPriority:
          return 32;
        case IdlePriority:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var Internals = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: { current: null }
  },
  Dispatcher$1 = Internals.Dispatcher;
"undefined" !== typeof document &&
  (Dispatcher$1.current = ReactDOMClientDispatcher);
var defaultOnRecoverableError =
  "function" === typeof reportError
    ? reportError
    : function (error) {
        console.error(error);
      };
function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
  function (children) {
    var root = this._internalRoot;
    if (null === root) throw Error(formatProdErrorMessage(409));
    updateContainer(children, root, null, null);
  };
ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
  function () {
    var root = this._internalRoot;
    if (null !== root) {
      this._internalRoot = null;
      var container = root.containerInfo;
      flushSync$1(function () {
        updateContainer(null, root, null, null);
      });
      container[internalContainerInstanceKey] = null;
    }
  };
function ReactDOMHydrationRoot(internalRoot) {
  this._internalRoot = internalRoot;
}
ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
  if (target) {
    var updatePriority = currentUpdatePriority;
    target = { blockedOn: null, target: target, priority: updatePriority };
    for (
      var i = 0;
      i < queuedExplicitHydrationTargets.length &&
      0 !== updatePriority &&
      updatePriority < queuedExplicitHydrationTargets[i].priority;
      i++
    );
    queuedExplicitHydrationTargets.splice(i, 0, target);
    0 === i && attemptExplicitHydrationTarget(target);
  }
};
function isValidContainer(node) {
  return !(
    !node ||
    (1 !== node.nodeType &&
      9 !== node.nodeType &&
      11 !== node.nodeType &&
      (8 !== node.nodeType ||
        " react-mount-point-unstable " !== node.nodeValue))
  );
}
function isValidContainerLegacy(node) {
  return !(
    !node ||
    (1 !== node.nodeType &&
      9 !== node.nodeType &&
      11 !== node.nodeType &&
      (8 !== node.nodeType ||
        " react-mount-point-unstable " !== node.nodeValue))
  );
}
function noopOnRecoverableError() {}
function legacyCreateRootFromDOMContainer(
  container,
  initialChildren,
  parentComponent,
  callback,
  isHydrationContainer
) {
  if (isHydrationContainer) {
    if ("function" === typeof callback) {
      var originalCallback = callback;
      callback = function () {
        var instance = getPublicRootInstance(root$307);
        originalCallback.call(instance);
      };
    }
    var root$307 = createHydrationContainer(
      initialChildren,
      callback,
      container,
      0,
      null,
      !1,
      !1,
      "",
      noopOnRecoverableError,
      null,
      null
    );
    container._reactRootContainer = root$307;
    container[internalContainerInstanceKey] = root$307.current;
    listenToAllSupportedEvents(
      8 === container.nodeType ? container.parentNode : container
    );
    flushSync$1();
    return root$307;
  }
  clearContainer(container);
  if ("function" === typeof callback) {
    var originalCallback$308 = callback;
    callback = function () {
      var instance = getPublicRootInstance(root$309);
      originalCallback$308.call(instance);
    };
  }
  var root$309 = createFiberRoot(
    container,
    0,
    !1,
    null,
    null,
    !1,
    !1,
    "",
    noopOnRecoverableError,
    null,
    null
  );
  container._reactRootContainer = root$309;
  container[internalContainerInstanceKey] = root$309.current;
  listenToAllSupportedEvents(
    8 === container.nodeType ? container.parentNode : container
  );
  flushSync$1(function () {
    updateContainer(initialChildren, root$309, parentComponent, callback);
  });
  return root$309;
}
function legacyRenderSubtreeIntoContainer(
  parentComponent,
  children,
  container,
  forceHydrate,
  callback
) {
  var maybeRoot = container._reactRootContainer;
  if (maybeRoot) {
    var root = maybeRoot;
    if ("function" === typeof callback) {
      var originalCallback = callback;
      callback = function () {
        var instance = getPublicRootInstance(root);
        originalCallback.call(instance);
      };
    }
    updateContainer(children, root, parentComponent, callback);
  } else
    root = legacyCreateRootFromDOMContainer(
      container,
      children,
      parentComponent,
      callback,
      forceHydrate
    );
  return getPublicRootInstance(root);
}
function registerReactDOMEvent(target, domEventName, isCapturePhaseListener) {
  if (
    1 !== target.nodeType &&
    "function" !== typeof target.getChildContextValues
  )
    if ("function" === typeof target.addEventListener) {
      var eventSystemFlags = 1,
        listenerSet = getEventListenerSet(target),
        listenerSetKey =
          domEventName + "__" + (isCapturePhaseListener ? "capture" : "bubble");
      listenerSet.has(listenerSetKey) ||
        (isCapturePhaseListener && (eventSystemFlags |= 4),
        addTrappedEventListener(
          target,
          domEventName,
          eventSystemFlags,
          isCapturePhaseListener
        ),
        listenerSet.add(listenerSetKey));
    } else throw Error(formatProdErrorMessage(369));
}
function getCrossOriginStringAs(as, input) {
  if ("font" === as) return "";
  if ("string" === typeof input)
    return "use-credentials" === input ? input : "";
}
var Dispatcher = Internals.Dispatcher;
Internals.Events = [
  getInstanceFromNode,
  getNodeFromInstance,
  getFiberCurrentPropsFromNode,
  enqueueStateRestore,
  restoreStateIfNeeded,
  batchedUpdates$1
];
var devToolsConfig$jscomp$inline_1904 = {
  findFiberByHostInstance: getClosestInstanceFromNode,
  bundleType: 0,
  version: "18.3.0-www-classic-5cb27e23",
  rendererPackageName: "react-dom"
};
(function (internals) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
  var hook = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (hook.isDisabled || !hook.supportsFiber) return !0;
  try {
    enableSchedulingProfiler &&
      (internals = assign({}, internals, {
        getLaneLabelMap: getLaneLabelMap,
        injectProfilingHooks: injectProfilingHooks
      })),
      (rendererID = hook.inject(internals)),
      (injectedHook = hook);
  } catch (err) {}
  return hook.checkDCE ? !0 : !1;
})({
  bundleType: devToolsConfig$jscomp$inline_1904.bundleType,
  version: devToolsConfig$jscomp$inline_1904.version,
  rendererPackageName: devToolsConfig$jscomp$inline_1904.rendererPackageName,
  rendererConfig: devToolsConfig$jscomp$inline_1904.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ReactSharedInternals.ReactCurrentDispatcher,
  findHostInstanceByFiber: function (fiber) {
    fiber = findCurrentHostFiber(fiber);
    return null === fiber ? null : fiber.stateNode;
  },
  findFiberByHostInstance:
    devToolsConfig$jscomp$inline_1904.findFiberByHostInstance ||
    emptyFindFiberByHostInstance,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.0-www-classic-5cb27e23"
});
assign(Internals, {
  ReactBrowserEventEmitter: {
    isEnabled: function () {
      return _enabled;
    }
  }
});
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Internals;
exports.createPortal = function (children, container) {
  var key =
    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(200));
  return createPortal$1(children, container, null, key);
};
exports.createRoot = function (container, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
  var isStrictMode = !1,
    concurrentUpdatesByDefaultOverride = !1,
    identifierPrefix = "",
    onRecoverableError = defaultOnRecoverableError,
    transitionCallbacks = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    !0 === options.unstable_concurrentUpdatesByDefault &&
      (concurrentUpdatesByDefaultOverride = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.unstable_transitionCallbacks &&
      (transitionCallbacks = options.unstable_transitionCallbacks));
  options = createFiberRoot(
    container,
    1,
    !1,
    null,
    null,
    isStrictMode,
    concurrentUpdatesByDefaultOverride,
    identifierPrefix,
    onRecoverableError,
    transitionCallbacks,
    null
  );
  container[internalContainerInstanceKey] = options.current;
  Dispatcher$1.current = ReactDOMClientDispatcher;
  listenToAllSupportedEvents(
    8 === container.nodeType ? container.parentNode : container
  );
  return new ReactDOMRoot(options);
};
exports.findDOMNode = function (componentOrElement) {
  if (null == componentOrElement) return null;
  if (1 === componentOrElement.nodeType) return componentOrElement;
  var fiber = componentOrElement._reactInternals;
  if (void 0 === fiber) {
    if ("function" === typeof componentOrElement.render)
      throw Error(formatProdErrorMessage(188));
    componentOrElement = Object.keys(componentOrElement).join(",");
    throw Error(formatProdErrorMessage(268, componentOrElement));
  }
  componentOrElement = findCurrentHostFiber(fiber);
  componentOrElement =
    null === componentOrElement ? null : componentOrElement.stateNode;
  return componentOrElement;
};
exports.flushSync = function (fn) {
  return flushSync$1(fn);
};
exports.hydrate = function (element, container, callback) {
  if (!isValidContainerLegacy(container))
    throw Error(formatProdErrorMessage(200));
  return legacyRenderSubtreeIntoContainer(
    null,
    element,
    container,
    !0,
    callback
  );
};
exports.hydrateRoot = function (container, initialChildren, options) {
  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(405));
  var isStrictMode = !1,
    concurrentUpdatesByDefaultOverride = !1,
    identifierPrefix = "",
    onRecoverableError = defaultOnRecoverableError,
    transitionCallbacks = null,
    formState = null;
  null !== options &&
    void 0 !== options &&
    (!0 === options.unstable_strictMode && (isStrictMode = !0),
    !0 === options.unstable_concurrentUpdatesByDefault &&
      (concurrentUpdatesByDefaultOverride = !0),
    void 0 !== options.identifierPrefix &&
      (identifierPrefix = options.identifierPrefix),
    void 0 !== options.onRecoverableError &&
      (onRecoverableError = options.onRecoverableError),
    void 0 !== options.unstable_transitionCallbacks &&
      (transitionCallbacks = options.unstable_transitionCallbacks),
    void 0 !== options.formState && (formState = options.formState));
  initialChildren = createHydrationContainer(
    initialChildren,
    null,
    container,
    1,
    null != options ? options : null,
    isStrictMode,
    concurrentUpdatesByDefaultOverride,
    identifierPrefix,
    onRecoverableError,
    transitionCallbacks,
    formState
  );
  container[internalContainerInstanceKey] = initialChildren.current;
  Dispatcher$1.current = ReactDOMClientDispatcher;
  listenToAllSupportedEvents(container);
  return new ReactDOMHydrationRoot(initialChildren);
};
exports.preconnect = function (href, options) {
  var dispatcher = Dispatcher.current;
  dispatcher &&
    "string" === typeof href &&
    (options
      ? ((options = options.crossOrigin),
        (options =
          "string" === typeof options
            ? "use-credentials" === options
              ? options
              : ""
            : void 0))
      : (options = null),
    dispatcher.preconnect(href, options));
};
exports.prefetchDNS = function (href) {
  var dispatcher = Dispatcher.current;
  dispatcher && "string" === typeof href && dispatcher.prefetchDNS(href);
};
exports.preinit = function (href, options) {
  var dispatcher = Dispatcher.current;
  if (
    dispatcher &&
    "string" === typeof href &&
    options &&
    "string" === typeof options.as
  ) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
      integrity =
        "string" === typeof options.integrity ? options.integrity : void 0,
      fetchPriority =
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : void 0;
    "style" === as
      ? dispatcher.preinitStyle(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin: crossOrigin,
            integrity: integrity,
            fetchPriority: fetchPriority
          }
        )
      : "script" === as &&
        dispatcher.preinitScript(href, {
          crossOrigin: crossOrigin,
          integrity: integrity,
          fetchPriority: fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
  }
};
exports.preinitModule = function (href, options) {
  var dispatcher = Dispatcher.current;
  if (dispatcher && "string" === typeof href)
    if ("object" === typeof options && null !== options) {
      if (null == options.as || "script" === options.as) {
        var crossOrigin = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        );
        dispatcher.preinitModuleScript(href, {
          crossOrigin: crossOrigin,
          integrity:
            "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    } else null == options && dispatcher.preinitModuleScript(href);
};
exports.preload = function (href, options) {
  var dispatcher = Dispatcher.current;
  if (
    dispatcher &&
    "string" === typeof href &&
    "object" === typeof options &&
    null !== options &&
    "string" === typeof options.as
  ) {
    var as = options.as,
      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
    dispatcher.preload(href, as, {
      crossOrigin: crossOrigin,
      integrity:
        "string" === typeof options.integrity ? options.integrity : void 0,
      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
      type: "string" === typeof options.type ? options.type : void 0,
      fetchPriority:
        "string" === typeof options.fetchPriority
          ? options.fetchPriority
          : void 0,
      referrerPolicy:
        "string" === typeof options.referrerPolicy
          ? options.referrerPolicy
          : void 0,
      imageSrcSet:
        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
      imageSizes:
        "string" === typeof options.imageSizes ? options.imageSizes : void 0
    });
  }
};
exports.preloadModule = function (href, options) {
  var dispatcher = Dispatcher.current;
  if (dispatcher && "string" === typeof href)
    if (options) {
      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
      dispatcher.preloadModule(href, {
        as:
          "string" === typeof options.as && "script" !== options.as
            ? options.as
            : void 0,
        crossOrigin: crossOrigin,
        integrity:
          "string" === typeof options.integrity ? options.integrity : void 0
      });
    } else dispatcher.preloadModule(href);
};
exports.render = function (element, container, callback) {
  if (!isValidContainerLegacy(container))
    throw Error(formatProdErrorMessage(200));
  return legacyRenderSubtreeIntoContainer(
    null,
    element,
    container,
    !1,
    callback
  );
};
exports.unmountComponentAtNode = function (container) {
  if (!isValidContainerLegacy(container))
    throw Error(formatProdErrorMessage(40));
  return container._reactRootContainer
    ? (flushSync$1(function () {
        legacyRenderSubtreeIntoContainer(
          null,
          null,
          container,
          !1,
          function () {
            container._reactRootContainer = null;
            container[internalContainerInstanceKey] = null;
          }
        );
      }),
      !0)
    : !1;
};
exports.unstable_batchedUpdates = batchedUpdates$1;
exports.unstable_createEventHandle = function (type, options) {
  function eventHandle(target, callback) {
    if ("function" !== typeof callback)
      throw Error(formatProdErrorMessage(370));
    doesTargetHaveEventHandle(target, eventHandle) ||
      (addEventHandleToTarget(target, eventHandle),
      registerReactDOMEvent(target, type, isCapturePhaseListener));
    var listener = {
        callback: callback,
        capture: isCapturePhaseListener,
        type: type
      },
      targetListeners = target[internalEventHandlerListenersKey] || null;
    null === targetListeners &&
      ((targetListeners = new Set()),
      (target[internalEventHandlerListenersKey] = targetListeners));
    targetListeners.add(listener);
    return function () {
      targetListeners.delete(listener);
    };
  }
  if (!allNativeEvents.has(type))
    throw Error(formatProdErrorMessage(372, type));
  var isCapturePhaseListener = !1;
  null != options &&
    ((options = options.capture),
    "boolean" === typeof options && (isCapturePhaseListener = options));
  return eventHandle;
};
exports.unstable_renderSubtreeIntoContainer = function (
  parentComponent,
  element,
  containerNode,
  callback
) {
  if (!isValidContainerLegacy(containerNode))
    throw Error(formatProdErrorMessage(200));
  if (null == parentComponent || void 0 === parentComponent._reactInternals)
    throw Error(formatProdErrorMessage(38));
  return legacyRenderSubtreeIntoContainer(
    parentComponent,
    element,
    containerNode,
    !1,
    callback
  );
};
exports.unstable_runWithPriority = runWithPriority;
exports.useFormState = function (action, initialState, permalink) {
  return ReactCurrentDispatcher$2.current.useFormState(
    action,
    initialState,
    permalink
  );
};
exports.useFormStatus = function () {
  return ReactCurrentDispatcher$2.current.useHostTransitionStatus();
};
exports.version = "18.3.0-www-classic-5cb27e23";
"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  "function" ===
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());