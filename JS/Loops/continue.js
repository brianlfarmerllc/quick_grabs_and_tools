/*Continue statement
The continue statement can be used to restart a while, do-while, for, or label statement.

When you use continue without a label, it terminates the current iteration of the innermost enclosing while, 
do-while, or for statement and continues execution of the loop with the next iteration. In contrast to the break statement, 
continue does not terminate the execution of the loop entirely. In a while loop, it jumps back to the condition. In a for loop, 
it jumps to the increment-expression.

When you use continue with a label, it applies to the looping statement identified with that label.
The syntax of the continue statement looks like the following:

continue [label];

The following example shows a while loop with a continue statement that executes when the value of i is 3. Thus, n takes on the values 1, 3, 7, and 12.
*/

// Using Continue
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

// Not using Continue
let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15
