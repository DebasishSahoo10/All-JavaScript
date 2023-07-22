# Functional Programming

1. What is difference between Map and ForEach?

: (a) The map() method returns a new array with the results of calling a provided function on each element of the original array. It does not mutates the original array.
(b) The forEach() method does not return anything. It simply executes a provided function once for each element in the array. It is primarily used for performing side effects, such as logging or updating variables or attaching event listeners to a series of DOM elements.
(c) Both the methods hab ability to mutate the original array, if we push them to do so.
(d) The map() method is chainable, which means you can chain other array methods (e.g., filter(), reduce(), sort()) after calling map(). This allows for more concise and expressive code.
(e) The forEach() method does not return a value, so it cannot be directly chained with other array methods.

Important : The return value of map() is an array of the same length as the original array. Even if we attach a condition to it and try to return a only few elements of an array, the map method will return undefined in place of those elements which didn't meet the condition.

2. What are the array methods that mutates the array?

: (1) Push (2) Pop (3) Shift (4) Unshift (5) Splice (6) Reverse (7) Sort

3. What is Functional Programming?

: 

4. What are Higher Order Functions?

: A function that takes another function as an argument or returns another function out of it, is called a Higher Order Function. For example : Map Method for Array or Event Listeners.

5. Why Functions are first class citizens in JS?