// sortNumbers.js
function sortNumbers(numbersArray) {
    return numbersArray.slice().sort((a, b) => a - b);
  }
  
  const sampleArray = [5, 2, 9, 1, 5, 6]; // Replace with your sample array of numbers
  const sortedArray = sortNumbers(sampleArray);
  console.log(sortedArray);
  