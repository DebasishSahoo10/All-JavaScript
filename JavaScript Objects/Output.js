// 1 : Delete keyword on functional variables
const func1 = (function (a) {
  delete a;
  return a;
})(4);
console.log(func1); // 4
// Why : Because delete keyword doesn't work on normal variables. works only in Object Properties

// 2 : What are the ways to iterate over an Object
// a : For in
const user = {
  name: "John Doe",
  age: 25,
  active: true,
};
for (key in user) {
  console.log(key); // accessing properties
}
for (key in user) {
  console.log(user[key]); // accessing values
}
// b : then ES6 introudced methods like Object.keys/Object.values/Object.entries, which gives us arrays of keys/values/both so that we can iterate over the array through our normal methods.
const keys = Object.keys(user); // ['name', 'age', 'active']
const values = Object.values(user); // ['John Doe', 25, true]
const valuesAndKeys = Object.entries(user); // [ [ 'name', 'John Doe' ], [ 'age', 25 ], [ 'active', true ] ]

// 3
const obj1 = {
  a: 100,
  b: 200,
  a: 300,
};
console.log(obj1);
// Why : JS behaves the same in terms of object properties as it behaves for variables

// 4
const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 100;
a[c] = 200;
console.log(a); // {'[object Object]' : 200}
// Why : Because when JS tried to assign (b) as a key inside (a), it converted it into a string, so it will be like ['object Object']. and then JS tried the same with (c) and it sees that the property already existed and that's why it just updated the value to the latest (200).

// 5 : REST and SPREAD
console.log([..."Lydia"]); // [ 'L', 'y', 'd', 'i', 'a' ]
const userLyd = { name: "Lydia", active: true };
const admin = { admin: true, ...userLyd };
console.log(admin); // { admin: true, name: 'Lydia', active: true }

// 6
let d = { greet: "Hey" };
let e = {};
d = e;
e.greet = "Hello";
console.log(d.greet); // "Hello"
// Why : when we change something in reference inside the object it will change the original one as well

// 7
console.log({ a: 1 } == { a: 1 }); // false
console.log({ a: 1 } === { a: 1 }); // false
// Why : because every object has different memory reference

// 8
let person = { name: "Lydia" };
const newPerson = person;
person = null;
console.log(newPerson); // {name : "Lydia"}
// the whole object can not be changed but a property can be
let person2 = { name: "Lydia" };
const newPerson2 = person2;
person2.name = null;
console.log(newPerson2); // {name : null}

// 9
const value = { number: 10 };
const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};
multiply(); // 20 : reference from default param
multiply(); // 20 : reference from default param
multiply(value); // 20 : reference from actual object so changed it
multiply(value); // 40

// 10
const changeRef = (obj) => {
  obj.age = 25;
  obj = { age: 30 };
  return obj;
};
const testUser = { age: 10 };
const newUser = changeRef(testUser);
console.log(newUser); // {age : 30}
console.log(testUser); // {age : 25}

// 11 : What is the difference between Deep Copy and Shallow Copy?
// : Deep Copy is we clone a object completely and then pass it to another variable. so that new variable now don't have any reference to the original object's properties. It can not change them. but the shallow copy happens when to create a new object, we just pass the the original object a reference/assignment. Deep copy can be done by spread operaters or Object.assign()