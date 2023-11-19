// Function to count the frequency of words in a string
function wordFrequencyCounter(inputString) {
    const words = inputString
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // Remove punctuation
      .split(' ');
  
    const frequencyMap = new Map();
  
    for (const word of words) {
      if (frequencyMap.has(word)) {
        frequencyMap.set(word, frequencyMap.get(word) + 1);
      } else {
        frequencyMap.set(word, 1);
      }
    }
  
    return frequencyMap;
  }
  
  // Test the function
  const sampleText = 'This is a sample text. This text contains sample words.';
  const wordFrequency = wordFrequencyCounter(sampleText);
  console.log('Word frequency in the text:', wordFrequency);
  