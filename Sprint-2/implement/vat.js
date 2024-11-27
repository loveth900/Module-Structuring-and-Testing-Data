
function calculatePriceWithVAT(price) {
    // Multiply the price by 1.2 to add 20% VAT
    const priceWithVAT = price * 1.2;

    // Return the final price
    return priceWithVAT.toFixed(2); // Round to 2 decimal places for currency
}

console.log(calculatePriceWithVAT(50));  // Output: 60.00
console.log(calculatePriceWithVAT(100)); // Output: 120.00
console.log(calculatePriceWithVAT(29.99)); // Output: 35.99
console.log(calculatePriceWithVAT(0));   // Output: 0.00
