/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {
  REACT_PROVIDER_TYPE,
  REACT_SERVER_CONTEXT_TYPE,
  REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED,
} from 'shared/ReactSymbols';

import type {
  ReactServerContext,
  ServerContextJSONValue,
} from 'shared/ReactTypes';

import ReactSharedInternals from 'shared/ReactSharedInternals';

import {enableServerContext} from 'shared/ReactFeatureFlags';

const globalServerContextRegistry =
  ReactSharedInternals.globalServerContextRegistry;

export function createServerContext<T: ServerContextJSONValue>(
  globalName: string,
  defaultValue: T,
): ReactServerContext<T> {
  if (!enableServerContext) {
    throw new Error('Not implemented.');
  }
  if (!globalServerContextRegistry[globalName]) {
    globalServerContextRegistry[globalName] = _createServerContext(
      globalName,
      defaultValue,
    );
  }
  const context = globalServerContextRegistry[globalName];
  if (context._defaultValue === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED) {
    context._defaultValue = defaultValue;
    if (
      context._currentValue === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED
    ) {
      context._currentValue = defaultValue;
    }
    if (
      context._currentValue2 === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED
    ) {
      context._currentValue2 = defaultValue;
    }
  } else {
    throw new Error(`ServerContext: ${globalName} already defined`);
  }
  return context;
}

function _createServerContext<T: ServerContextJSONValue>(
  globalName: string,
  defaultValue: T,
): ReactServerContext<T> {
  const context: ReactServerContext<T> = {
    $$typeof: REACT_SERVER_CONTEXT_TYPE,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,

    _defaultValue: defaultValue,

    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    _definitionLoaded: false,
    // These are circular
    Provider: (null: any),
    displayName: globalName,
  };

  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context,
  };

  if (__DEV__) {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }
  globalServerContextRegistry[globalName] = context;
  return context;
}

// This function is called by FlightClient to create a server context sent from
// the server. Its possible that FlightClient is creating it before the
// definition is loaded on the server. We'll create it with a null default value
// if thats the case and when the definition loads it will  set the correct
// default value.
export function getOrCreateServerContext(globalName: string) {
  if (!globalServerContextRegistry[globalName]) {
    globalServerContextRegistry[globalName] = _createServerContext(
      globalName,
      REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED,
    );
  }
  return globalServerContextRegistry[globalName];
}
