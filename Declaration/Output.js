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

// 2 : Properties of objects can be declared but not the whole object
const myData = {name : "a", hobby : "b"}
myData.name = "c"
console.log(myData) // {name : "c", hobby : "b"}

myData = {name : "x", hobby : "y"} // will throw an error
console.log(myData) // so this line will never run