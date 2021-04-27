/* JavaScript Function ----- 

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

myName("Brian"); // Function invocation

/* Function Return

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller": */

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}

var x = myFunction(4, 3); // Function is called, return value will end up in x

console.log(x);
