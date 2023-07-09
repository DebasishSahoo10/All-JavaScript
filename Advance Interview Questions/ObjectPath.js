// Get object value from string path : Implement a method in Javascript that will take an object and a string or array of strings as a path and return the value at that path. If nothing is found return undefined. Polyfill for lodash._get().
// Input:
const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

const get = (obj, path) => {
  if (path === "" || path.length === 0) return undefined;
  if (Array.isArray(path)) path = path.join(".");
  let exactedPath = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] !== "[" && path[i] !== "]" && path[i] !== ".") {
      exactedPath.push(path[i]);
    }
  }
  const value = exactedPath.reduce((acc, curr) => acc[curr], obj);
  return value ? value : undefined;
};

console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c.0"));
console.log(get(obj, "a.b.c[1]"));
console.log(get(obj, "a.b.c[3]"));
console.log(get(obj, ["a", "b", "c", "2"]));
console.log(get(obj, "a.c"));

// Output:
// [1,2,3]
// 1
// 2
// undefined