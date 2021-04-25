// Before 2015, using the "var" keyword was the only way to declare a JavaScript variable.
// var declarations are globally scoped or function/locally scoped.
var inbox = 10;


// Let variables are block scoped and only available for use within that block. Can be reassigned after 
// the initial value is set assigned or you can declare a variable name and assign a later value

let inbox1 = 100;
// value of inbox1 changed to 101
inbox1 = inbox1 + 1

let inbox2;
// assigning a value to a declared variable
inbox2 = inbox1 + 1


// Const variables maintain constant values. Like let declarations, const declarations are block scopedcan only 
// be accessed within the block they were declared. Can not be left as a undefined variable

const allInbox = inbox1 + inbox2;

// console logs 203 and this value can only be altered by changing inbox1 or inbox2
console.log(allInbox)

const inbox4;

// throws an error because of missing initializer in const declaration
console.log(inbox4);

// Variable naming convention - Never use spaces in variable names

// Camel Case
const yourVideos = 10;

// Pascal Case
const YourVideos = 20;

// Underscore
const your_videos = 30;


