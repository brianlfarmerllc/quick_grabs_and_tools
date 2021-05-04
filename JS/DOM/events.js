// MDN Documentation https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

// Events

/* Events are actions or occurrences that happen in the system you are programming, 
which the system tells you about so you can respond to them in some way if desired. 

In the case of the Web, events are fired inside the browser window, and tend to be attached to a 
specific item that resides in it — this might be a single element, set of elements, the HTML document 
, or the entire browser window. There are many different types of events that can occur. 

For example:

The user selects a certain element or hovers the cursor over a certain element.
The user chooses a key on the keyboard.
The user resizes or closes the browser window.
A web page finishes loading.
A form is submitted.

You can gather from this (and from glancing at the MDN Event reference - https://developer.mozilla.org/en-US/docs/Web/Events) 
that there are a lot of events that can be responded to.

Each available event has an event handler (event listener), which is a block of code (a JavaScript function 
that a programmer creates) that runs when the event fires. When such a block of code is defined to run in
response to an event, we say we are registering an event handler.
*/

// Event Listeners

let btn = document.querySelector("button");

/* The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is 
delivered to the target. When event is passed as a paramater you have acces to the event */
btn.addEventListener("click", function (event) {
  console.log(event);
});

/* The GlobalEventHandlers mixin describes the event handlers common to several interfaces like HTMLElement, 
Document, or Window. Each of these interfaces can, of course, add more event handlers in addition to the ones listed below.
https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers */

function click(event) {
  console.log(event);
}

btn.onclick = click;

// -------- Event Bubbling --------

let item = document.querySelector("li");

/*When an event is fired on an element that has parent elements, modern browsers run two different phases —

In the capturing phase:

The browser checks to see if the element's outer-most ancestor (<html>) has an onclick event handler registered 
on it for the capturing phase, and runs it if so. Then it moves on to the next element inside <html> and does 
the same thing, then the next one, and so on until it reaches the element that was actually selected.

In the bubbling phase, the exact opposite occurs:

The browser checks to see if the element selected has an onclick event handler registered on it for the 
bubbling phase, and runs it if so. Then it moves on to the next immediate ancestor element and does the 
same thing, then the next one, and so on until it reaches the <html> element.

Fixing the problem with stopPropagation()

The standard Event object has a function available on it called stopPropagation() which, when invoked on a 
handler's event object, makes it so that first handler is run but the event doesn't bubble any further up 
the chain, so no more handlers will be run.
*/

item.addEventListener("click", function (e) {
  e.target.remove(); // would allow bubbeling to parrent element, or other ancestor element.
});

item.addEventListener("click", function (e) {
  e.stopPropagation(); // would stop proppigation to parrent or other ancestor element.
  e.target.remove();
});

/* -------- Preventing Default Browser Behavior -------- 

Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. 
The most common example is that of a web form, for example, a custom registration form. When you fill in the 
details and select the submit button, the natural behavior is for the data to be submitted to a specified page 
on the server for processing, and the browser to be redirected to a "success message" page.

The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the 
submission to the server and give an error message saying what's wrong and what needs to be done to put things 
right. Some browsers support automatic form data validation features, but since many don't, you are advised to 
not rely on those and implement your own validation checks. Let's look at a simple example.*/

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.onsubmit = function (e) {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault(); // prevents the default behavior
    para.textContent = "You need to fill in both names!";
  }
};
