// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeat(str, count) {
    // Case 1: Handle negative count
    if (count < 0) {
        throw new Error('Count must be a positive integer');
    }
    
    // Case 2: Handle count of 0
    if (count === 0) {
        return '';
    }

    // Case 3: Handle count of 1 (no repetition)
    if (count === 1) {
        return str;
    }

    // Case 4: Repeat string for count > 1
    return str.repeat(count);
}

// Test Cases
console.log(repeat("hello", 3)); // Output: "hellohellohello" (repeated 3 times)
console.log(repeat("hello", 1)); // Output: "hello" (no repetition)
console.log(repeat("hello", 0)); // Output: "" (empty string)
console.log(repeat("hello", -2)); // Throws Error: "Count must be a positive integer"
