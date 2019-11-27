/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const helperModuleImports = require('@babel/helper-module-imports');

/**
 * This babel plugin will scan modules for usage of Object.assign and auto-insert
 * a `require('object-assign')` statement in for polyfilling.
 */
module.exports = function autoImporter(babel) {
  function getAssignIdent(path, file, state) {
    if (state.id) {
      return state.id;
    }
    state.id = helperModuleImports.addDefault(path, 'object-assign', {
      nameHint: 'assign',
    });
    return state.id;
  }

  return {
    pre: function() {
      // map from module to generated identifier
      this.id = null;
    },

    visitor: {
      CallExpression: function(path, file) {
        if (path.get('callee').matchesPattern('Object.assign')) {
          // generate identifier and require if it hasn't been already
          const id = getAssignIdent(path, file, this);
          path.node.callee = id;
        }
      },

      MemberExpression: function(path, file) {
        if (path.matchesPattern('Object.assign')) {
          const id = getAssignIdent(path, file, this);
          path.replaceWith(id);
        }
      },
    },
  };
};
