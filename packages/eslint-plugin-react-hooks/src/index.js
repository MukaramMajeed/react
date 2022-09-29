/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import NoNestedComponents from './NoNestedComponents';
import RulesOfHooks from './RulesOfHooks';
import ExhaustiveDeps from './ExhaustiveDeps';

export const configs = {
  recommended: {
    plugins: ['react-hooks'],
    rules: {
      'react-hooks/no-nested-components': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
};

export const rules = {
  'no-nested-components': NoNestedComponents,
  'rules-of-hooks': RulesOfHooks,
  'exhaustive-deps': ExhaustiveDeps,
};
