function stray(numbers) {
    // Initialize an empty object to store the counts of each unique number.
    const counts = {};
  
    // Iterate through the array and count the occurrences of each number.
    for (const number of numbers) {
      if (counts[number]) {
        counts[number]++;
      } else {
        counts[number] = 1;
      }
    }
  
    // Find the number with a count of 1 and return it.
    for (const number in counts) {
      if (counts[number] === 1) {
        return parseInt(number); // Convert the number from string to integer
      }
    }
  }
  