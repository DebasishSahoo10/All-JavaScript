# Currying

1. What is Currying?

: In JavaScript, currying is a process that transforms a function with multiple arguments into a sequence of nested functions, each taking a single argument. One of the reason to use it is to avoid passing the same variable multiple times. For currying to work, Closure plays a big role.

2. How to create a Infinite Currying function?

```js
function infi(a) {
  return (b) => {
    if (b) return infi(a + b);
    return a;
  };
}
```

3. Currying vs. Partial Application

: In Currying the number of arguments we pass is the same number of nested functions we have. But in Partial Application Number of arguments doesn't gurantee the number the nested functions.

```js
function sum(a) {
  return (b, c) => {
    return a + b + c;
  };
}
// this is called Partial Application
function currySum(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
// this is Currying
```
