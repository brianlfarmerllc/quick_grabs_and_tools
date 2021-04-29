// For...of

/* The for...of statement creates a loop iterating over iterable objects, including: 
built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, 
and user-defined iterables. It invokes a custom iteration hook with statements to be executed for 
the value of each distinct property of the object. 

Not recognized on all browsers

A For Of statement looks as follows

for (variable of iterable) {
  statement
}
*/

const array1 = ["Array", "aRray", "arRay", "arrAy", "arraY"];

for (const element of array1) {
  console.log("\n" + element + "\n");
}

// Easier to break out of and stop the loop with break than forEach

for (const element of array1) {
  if (element === "arrAy") {
    console.log("\n" + "reached stopping point" + "\n");
    break;
  } else {
    console.log("\n" + element + "\n");
  }
}
