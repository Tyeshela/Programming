function XO(str) {
    // Convert the string to lowercase to make it case-insensitive
    str = str.toLowerCase();
    
    // Initialize counters for 'x' and 'o'
    let countX = 0;
    let countO = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'x') {
        countX++;
      } else if (str[i] === 'o') {
        countO++;
      }
    }
    
    // Compare the counts of 'x's and 'o's and return the result
    return countX === countO;
  }