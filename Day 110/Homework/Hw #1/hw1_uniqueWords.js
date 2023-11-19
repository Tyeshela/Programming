// Function to extract unique words from a string
function extractUniqueWords(inputString) {
    const words = inputString
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // Remove punctuation
      .split(' ');
  
    return new Set(words);
  }
  
  // Test the function
  const text = 'This is a sample text. This text contains sample words.';
  const uniqueWords = extractUniqueWords(text);
  console.log('Unique words in the text:', uniqueWords);
  