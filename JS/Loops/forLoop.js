// For Loop

/* A for loop repeats until a specified condition evaluates to false. 

A for statement looks as follows:

for (initialExpression ; conditionExpression; incrementExpression) {
    statement
}
*/

const text = ["Array", "aRray", "arRay", "arrAy", "arraY"];

for (let i = 0; i < text.length; i++) {
  console.log(text[i] + "\n");
}

// for loop fizz buzz

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
