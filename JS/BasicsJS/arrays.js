// MDN documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/* Array
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

Description
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a 
JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored 
at non-contiguous locations in the array */

// Array of fruits enclosed in [] and seperated by commas.
let fruits = ["Apple", "Banana", "Strawberry", "Orange", "Mango"];

// Common Operations --------

// array length
console.log(fruits.length); // shows 5 items

// Access an Array item using the index position - Iddex position starts at 0 and counts up

let first = fruits[0]; // Apple

let last = fruits[fruits.length - 1]; // Mango

// Loop over an Array
fruits.forEach(function (item, index) {
  console.log(item, index);
});

// Apple 0
// Banana 1
// Strawberry 2
// Orange 3
// Mango 4

// Add an item to the end of an Array
fruits.push("Grape");
console.log(fruits); // Grape added to end of array

// Remove an item from the end of an Array
fruits.pop();
console.log(fruits); // Grape removed from end of array

// Remove an item from the beginning of an Array
fruits.shift();
console.log(fruits); // remove Apple from the front

// Add an item to the beginning of an Array
fruits.unshift("Apple");
console.log(fruits); // Apple added back to the front

// Find the index of an item in the Array
console.log(fruits.indexOf("Banana")); // 1

// Remove an item by index position
fruits.splice(1, 2); // this is how to remove an item starting at position 1 and ending at position 2
console.log(fruits); // Banana and Strawberry removed from array

// Remove all items starting at index postion
fruits.splice(1); // this is how to remove an item starting at position 1 through end of array
console.log(fruits); // Only Apple left
