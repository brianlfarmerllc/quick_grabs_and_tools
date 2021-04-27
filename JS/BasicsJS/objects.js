// MDN Documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

/* An object is a collection of properties, and a property is an association between a name (or key) and a value. 
A property's value can be a function, in which case the property is known as a method. In addition to objects that 
are predefined in the browser, you can define your own objects.*/

/* An object written using an object initializer, which is a comma-delimited list of zero or more pairs of property names and 
associated values of an object, enclosed in curly braces ({})*/
var yourCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

/* An object written by first creating the object then assigning properties and values to that object */
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

/* The properties of an object define the characteristics of the object. 
You access the properties of an object with a simple dot-notation: objectName.propertyName or 
by using a bracket notation: objectName['propertyName']*/
console.log(yourCar.make);
console.log(myCar.model);
console.log(myCar["make"]);

// You can use the bracket notation with for...in to iterate over all the enumerable properties of an object.
function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}
console.log(showProps(myCar, "myCar"));

// Using Constructor Functions

/* Create a function for the object type that specifies its name, properties, and methods.
Notice the use of this to assign values to the object's properties based on the values passed to the function. */
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Now you can create an object using the constructor function with an instance of the object with "new Object"
var briansCar = new Car("ford", "ranger", 2019);

console.log(briansCar);
