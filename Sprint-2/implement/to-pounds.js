

function toPounds(kilograms) {
    // Multiply by the conversion factor to get pounds
    const pounds = kilograms * 2.20462;
    return pounds.toFixed(2); // Return the result rounded to 2 decimal places
}

console.log(toPounds(1));      // Output: 2.20 (1 kg)
console.log(toPounds(10));     // Output: 22.05 (10 kg)
console.log(toPounds(5.5));    // Output: 12.13 (5.5 kg)
console.log(toPounds(0));      // Output: 0.00 (0 kg)
console.log(toPounds(100));    // Output: 220.46 (100 kg)

