function digitalRoot(n) {
    if (n < 10) {
      return n;
    }
  
    const numStr = n.toString();
  
    const sum = numStr.split('').map(Number).reduce((a, b) => a + b, 0);
  
    return digitalRoot(sum);
  }