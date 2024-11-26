// Below are the steps for how BMI is calculated

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// You will need to implement a function that calculates the BMI of someone based off their weight and height

// Given someone's weight in kg and height in metres
// Then when we call this function with the weight and height
// It should return their Body Mass Index to 1 decimal place

function calculateBMI(weight, height) {
    // Step 1: Square the height
    const heightSquared = height * height;

    // Step 2: Divide weight by squared height
    const bmi = weight / heightSquared;

    // Step 3: Round the result to 1 decimal place
    return Math.round(bmi * 10) / 10;
}

// Example Usage
console.log(calculateBMI(70, 1.73)); // Output: 23.4
console.log(calculateBMI(90, 1.8));  // Output: 27.8
console.log(calculateBMI(50, 1.6));  // Output: 19.5
