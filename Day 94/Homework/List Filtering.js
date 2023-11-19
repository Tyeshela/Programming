function filter_list(l) {
    // Initialize an empty array to store the filtered elements
    const filteredList = [];
  
    // Iterate through the input list
    for (let i = 0; i < l.length; i++) {
      // Check if the current element is a non-negative integer
      if (typeof l[i] === 'number' && l[i] >= 0 && Number.isInteger(l[i])) {
        // If it is, add it to the filtered list
        filteredList.push(l[i]);
      }
    }
  
    // Return the filtered list
    return filteredList;
  }