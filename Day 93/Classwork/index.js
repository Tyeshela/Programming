// JavaScript classwork for Day 93
// This script demonstrates event handling and basic DOM manipulation in JavaScript.

// Simulating a button click event to increment a counter
let clickCounter = 0;
function onButtonClick() {
    clickCounter++;
    console.log(`Button clicked ${clickCounter} times.`);
}

// Simulating changing the background color of an element on a button click
const colors = ["red", "blue", "green", "yellow"];
let currentColorIndex = 0;
function onChangeColorClick() {
    const newColor = colors[currentColorIndex];
    console.log(`Changing color to ${newColor}`);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Simulating mouse hover event to change an element's color
let hoverColor = "green";
function onMouseHover() {
    console.log(`Element hovered, changing color to ${hoverColor}`);
}

// Simulating show/hide content on a button click
let isContentVisible = false;
function onToggleContentClick() {
    isContentVisible = !isContentVisible;
    console.log(`Content visibility: ${isContentVisible}`);
}

// Usage examples (simulating the events)
onButtonClick();
onChangeColorClick();
onMouseHover();
onToggleContentClick();
