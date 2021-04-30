/* Break statement
Use the break statement to terminate a loop, switch, or in conjunction with a labeled statement.

When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch 
immediately and transfers control to the following statement.
When you use break with a label, it terminates the specified labeled statement.
The syntax of the break statement looks like this:

break;
break [label];
The first form of the syntax terminates the innermost enclosing loop or switch.
The second form of the syntax terminates the specified enclosing labeled statement.

The following example iterates through the elements in an array until it finds the index of an element whose value is theValue: */

for (let i = 0; i < a.length; i++) {
  if (a[i] === theValue) {
    break;
  }
}
