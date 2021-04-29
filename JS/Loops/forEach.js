// For...Each

/* The forEach() METHOD is specifically for arrays and executes a provided function once for each array element.

A For Of statement looks as follows

iterable.forEach(variable => statement)

*/

const text = ["Array", "aRray", "arRay", "arrAy", "arraY"];

text.forEach((element) => console.log("\n" + element + "\n"));

/* forEach() calls a provided callback function once for each element in an array in ascending index order. 
It is not invoked for index properties that have been deleted or are uninitialized. (For sparse arrays, see example below.)

callback is invoked with three arguments:

the value of the element
the index of the element -optional
the Array object being traversed - optional 

forEach((currentValue, index, array) => { ... } )

There is no way to stop or break a forEach() loop other than by throwing an exception. 
If you need such behavior, the forEach() method is the wrong tool.

*/
