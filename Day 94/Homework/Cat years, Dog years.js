const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears, dogYears;
    if (humanYears === 1) return [1, 15, 15];
    else if (humanYears === 2) return [2, 24, 24];
    else {
      catYears = 4 * (humanYears - 2) + 24;
      dogYears = 5 * (humanYears - 2) + 24;
      return [humanYears, catYears, dogYears];
    }
  };