Array.prototype.extraProp = 'Extra'
const myArray = ['a', 'b', 'c']
myArray.forEach(i => console.log(i)) // Works as expected because forEach works on the length of the array
for (let item in myArray) {
  console.log(item) // prints "Extra" as well because here length is not criteria of the loop
}
// How to fix it then
for (let i in myArray) {
  if (myArray.hasOwnProperty(i)) {
    console.log(i) // works without printing extra
  }
}
myArray.map(item => console.log(item)) // this is again works as expected