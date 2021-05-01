// MDN Docunmentation https://developer.mozilla.org/en-US/docs/Glossary/Scope

// Using Let ----------

//Global Scope
let food = "apple";
let fruits = 5;

function store() {
  //Function Scope
  let food = "banana";
  let fruits = 4;
}
store();

//Block Scope
for (let fruits = 0; fruits < 10; fruits++) {
  console.log(fruits);
}

/* Logs apple and 5 because banana and 4 do not exist out side the scope of the function and fruits 
does not exist out side the block scope when using let or const */
console.log(food, fruits);

// Using Var ----------

//Global Scope
var food1 = "apple";
var fruits1 = 5;

function store() {
  //Function Scope
  var food1 = "banana";
  var fruits1 = 4;
}
store();

//Block Scope
for (var fruits1 = 0; fruits1 < 10; fruits1++) {
  console.log(fruits1);
}

/* Logs apple and 10 because banana and 4 do not exist out side the scope of the function but fruits 
is altered in block scope when using the var variable */
console.log(food1, fruits1);
