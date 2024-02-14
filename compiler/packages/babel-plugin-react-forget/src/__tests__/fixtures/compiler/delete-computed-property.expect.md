
## Input

```javascript
function Component(props) {
  const x = { a: props.a, b: props.b };
  const key = "b";
  delete x[key];
  return x;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function Component(props) {
  const $ = useMemoCache(3);
  let x;
  if ($[0] !== props.a || $[1] !== props.b) {
    x = { a: props.a, b: props.b };
    delete x["b"];
    $[0] = props.a;
    $[1] = props.b;
    $[2] = x;
  } else {
    x = $[2];
  }
  return x;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: ["TodoAdd"],
  isComponent: "TodoAdd",
};

```
      