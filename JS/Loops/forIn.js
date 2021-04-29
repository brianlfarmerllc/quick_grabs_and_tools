// For...IN

/* he for...in statement iterates over all enumerable properties of an object that are keyed by strings 
(ignoring ones keyed by Symbols), including inherited enumerable properties. 

A For In statement looks as follows

for (variable in object) {
  statement
}

*/

const user = {
  name: "brian",
  age: "36",
  email: "brianlfarmerllc@gmail.com",
  phone: "214-843-3748",
};

// this would iterate over the keys in the user object and return a list of keys

for (let x in user) {
  console.log(x);
}

// like stating user.name to acces the value of name we can also use user[x] iterate over the object values.

for (let x in user) {
  console.log(user[x]);
}
