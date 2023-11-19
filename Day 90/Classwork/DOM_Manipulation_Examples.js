// Select all 'div' elements
let divs = document.getElementsByTagName("div");

// Change background color for each 'div'
for (let i = 0; i < divs.length; i++) {
  divs[i].style.backgroundColor = "#f0f0f0";
}

// Select all 'a' (anchor) elements
let links = document.getElementsByTagName("a");

// Change font color for each link
for (let j = 0; j < links.length; j++) {
  links[j].style.color = "#0000ff";
}

// Event Listener Example
// Change background color of the body when the window is resized
window.addEventListener("resize", function() {
  document.body.style.backgroundColor = "#ff9999";
});

// Query Selector
// Select the first element with class 'special' and change its text color
let specialElement = document.querySelector('.special');
specialElement.style.color = "#9900cc";
