
## Input

```javascript
// @validatePreserveExistingMemoizationGuarantees
import { useMemo } from "react";
import { identity, mutate } from "shared-runtime";

function Component({ propA, propB }) {
  return useMemo(() => {
    const x = {};
    if (identity(null) ?? propA.a) {
      mutate(x);
      return {
        value: propB.x.y,
      };
    }
  }, [propA.a, propB.x.y]);
}

```


## Error

```
Todo: Could not preserve manual memoization because an inferred dependency does not match the dependency list in source. The inferred dependency was `propA`, but the source dependencies were [propA.a, propB.x.y]. Detail: inferred less specific property than source

Todo: Could not preserve manual memoization because an inferred dependency does not match the dependency list in source. The inferred dependency was `propB`, but the source dependencies were [propA.a, propB.x.y]. Detail: inferred less specific property than source
```
          
      