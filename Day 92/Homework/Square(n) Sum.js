function squareSum(numbers) {
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      const squared = numbers[i] * numbers[i];
      sum += squared;
    }
  
    return sum;
  }
  