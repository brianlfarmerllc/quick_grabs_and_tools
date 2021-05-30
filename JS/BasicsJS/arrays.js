// MDN documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/* Array
The JavaScript Array class is a global object that is used in the construction of arrays; which are high-level, list-like objects.

Description
Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Neither the length of a 
JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored 
at non-contiguous locations in the array */

// Array of fruits enclosed in [] and seperated by commas.
let fruits = ["Apple", "Banana", "Strawberry", "Orange", "Mango"];

// ------ Common Array Methods -------

// ------ Length ------
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

// ------ Push ------ Add an item to the end of an Array
fruits.push("Grape");
console.log(fruits); // Grape added to end of array

// ------ Pop ------ Remove an item from the end of an Array
fruits.pop();
console.log(fruits); // Grape removed from end of array

// ------ Shift ------ Remove an item from the beginning of an Array
fruits.shift();
console.log(fruits); // remove Apple from the front

// ------Unshift ------ Add an item to the beginning of an Array
fruits.unshift("Apple");
console.log(fruits); // Apple added back to the front

// ------ IndexOf ------ Find the index of an item in the Array
console.log(fruits.indexOf("Banana")); // 1

// ------Splice ------ Remove an item by index position
fruits.splice(1, 2); // this is how to remove an item starting at position 1 and ending at position 2
console.log(fruits); // Banana and Strawberry removed from array

// Remove all items starting at index postion
fruits.splice(1); // this is how to remove an item starting at position 1 through end of array
console.log(fruits); // Only Apple left

// ------ Map ------  creates a new array populated with the results of calling a provided
// function on every element in the calling array.
const array1 = [1, 4, 9, 16];

const map1 = array1.map((number) => number * 2); // creates new array taking each number * 2

console.log(map1); // expected output: Array [2, 8, 18, 32]

// ------ Find ------ returns the value of the "first" element in the provided array that satisfies the
// provided testing function. If no values satisfy the testing function, undefined is returned.
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found); // expected output: 12

// ------ Filter ------ creates a new array with all elements that pass the test implemented
// by the provided function
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result); // expected output: Array ["exuberant", "destruction", "present"]

// ------ Every ------ tests whether all elements in the array pass the test implemented by the
// provided function. It returns a Boolean value.
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold)); // expected output: true

// ------ Some ------ tests whether at least one element in the array passes the test implemented by the
// provided function. It returns a Boolean value.
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0; // checks whether an element is even

console.log(array.some(even)); // expected output: true

// ------ Sort ------  sorts the elements of an array in place and returns the sorted array. Modifies existing
// array. The default sort order is ascending, built upon converting the elements into strings, then comparing
// their sequences of UTF-16 code units values.

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]

// Use the compare function to order numbers from smallest to largst or largest to smallest
array1.sort((a, b) => a - b); // expected output: Array [1, 4, 21, 30, 100000]
array1.sort((a, b) => b - a); // expected output: Array [100000, 30, 21, 4, 1]
