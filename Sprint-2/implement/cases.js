// A set of words can be grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all caps with underscores instead of spaces.

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Another example: "lord of the rings" should be "LORD_OF_THE_RINGS"

// You will need to come up with an appropriate name for the function
// Use the string documentation to help you find a solution


function convertToUpperSnakeCase(inputString) {
    // Step 1: Replace spaces with underscores
    const stringWithUnderscores = inputString.replace(/ /g, "_");
    
    // Step 2: Convert to uppercase
    const upperSnakeCase = stringWithUnderscores.toUpperCase();

    return upperSnakeCase;
}

// Example Usage
console.log(convertToUpperSnakeCase("hello there"));       // Output: "HELLO_THERE"
console.log(convertToUpperSnakeCase("lord of the rings")); // Output: "LORD_OF_THE_RINGS"
console.log(convertToUpperSnakeCase("programming fun"));   // Output: "PROGRAMMING_FUN"


console.log(convertToUpperSnakeCase("hello world"));       // Output: "HELLO_WORLD"
console.log(convertToUpperSnakeCase("a quick brown fox")); // Output: "A_QUICK_BROWN_FOX"
console.log(convertToUpperSnakeCase("UPPER snake CASE"));  // Output: "UPPER_SNAKE_CASE"
console.log(convertToUpperSnakeCase("  extra spaces "));   // Output: "EXTRA_SPACES"
console.log(convertToUpperSnakeCase(""));                 // Output: ""
