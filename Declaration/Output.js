// 1
const testFunc = () => {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};
testFunc(); // 3,3,3
// Why : Var is function scoped and setTimeout is an asynchronous code. so setTimeout will only run after the for loop has completely finished. and when for loop is completely finished the value of i will be 3, so set time out will take that value all the three times.
// But what if the VAR is replaced with LET.
const testFunc2 = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};
testFunc2(); // 0,1,2
// Let is block scoped, so for every loop iteration a new (i) has been declared, so every setTimeout will have reference to a different declaration
// for (var i = 0; i < 3; i++) {
//   ((i) => {
//     setTimeout(() => {
//       console.log(i)
//     }, 1000)
//   })(i)
// } // this is how we can fix it with var and closures

// 2 : Properties of objects can be declared but not the whole object
const myData = {name : "a", hobby : "b"}
myData.name = "c"
console.log(myData) // {name : "c", hobby : "b"}

myData = {name : "x", hobby : "y"} // will throw an error
console.log(myData) // so this line will never run

// 3
var name = "Dev";
(function () {
  console.log("Name is :" + name)
  var name = "Rev"
  console.log("Name is :" + name)
})() // Name is Undefined , Name is Rev
// Why : if the function block have a variable reference in it somewhere, then it will be hoisted and any line in the function will have that hoisted undefined reference

// 4
const x = 12
const testing = () => {
  console.log(x)
  var x = 10
}
testing() // undefined
// why : because the function will take reference from its own scope first and the x variable is declared with var, so it is hoisted to the top of its scope.

// 5
let a = 100
function App() {
  console.log('1', a) // error - stops executing
  let a = 42
  console.log('2', a) // 42
  {
    let a = 100
  }
  console.log('3', a) // 42
}
App()
// Why : because the first console log took the reference from the line below it, as it is said that let and const variable are hoisted but as they are in the temporal dead zone, we can't access it on the lines declared above their initilisation

// 6
let a2 = 100
function App() {
  a2 = 42
  console.log('1', a2) // 42
}
App()
console.log(a2) // 42
// Why : because even the the function execution can re-declare the let variable.

// 7
const array = [1, 2, 3, 4]
array = array.push(55) // error
// why : because array.push method returns the new length of the array. and we are assigning a new value to the contstant variable