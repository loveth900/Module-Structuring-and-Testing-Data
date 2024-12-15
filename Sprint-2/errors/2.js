
// Predict and explain first...

// prediction i cannot pass a value (like 3) directly as an argument in the function declaration. The function declaration syntax requires a parameter name, not a fixed value.
// this function should square any number but instead we're going to get an error

function square(num) {
    return num * num;
}


// Call the function with the argument 3
console.log(square(3)); // Output: 9