// JavaScript classwork for Day 95
// Demonstrating 'filter', 'sort', and 'slice' methods

// Array of numbers
const numbers = [1, 3, 5, 2, 10, 7];

// Filter: Getting numbers greater than 3
const filteredNumbers = numbers.filter(num => num > 3);
console.log("Filtered Numbers:", filteredNumbers);

// Sort: Sorting numbers in ascending order
const sortedNumbers = numbers.slice().sort((a, b) => a - b); // Using slice to not mutate original array
console.log("Sorted Numbers:", sortedNumbers);

// Slice: Getting the first 3 elements
const slicedNumbers = numbers.slice(0, 3);
console.log("Sliced Numbers:", slicedNumbers);
