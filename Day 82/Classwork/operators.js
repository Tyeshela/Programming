// Arithmetic Operators
let a = 10;
let b = 3;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let power = a ** b; // Exponentiation (ES6)

console.log("Arithmetic Operators:");
console.log("Sum:", sum); // 13
console.log("Difference:", difference); // 7
console.log("Product:", product); // 30
console.log("Quotient:", quotient); // 3.333...
console.log("Remainder:", remainder); // 1
console.log("Power:", power); // 1000 (ES6)

// Assignment Operators
let x = 5;
x += 3; // Add and assign
x -= 2; // Subtract and assign
x *= 4; // Multiply and assign
x /= 2; // Divide and assign
x %= 3; // Modulus and assign

console.log("\nAssignment Operators:");
console.log("x after +=:", x); // 1

// Comparison Operators
let num1 = 10;
let num2 = 5;
let isEqual = num1 === num2; // Equal to
let isNotEqual = num1 !== num2; // Not equal to
let isGreaterThan = num1 > num2; // Greater than
let isLessThan = num1 < num2; // Less than
let isGreaterOrEqual = num1 >= num2; // Greater than or equal to
let isLessOrEqual = num1 <= num2; // Less than or equal to

console.log("\nComparison Operators:");
console.log("isEqual:", isEqual); // false
console.log("isNotEqual:", isNotEqual); // true
console.log("isGreaterThan:", isGreaterThan); // true
console.log("isLessThan:", isLessThan); // false
console.log("isGreaterOrEqual:", isGreaterOrEqual); // true
console.log("isLessOrEqual:", isLessOrEqual); // false

// Logical Operators
let isTrue = true;
let isFalse = false;
let andResult = isTrue && isFalse; // Logical AND
let orResult = isTrue || isFalse; // Logical OR
let notResult = !isTrue; // Logical NOT

console.log("\nLogical Operators:");
console.log("andResult:", andResult); // false
console.log("orResult:", orResult); // true
console.log("notResult:", notResult); // false