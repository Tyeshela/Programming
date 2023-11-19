function unicodeToString(unicodeArray) {
    return String.fromCharCode(...unicodeArray);
  }
  
  const sampleUnicodeArray = [65, 66, 67]; // Replace with your sample Unicode values
  const resultString = unicodeToString(sampleUnicodeArray);
  console.log(resultString);