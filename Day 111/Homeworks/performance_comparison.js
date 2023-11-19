// Generate a large array of random numbers
const largeArray = Array.from({ length: 10000 }, () => Math.random());

// Measure the time it takes to sort using native method
console.time("NativeSort");
largeArray.sort((a, b) => a - b);
console.timeEnd("NativeSort");

// Measure the time it takes to sort using bind and apply
console.time("CustomSort");
const customSort = Array.prototype.sort.bind(largeArray);
customSort((a, b) => a - b);
console.timeEnd("CustomSort");
