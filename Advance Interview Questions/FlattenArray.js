let arrayOne = [[2, 3], [4, 5], [6, 7]]
// Expected Output after flattening : [2,3,4,5,6,7]
// First Approach : Concat + Spread Operator 
const flattenedArr = [].concat(...testArr)
console.log(flattenedArr) // [2,3,4,5,6,7]
// Process : Spread operator works like a for loop or map. It will give each child array to the concat method one by one and then concat works like expected.

// Second Approach : Array.flat() method which takes on parameter that is dept of flattening (default is one)
const newFlattednedArr = arrayOne.flat()
console.log(newFlattednedArr) // [2,3,4,5,6,7]

// What if the level of depth is more?
let arrayTwo = [[2, 3], [4, 5, [7,8]], [6, 7]]
const flattenedArrTwo = arrayTwo.flat(2)
console.log(flattenedArrTwo) // [2,3,4,5,7,8,6,7]
