
## Input

```javascript
// @validatePreserveExistingMemoizationGuarantees @enableAssumeHooksFollowRulesOfReact @enableTransitivelyFreezeFunctionExpressions
import { useCallback } from "react";

function Component({ entity, children }) {
  // showMessage doesn't escape so we don't memoize it.
  // However, validatePreserveExistingMemoizationGuarantees only sees that the scope
  // doesn't exist, and thinks the memoization was missed instead of being intentionally dropped.
  const showMessage = useCallback(() => entity != null);

  if (!showMessage()) {
    return children;
  }

  return <div>{children}</div>;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [
    {
      entity: { name: "Sathya" },
      children: [<div key="gsathya">Hi Sathya!</div>],
    },
  ],
};

```

## Code

```javascript
// @validatePreserveExistingMemoizationGuarantees @enableAssumeHooksFollowRulesOfReact @enableTransitivelyFreezeFunctionExpressions
import { useCallback, unstable_useMemoCache as useMemoCache } from "react";

function Component(t23) {
  const $ = useMemoCache(2);
  const { entity, children } = t23;

  const showMessage = () => entity != null;
  if (!showMessage()) {
    return children;
  }
  let t0;
  if ($[0] !== children) {
    t0 = <div>{children}</div>;
    $[0] = children;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [
    {
      entity: { name: "Sathya" },
      children: [<div key="gsathya">Hi Sathya!</div>],
    },
  ],
};

```
      
### Eval output
(kind: ok) <div><div>Hi Sathya!</div></div>