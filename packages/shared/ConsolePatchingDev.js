/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.

let disabledDepth = 0;
let prevLog;
let prevInfo;
let prevWarn;
let prevError;

function disabledLog() {}
disabledLog.__reactDisabledLog = true;

export function disableLogs(): void {
  if (__DEV__) {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      // https://github.com/facebook/react/issues/19099
      const props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true,
      };
      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
      });
      /* eslint-enable react-internal/no-production-logging */
    }
    disabledDepth++;
  }
}

export function reenableLogs(): void {
  if (__DEV__) {
    disabledDepth--;
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      const props = {
        configurable: true,
        enumerable: true,
        writable: true,
      };
      Object.defineProperties(console, {
        log: { ...props, value: prevLog },
        info: { ...props, value: prevInfo },
        warn: { ...props, value: prevWarn },
        error: { ...props, value: prevError },
      });
      /* eslint-enable react-internal/no-production-logging */
    }
    if (disabledDepth < 0) {
      console.error(
        'disabledDepth fell below zero. ' +
          'This is a bug in React. Please file an issue.',
      );
    }
  }
}
