// Create two sets of integers
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([4, 5, 6, 7, 8]);

// Function to compute and display the union of two sets
function computeUnion(set1, set2) {
  const unionSet = new Set([...set1, ...set2]);
  console.log('Union of Set A and Set B:', unionSet);
}

// Function to compute and display the intersection of two sets
function computeIntersection(set1, set2) {
  const intersectionSet = new Set([...set1].filter((x) => set2.has(x)));
  console.log('Intersection of Set A and Set B:', intersectionSet);
}

// Function to compute and display the difference between two sets
function computeDifference(set1, set2) {
  const differenceSet = new Set([...set1].filter((x) => !set2.has(x)));
  console.log('Difference between Set A and Set B:', differenceSet);
}

// Test the functions
computeUnion(setA, setB);
computeIntersection(setA, setB);
computeDifference(setA, setB);
