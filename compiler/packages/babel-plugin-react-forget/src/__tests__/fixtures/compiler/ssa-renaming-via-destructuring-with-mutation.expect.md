
## Input

```javascript
function foo(props) {
  let { x } = { x: [] };
  x.push(props.bar);
  if (props.cond) {
    ({ x } = { x: {} });
    ({ x } = { x: [] });
    x.push(props.foo);
  }
  mut(x);
  return x;
}

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function foo(props) {
  const $ = useMemoCache(2);
  let x;
  if ($[0] !== props) {
    ({ x } = { x: [] });
    x.push(props.bar);
    if (props.cond) {
      ({ x } = { x: [] });
      x.push(props.foo);
    }

    mut(x);
    $[0] = props;
    $[1] = x;
  } else {
    x = $[1];
  }
  return x;
}

```
      