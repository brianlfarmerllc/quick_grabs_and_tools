// If statements

const access = true;

// The if statement condition default is to compare to true or false
if (access) {
  console.log("you have been granted access");
}

const hour = 11;

// Using the if else statement with operators to compare agaist a value

if (hour >= 12) {
  console.log("good afternoon");
} else {
  console.log("good morning");
}

// Using the if else if to set up multiple conditions to compare agaisnt the know value
// But as soon as one statement is verified to match comparison the rest is skipped so order is important

const age = 18;

if (age >= 21) {
  console.log("you can buy smoke and booze");
} else if (age >= 18) {
  console.log("you can buy smokes");
} else {
  console.log("Sorry you are too young");
}
