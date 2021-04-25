// Adding Strings 

// Using the Adition Operator extra spaces needs to be included in the string between the sting and variables
const dogName = 'Fluffy';
console.log('My dog, ' + dogName + ', is a great pet!');

// The concat function joins together the calling string with provided arguments and returns a new string. 
// An important thing is that it does not change the string, but returns a new one.
const hello = 'Hello';
console.log(hello.concat(' World!'));

// The template literals are a new way to join strings introduced in ES6. Strings are enclosed by the back-tick (``) Template literals can evaluate expressions
// inserted as a part of the string, enclosed in a dollar sign and curly brackets.
const dogName = 'Fluffy';
console.log(`My dog, ${dogName}, is a great pet!`);