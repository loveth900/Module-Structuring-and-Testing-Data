// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime


function isPrime(num) {
    // Handle edge cases for numbers less than or equal to 1
    if (num <= 1) return false;
    
    // 2 is the only even prime number
    if (num === 2) return true;
    
    // Eliminate even numbers greater than 2
    if (num % 2 === 0) return false;

    // Check for divisibility from 3 to sqrt(num)
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

module.exports = isPrime;
