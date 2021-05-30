// MDN Documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

/*  ------ JavaScript Function ------

A block of code designed to perform a particular task and is executed only when "something" invokes it (calls it). 

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {} */

function myName(parameter1) {
  console.log("hi my name is " + parameter1); //code to be executeed when the function is invoked.
}

/* Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables. */

// ------ Function invocation ------
myName("Brian");

/*  ------ Function Return ------

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller": */

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}

var x = myFunction(4, 3); // Function is called, return value will end up in x

console.log(x); // value of x is 12

// ------ Callback Function and Highter Order Functions ------
/* A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action. */
/*A higher order function is a function that takes a function as an argument, or returns a function */

const message = function () {
  console.log("This message is shown after 3 seconds");
};

setTimeout(message, 3000);
// message is the callback function that is passed as a argument in the setTimeout method
// Set time out would be the higher order function since it takes the function message as a callback

// ------ Arrow functions ----- Basic syntax

// One param. With simple expression return is implicit and is not needed:
(param) => expression;

// Multiple params require parentheses. With simple expression return is not needed:
(param1, paramN) => expression;

// Multiline statements require body brackets and return:
(param) => {
  let a = 1;
  return a + param;
};

// Multiple params require parentheses. Multiline statements require body brackets and return:
(param1, paramN) => {
  let a = 1;
  return a + param1 + paramN;
};
