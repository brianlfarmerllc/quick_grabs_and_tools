// -------- Local Storage -------

/* local storage accepts a (key, value) pair in string datatype and is saved in the browser. 
Data in local storage persists in the browser data until it is cleared.
*/

// Add to local storage with the setItem() method, localStorage.setItem(key: string, value: string)

localStorage.setItem("myName", "Brian");

// Get from local storage using the getItem() method that returns the value in string.

localStorage.getItem("myName");

// Clear local storage data using the clear method on local storage

localStorage.clear();

// Add arrays or objects to local storage with the JSON.stringify() method to preserve the original structure.

const todoList = ["feed the dog", "bath the dog", "go on hike", "play fetch"];

localStorage.setItem("todos", JSON.stringify(todoList));

// Get from local storage using the JSON.parse() method with getItem() to convert arrays or objects to original fromat.

const returned = JSON.parse(localStorage.getItem("todos"));

// -------- Session Storage --------

/* session storage accepts a (key, value) pair in string datatype and is saved in the browser as long as the browser window is open.
Once the browser is closed the session storage data no longer persists.
*/

// Add to session storage with the setItem() method sessionStorage.setItem(key: string, value: string)

sessionStorage.setItem("yourName", "Amy");
