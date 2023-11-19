function persistence(num) {
    // Base case: If num is a single digit, return 0.
    if (num < 10) {
      return 0;
    }
  
    // Initialize a variable to keep track of the number of multiplicative steps.
    let steps = 0;
  
    // Convert the number to a string to work with its digits.
    num = num.toString();
  
    // Calculate the product of its digits.
    let product = 1;
    for (let i = 0; i < num.length; i++) {
      product *= parseInt(num[i]);
    }
  
    // Recursively call the function with the product as the new input.
    // Increment the steps count.
    return 1 + persistence(product);
  }
  