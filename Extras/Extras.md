1. How is a forEach statement different from a for statement?

: a For Loop can run without any array or iterable data type constrains. Suppose we have to send an alert to our user, multiple times, then we can use for loop, pass a alert function inside it. But a forEach is restricted to iterable data types as it is a prototype on that data type.

2. Class Object and Static Keyword

: The static keyword in a class object in JavaScript means that the property or method defined with it belongs to the class itself, not to any instance of the class. This means that you can access the static property or method without creating an object from the class. For example, if you have a class called Car with a static method called hello, you can call it as Car.hello(), but not as mycar.hello() where mycar is an object of the Car class. Static properties and methods are useful for creating utility functions or constants that are related to the class, but do not need to be replicated for each instance.

3. What snippet could you add to this code to print "food" to the console?

```js
class Animal {
  static belly = [];
  eat() {
    Animal.belly.push("food");
  }
}
let a = new Animal();
a.eat();
console.log(/* Snippet Here */); //Prints food
```

: Animal.belly[0]

4. How does a function create a closure?
   - It reloads the document whenever the value changes.
   - It returns a reference to a variable in its parent scope.
   - It completes execution without returning.
   - It copies a local variable to the global scope.

: It returns a reference to a variable in its parent scope.

5. What will be the output of following code?

```js
var Storm = function () {};
Storm.prototype.precip = "rain";
console.log(Storm);
var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = "snow";
var bob = new WinterStorm();
console.log(bob.precip);
```

: "snow"

6. What will be the output?

```js
var a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length);
```

: 101

7. Why would you include a "use strict" statement in a JavaScript file?
   - to tell parsers to interpret your JavaScript syntax loosely
   - to tell parsers to enforce all JavaScript syntax rules when processing your code
   - to instruct the browser to automatically fix any errors it finds in the code
   - to enable ES6 features in your code

: to tell parsers to enforce all JavaScript syntax rules when processing your code

8. Which of the following values is not a Boolean false?
   - Boolean(0)
   - Boolean("")
   - Boolean(NaN)
   - Boolean("false")

: Boolean("false")

9.  Which variable is an implicit parameter for every function in JavaScript?
    - Arguments
    - args
    - argsArray
    - argumentsList

: Arguments

10. What will be the output?
```js
sum(10, 20);
diff(10, 20);
function sum(x, y) {
  return x + y;
}
let diff = function (x, y) {
  return x - y;
};
```

: 30, Reference Error

11. When we are storing records, then which data type is more efficient? Object or Array?

: Objects, as Records in an object can be retrieved using their key which can be any given value (e.g. an employee ID, a city name, etc), whereas to retrieve a record from an array we need to know its index.

12. Which statement is true about the "async" attribute for the HTML script tag?

:  It can be used only for external JavaScript code.

13. What type of function can have its execution suspended and then resumed at a later point?

: Generator function

14. What will be the output?
```js
var v = 1;
var f1 = function () {
  console.log(v);
};
var f2 = function () {
  var v = 2;
  f1();
};
f2();
```

: 1

15. Which statement is true about Functional Programming?

: Side effects are not allowed.

16. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?
    - You are calling a method named reduce on an object that's declared but has no value.
    - You are calling a method named reduce on an object that does not exist.
    - You are calling a method named reduce on an empty array.
    - You are calling a method named reduce on an object that's has a null value.

: You are calling a method named reduce on an object that's declared but has no value.

17. How instanceOf works?

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);
console.log(auto instanceof Car);
// Expected output: true
console.log(auto instanceof Object);
// Expected output: true
```

18. What will be the value of Y?
```js
const x = 6 % 2;
const y = x ? 'One' : 'Two';
```

: X will be 0. 0 is falsy, hence Y's value will be Two.

19. What statement can be used to skip an iteration in a loop?

: Continue

20. What will be output
```js
let a = 5;
console.log(++a);
```

: 6

21. What's the error in this code?
```js
const foo = {
  bar() {
    console.log('Hello, world!');
  },
  name: 'Albert',
  age: 26,
};
```

: There is no error in code

22. What will be the output?
```js
const foo = [1, 2, 3];
const [n] = foo;
console.log(n);
```

: 1

23. How to remove a property?
```js
const foo = {
  name: 'Albert',
};
```

: delete foo.name

24. Which Concepts does this code Illustrates?
```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
var addFive = makeAdder(5);
console.log(addFive(3));
```

: Mainly Currying. But Currying is not possible without Closures. So yes Closures too.

25. If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?

: Access-Control-Allow-Origin

26. What will be the output?
```js
let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];
rainForests.splice(0, 2);
console.log(rainForests);
```

: ["Cerrado", "Congo"]

27. Which line could you add to this code to print "jaguar" to the console?
```js
let animals = ['jaguar', 'eagle'];
//Missing Line
console.log(animals.pop()); //Prints jaguar
```

: animals.pop()
: shift() - removes the FIRST element of an array and returns the removed item.
: pop() - removes the LAST element of an array and returns the removed item.

28. What does this code do?
```js
const animals = ['Rabbit', 'Dog', 'Cat'];
animals.unshift('Lizard');
```

: It adds "Lizard" to the start of the animals array.

29. Which statement prints "roar" to the console?
```js
var sound = 'grunt';
var bear = { sound: 'roar' };
function roar() {
  console.log(this.sound);
}
```

: roar.apply(bear) 
: roar.apply(bear) will also be true

30. Which JavaScript loop ensures that at least a singular iteration will happen?

: do...while

31. Which snippet could you add to this code to print "YOU GOT THIS" to the console?
```js
let cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];
let plainText = '';
/* Missing Snippet */
console.log(plainText); //Prints YOU GOT THIS
```

:
```js
for (let [index, value] of cipherText.entries()) { // Yes entries works on array as well, it returns index and value
  plainText += index % 2 === 0 ? value : '';
}
```

32. What line of code causes this code segment to throw an error?
```js
const lion = 1;
let tiger = 2;
var bear;
++lion;
bear += lion + tiger;
tiger++;
```

: ++lion (because of const)

33. How can you attempt to access the property a.b on obj without throwing an error if a is undefined?
```js
let obj = {}
```

: It is actually "b" which will throw the error not "a", hence -> obj.a?.b

34. What happens when you run this code?
```js
if (true) {
  var x = 5;
  const y = 6;
  let z = 7;
}
console.log(x + y + z);
```

: Will throw ReferenceError for Y

35. What will this code log to the console?
```js
console.log(typeof 41.1);
```

: Number. Because JS doesn't have a Float type.

36. What is the output of this code?
```js
let scores = [];
scores.push(1, 2);
scores.pop();
scores.push(3, 4);
scores.pop();
score = scores.reduce((a, b) => a + b);
console.log(score);
```

: 4

37. What does this code print to the console?

```js
let bear = {
  sound: 'roar',
  roar() {
    console.log(this.sound);
  },
};
bear.sound = 'grunt';
let bearSound = bear.roar;
bearSound();
```

: undefined

38. What will be output
```js
var cat = { name: 'Athena' };
function swap(feline) {
  feline.name = 'Wild';
  feline = { name: 'Tabby' }; // Assignment doesn't applyes to pass by reference rules
  console.log(feline.name) // Tabby
}
swap(cat);
console.log(cat.name); // Wild
```

39. What will be the outputs?
```js
var thing;
let func = (str = 'no arg') => {
  console.log(str);
};
func(thing) // no arg
func(undefined); // no args
func(null); // null
```

40. Which snippet could you add to this code to print "{"type": "tiger"}" to the console?
```js
let cat = { type: "tiger", size: "large" };
let json = /* Snippet here */;
console.log(json); // print {"type":"tiger"}
```

:
```js
JSON.stringify(cat, ["type"]);
```

41. What will be the output of the following code snippet?
```js
const obj1 = { first: 20, second: 30, first: 50 };
console.log(obj1);
```
: {first: 50 , second: 30}

42. Which object in Javascript doesn’t have a prototype?

: Base Object

43. What will be the output of the following code snippet?
```js
print(typeof NaN);
```
: Number

44. What will be the output of the following code snippet?
```html
<script type="text/javascript">a = 5 + "9"; document.write(a);</script>
```

: 59