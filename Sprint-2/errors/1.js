// Predict and explain first...
// The provided code contains a fundamental error in the way variables are declared

// Why will an error occur when this program runs?

// Try playing computer with the example to work out what is going on


function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));  // Output: "50%"
console.log(convertToPercentage(0.25)); // Output: "25%"
console.log(convertToPercentage(1));    // Output: "100%"

