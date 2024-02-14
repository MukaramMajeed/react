
## Input

```javascript
// @skip
// Passed but should have failed

// Invalid because it's a common misunderstanding.
// We *could* make it valid but the runtime error could be confusing.
function ComponentWithHookInsideCallback() {
  function handleClick() {
    useState();
  }
}

```

## Code

```javascript
// @skip
// Passed but should have failed

// Invalid because it's a common misunderstanding.
// We *could* make it valid but the runtime error could be confusing.
function ComponentWithHookInsideCallback() {}

```
      