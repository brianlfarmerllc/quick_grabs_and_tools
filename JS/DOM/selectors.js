// Various way to access a node within the document object using document.method()

// querySelector is a method to input a complete query and get the first occurrence back.
document.querySelector();

// querySelectorAll is a method to input a complete query and get all occurrences back.
document.querySelectorAll();

// getElementById is a method to get a single element with a specific id.
document.getElementById();

// getElementsByClassName is a method to get all elements with a specific class.
document.getElementsByClassName();

// getElementsByTagName is a method to get all elements with a specific HTML tag.
document.getElementsByTagName();

// ------ querySelector and querySelectorAll can be used with element tag, class, and id. ------

// element tag with a class <body class="main">
document.querySelector("body.main");

// a class as a child in a element tag <body><p class="text">...</p></body>
document.querySelector("body > .text");

// a class anywhere in a element tag <body><section><p class="text">...</p></section></body>
document.querySelector("body .text");

// a parent
document.querySelector("body").parentNode;

// all children
document.querySelector("body").childNodes;

// first child
document.querySelector("body").firstChild;

// last child
document.querySelector("body").lastChild;

// previous sibling
document.querySelector("body").previousSibling;

// next sibling
document.querySelector("body").nextSibling;
