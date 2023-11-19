// stringToUnicode.js
function stringToUnicode(inputString) {
    const unicodeArray = [];
    for (let i = 0; i < inputString.length; i++) {
      unicodeArray.push(inputString.charCodeAt(i));
    }
    return unicodeArray;
  }
  
  const sampleString = "ABC"; // Replace with your sample string
  const resultUnicodeArray = stringToUnicode(sampleString);
  console.log(resultUnicodeArray);
  