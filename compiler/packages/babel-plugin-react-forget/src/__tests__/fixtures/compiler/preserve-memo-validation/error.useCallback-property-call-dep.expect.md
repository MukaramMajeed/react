
## Input

```javascript
// @validatePreserveExistingMemoizationGuarantees
import { useCallback } from "react";

function Component({ propA }) {
  return useCallback(() => {
    return propA.x();
  }, [propA.x]);
}

```


## Error

```
Todo: Could not preserve manual memoization because an inferred dependency does not match the dependency list in source. The inferred dependency was `propA`, but the source dependencies were [propA.x]. Detail: inferred less specific property than source
```
          
      