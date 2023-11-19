// JavaScript classwork for Day 94
// Demonstrating Event Bubbling and Capturing

// Parent element event listener
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked (Bubbling Phase)");
}, false); // false denotes bubbling phase

// Child element event listener
document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked (Bubbling Phase)");
}, false); // false denotes bubbling phase

// Capturing phase demonstration
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked (Capturing Phase)");
}, true); // true denotes capturing phase

// Usage note: This code assumes the existence of elements with IDs 'parent' and 'child'.

// Event Bubbling: When an event is fired on an element, it first runs the handlers on it, 
//     then on its parent, and so on upwards till the document. 
//     This is demonstrated in the first two event listeners with false as the third parameter.
// Event Capturing: The event goes down to the element. 
//     It's rarely used but available for cases when needed. 
//     This is shown in the last event listener with true as the third parameter.