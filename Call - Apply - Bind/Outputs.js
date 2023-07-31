// 1 : Call takes all the argument one by one and Apply takes all the arguments at once. So how to make call take the arguments in an array just like apply
function func(...langs) {
  console.log(this.name + " And i Know " + langs);
}
const me = {
  name: "D",
};
const languages = ["JS", "PYT"];
func.call(me, languages); // D And I Know JS,PYT
// Answer : is Rest Parameters which takes the whole array and give it to the function one by one. but here if the func is an arrow function, it won't work.

// 2 : can we explicitly bind an object to its own methods?
const testObj = {
  name: "C",
  getName() {
    console.log(this.name);
  },
};
testObj.getName.call(testObj); // C
// Answer : is Yes. Here also if getName is an arrow function it won't work.

// 3 : as we have seen Explicit Binding methods changes the THIS keyword reference of a function
const obj = {
  name: "John",
  greet: function () {
    const arrowFunc = () => {
      console.log(this.name);
    };
    arrowFunc();
  },
};
const otherObj = {
  name: "Jane",
};
obj.greet.call(otherObj); // Jane
// Why : here arrowFunc doesn't have its own THIS, hence it is taking the THIS reference from the parent function declaration. but if we call that function using call, then THIS reference will be changed.

// 4
function f() {
  console.log(this);
}
let userAnon = {
  g: f.bind(null),
};
userAnon.g(); // window object

// 5 : expectd output = {#0 LION SHIMBA, #1 WHALE SHIRI}
const animals = [{species : "LION", name : "SHIMBA"},{species : "WHALE", name : "SHIRI"}]
function printAnimals (i) {
  this.print = function () {
    console.log("#" + i , this.species , this.name)
  }
  this.print()
}
animals.forEach((item, index) => printAnimals.call(item, index))

// 6
var person = {  
  name: "James Smith",
  hello: function(thing) {
    console.log(this.name + " says hello " + thing);
  }
}
var helloFunc = person.hello.bind({ name: "Jim Smith" });
helloFunc("world"); // Jim Smith says hello world
// Bind can take the arguments later also

// 7
function personContainer() {
  var person = {  
     name: "James Smith",
     hello: function() {
       console.log(this.name + " says hello " + arguments[1]);
     }
  }
  person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // James Smith says hello mars
// arguments word does work here

// 8
function list(...args) {
  return args;
}
function addArguments(arg1, arg2) {
  return arg1 + arg2;
}
console.log(list(1, 2, 3)); // [1,2,3]
console.log(addArguments(1, 2)); // 3
const leadingThirtySevenList = list.bind(null, 37);
const addThirtySeven = addArguments.bind(null, 37);
console.log(leadingThirtySevenList()); // [37]
console.log(leadingThirtySevenList(1, 2, 3)); // [37,1,2,3]
console.log(addThirtySeven(5)); // 42
console.log(addThirtySeven(1, 10, 12)); // 38

// 9
function add(num1, num2) {
  return num1 + num2;
}
var addFive = add.bind(null, 5);
console.log(addFive(10));  // 15

// 10
var x = 9;
var module = {
  x: 81,
  getX: function() { return this.x; }
};
var retrieveX = module.getX;
console.log(retrieveX.bind({ x: 33 })());

// 11
let numArray = [1,3,4,5,6];
console.log(Math.max(numArray)); // undefined : in turn this code will fail to do what we want, then how to fix it
console.log(Math.max.apply(null, numArray)); // 5