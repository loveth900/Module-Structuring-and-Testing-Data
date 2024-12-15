

const num = 56.5678;

// Create a variable called wholeNumberPart and assign to it the whole number part of num (56)
const wholeNumberPart = Math.floor(num);

// Create a variable called decimalPart and assign to it the decimal part of num (0.5678)
const decimalPart = num - wholeNumberPart;

// Create a variable called roundedNum and assign to it num rounded to the nearest whole number (57)
const roundedNum = Math.round(num);

// Log your variables to the console to check your answers
console.log("Whole Number Part:", wholeNumberPart); // Expected output: 56
console.log("Decimal Part:", decimalPart);          // Expected output: 0.5678
console.log("Rounded Number:", roundedNum);         // Expected output: 57
