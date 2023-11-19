// Create a JavaScript Map representing a dictionary of words and meanings
const wordDictionary = new Map([
    ['apple', 'A fruit that grows on trees.'],
    ['car', 'A motor vehicle with four wheels.'],
    ['computer', 'An electronic device for processing data.'],
    ['book', 'A written or printed work consisting of pages.'],
    ['house', 'A building where people live.'],
  ]);
  
  // Function to find and display the meaning of a word
  function findMeaning(word) {
    if (wordDictionary.has(word)) {
      console.log(`The meaning of '${word}' is: ${wordDictionary.get(word)}`);
    } else {
      console.log(`The word '${word}' is not found in the dictionary.`);
    }
  }
  
  // Test the function
  findMeaning('apple');
  findMeaning('computer');
  findMeaning('dog');
  