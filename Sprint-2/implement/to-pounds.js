// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(kilograms) {
    // Convert kilograms to pounds (1 kg = 2.20462 pounds)
    const pounds = kilograms * 2.20462;
  
    // Return the result, rounded to 2 decimal places
    return parseFloat(pounds.toFixed(2));
  }
  