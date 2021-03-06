// ------ Primitive Data Types ------

// Number - number values
const day = 100;
console.log(typeof day);

// Strings - text values
const dollars = "one hundred";
console.log(typeof dollars);

// Booleans - true or false values
let isLogged = true;
console.log(typeof isLogged);

// Undefined - recognized but undefined
let hairStyle;
console.log(typeof hairStyle);

// Null - value is set but settig value to nothing
let min = null;
console.log(typeof min);

// Symbol - Once you create a symbol, its value is kept private and for internal use.

const me = Symbol();
console.log(typeof me);

// ------ Reference Datatypes ------

// Objects - containers for named values called properties or methods.
const tweet = {
  name: Brian,
  age: 36,
  tweets: 1021,
};

// Arrays - special variable, which can hold more than one value at a time.

const names = ["Brian", "Amy", "Randy", "LeaAnn", "Mark", "Jane"];
