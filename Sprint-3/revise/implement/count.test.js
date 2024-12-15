// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.


function countChar(str, char) {
    // Initialize a counter for occurrences
    let count = 0;

    // Iterate over the string to check each character
    for (let i = 0; i < str.length; i++) {
        // Increment the counter if the current character matches `char`
        if (str[i] === char) {
            count++;
        }
    }

    // Return the total count
    return count;
}

// Test cases
// Scenario: Multiple Occurrences
console.log(countChar("aaaaa", "a")); // Output: 5 (multiple overlapping occurrences)
console.log(countChar("hello world", "o")); // Output: 2 (appears twice)

// Scenario: No Occurrences
console.log(countChar("hello world", "z")); // Output: 0 (no 'z' in the string)

// Additional Tests
console.log(countChar("AaAaA", "a")); // Output: 2 (case-sensitive match)
console.log(countChar("AaAaA", "A")); // Output: 3 (case-sensitive match)
console.log(countChar("", "a")); // Output: 0 (empty string)
