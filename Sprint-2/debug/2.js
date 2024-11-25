// Predict and explain first...
// Prediction : num is defined with const. All of these console.log()s will return to"3".

let num = 103;

function getLastDigit() {
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

//I had to make a parameter for the function to take in instead of having a constant value that it uses, I made the const let and I added the parameter num to the getLast Digit Function.