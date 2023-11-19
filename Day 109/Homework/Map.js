function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const squared = myMap(numbers, (num) => num * num);
  console.log(squared); // [1, 4, 9, 16, 25]
  