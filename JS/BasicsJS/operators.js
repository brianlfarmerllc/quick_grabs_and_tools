// ------ Basic Arithmetic Operators ------

let test = 10;

// adds 3 to test
console.log(test + 3);

// subtracts 3 from test
console.log(test - 3);

// multiplys 3 times test
console.log(test * 3);

// divides test by 3
console.log(test / 3);

// test to the power of 3
console.log(test ** 3);

// finds remainder of test divided by 3
console.log(test % 3);

// Incriment test by 1
console.log(test++);

// Decrement test by 1
console.log(test--);

// adds 20 to test
console.log((test += 20));

// ------ Comparison Operators -------

// == Is Equal To, but does not check the data type

console.log(5 == 5); // this would return a true
console.log(5 == "5"); // this would return a true

// === Is Equal To, but also checks to see if data type is the same

console.log(5 === 5); // this would return a true
console.log(5 === "5"); // this would return a false

// != Not Equal

console.log(5 != "5"); // This would return a false

// !== Not Equal value or not equal type

console.log(5 !== "5"); // This returns true

// < Less Than and > Greater Than and >= <= Equal To

console.log(10 > 2); // This would return a true
console.log(10 < 2); // This would return a false
console.log(10 >= 10); // This would return a true

// Logical Operators --------

// && Logical And -- Checks that both camparisons are true
const hour = 18;
const day = 6;

if (hour >= 17 && day >= 5) {
  console.log("Time for the weekend");
} else {
  console.log("Still working");
}

// || Logical OR -- Checks that at least one of the camparisons are true
const hour = 18;
const day = 6;

if (hour >= 17 || day >= 5) {
  console.log("Time for the weekend");
} else {
  console.log("Still working");
}

// ! Logical Not -- Checks that the camparison is not true
const age = 17;

if (hour != 17) {
  console.log("Im seventeen");
} else {
  console.log("Im not only 17");
}

// ------ Conditional (ternary) operator ------

// The conditional operator is the only JavaScript operator that takes three operands.
// The operator can have one of two values based on a condition.

// The syntax is:
condition ? val1 : val2;

// If condition is true, the operator has the value of "val1". Otherwise it has the value of "val2".
// You can use the conditional operator anywhere you would use a standard operator.

// For example,

var status = age >= 18 ? "adult" : "minor";

// ------ Spread syntax (...) ------

// allows an iterable such as an array expression or string to be expanded in places where zero or
// more arguments (for function calls) or elements (for array literals) are expected, or an object
// expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // expected output: 6
