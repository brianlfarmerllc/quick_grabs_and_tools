// While Loop

/* The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. 
The condition is evaluated before executing the statement. The condition is often set to a know variable or state. 

A While statement looks as follows

while (condition) {
    statement
}

condition-
An expression evaluated before each pass through the loop. If this condition evaluates to true, statement is executed. 
When condition evaluates to false, execution continues with the statement after the while loop.

statement-
An optional statement that is executed as long as the condition evaluates to true. To execute multiple statements within 
the loop, use a block statement ({ ... }) to group those statements.

Note: Use the break statement to stop a loop before condition evaluates to true.
*/

let n = 0;
let x = 0;

while (n < 5) {
  n++;
  x += n;
  console.log(n, x);
}

/* The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. 
The condition is evaluated after executing the statement, resulting in the specified statement executing at least once. 

A Do...While statement looks as follows

do {
    statement
} while (condition)

do...while loop iterates at least once and reiterates until i is no longer true

*/

let result = "";
let i = 0;

do {
  i = i + 1;
  //   adding string and nember results in a string
  result = result + i;
} while (i < 5);

console.log(result);
