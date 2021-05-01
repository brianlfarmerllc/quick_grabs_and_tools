// HTMLCollection and NodeLists

/* The element methods getElementsByClassName() and getElementsByTagName() return a live HTMLCollection. 
It only includes the matching elements (e.g. class name or tag name) and does not include text nodes, 
it provides only two methods item and namedItem.

Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) 
that have all the classes given by classNames. */
const collectionsItems = document.getElementsByClassName("item");

/* The element method query selector and querySelectorAll() returns a static NodeList. They look like arrays but are not.
NodeLists have a defined forEach method as well as a few other methods including item, entries, keys, and values.
NodeLists behave differently depending on how you access them; if you access elements using childNodes, 
the returned list is live and will update as more elements are added to the node. If it’s accessed using querySelectorAll(),
the returned list is static and will not update if more elements are added to the node.

Returns a Node List of all element descendants of node that match selectors including include text nodes and comment nodes . */
const nodeItems = document.querySelectorAll(".item");

// Live HTML Collection vs Static Node List

// All return live HTML collection that update when appended to in live time and can be indexd
document.getElementsByTagName();
document.getElementsByClassName();
document.getElementById();

// All create static Node List that create a capture of the nnumber in list at the time the selector is called.
document.querySelector();
document.querySelectorAll();

// Can be converted to to a HTML collection if you select the query the parrent element.childrem
document.querySelector().children;

// Looping over Collections and Node Lists

/* For Loop and For...Of work for both Collections and Node Lists 
For Each only works with Node Lists */

// This works fine
for (let i = 0; i < collectionsItems.length; i++) {
  console.log(collectionsItems[i]);
}

// This works fine
for (let i = 0; i < nodeItems.length; i++) {
  console.log(nodeItems[i]);
}

// This does not work on HTML Collection
collectionsItems.forEach((element) => {
  console.log(element);
});

// This works fine
nodeItems.forEach((element) => {
  console.log(element);
});
