let animals = [{ type: 'lion' }, 'tiger'];
let clones = [...animals]; // Spread operators does a shallow copy
// let clones = animals.slice(); // Slice method with no args also shallow copies

clones[0].type = 'bear'; // Pass by reference
clones[1] = 'sheep'; // Pass by value

console.log(animals[0].type, clones[0].type); // bear bear
console.log(animals[1], clones[1]); // tiger sheep

// The only way to deep copy a non-primitive data type in JS will be using mix of JSON.parse and JSON.stringify
