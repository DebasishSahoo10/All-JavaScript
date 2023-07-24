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