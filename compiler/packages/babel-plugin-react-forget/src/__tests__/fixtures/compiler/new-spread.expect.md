
## Input

```javascript
function Component(props) {
  const x = new Foo(...props.foo, null, ...[props.bar]);
  return x;
}

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
function Component(props) {
  const $ = useMemoCache(3);
  let t0;
  if ($[0] !== props.bar || $[1] !== props.foo) {
    t0 = new Foo(...props.foo, null, ...[props.bar]);
    $[0] = props.bar;
    $[1] = props.foo;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  const x = t0;
  return x;
}

```
      