
## Input

```javascript
import { throwInput } from "shared-runtime";

function Component(props) {
  const object = {
    foo() {
      try {
        throwInput([props.value]);
      } catch (e) {
        return e;
      }
    },
  };
  return object.foo();
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ value: 42 }],
};

```

## Code

```javascript
import { unstable_useMemoCache as useMemoCache } from "react";
import { throwInput } from "shared-runtime";

function Component(props) {
  const $ = useMemoCache(2);
  let t0;
  if ($[0] !== props.value) {
    const object = {
      foo() {
        try {
          throwInput([props.value]);
        } catch (t1) {
          const e = t1;
          return e;
        }
      },
    };

    t0 = object.foo();
    $[0] = props.value;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return t0;
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [{ value: 42 }],
};

```
      
### Eval output
(kind: ok) [42]