// Function 1: Double a number
function double(x) {
    return x * 2;
  }
  
  // Function 2: Add 5 to a number
  function addFive(x) {
    return x + 5;
  }
  
  // Function 3: Square a number
  function square(x) {
    return x * x;
  }
  
  // Compose functions using bind
  const composedFunction = square.bind(null, addFive.bind(null, double));
  
  // Example usage
  const inputNumber = 3;
  const result = composedFunction(inputNumber);
  console.log(result); // Output: 64
  