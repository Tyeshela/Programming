function squareDigits(num) {
    const numStr = num.toString();
    let resultStr = '';
  
    for (let i = 0; i < numStr.length; i++) {
      const digit = parseInt(numStr[i], 10);
      const squaredDigit = digit * digit;
      resultStr += squaredDigit.toString();
    }
  
    const resultNum = parseInt(resultStr, 10);
  
    return resultNum;
  }