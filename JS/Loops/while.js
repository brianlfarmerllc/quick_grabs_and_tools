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

while (n <= 10) {
  console.log(n);
  n++;
}
