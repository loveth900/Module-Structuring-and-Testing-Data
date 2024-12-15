/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/


function validatePassword(password, passwords) {
    // Check length
    if (password.length < 5) {
        return false;
    }
    
    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    
    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        return false;
    }
    
    // Check for at least one number
    if (!/[0-9]/.test(password)) {
        return false;
    }
    
    // Check for at least one special character
    if (!/[!#$%.&*]/.test(password)) {
        return false;
    }

    // Check if password already exists in the passwords array
    if (passwords.includes(password)) {
        return false;
    }

    // If all conditions pass, return true
    return true;
}

// Test cases
console.log(validatePassword("abc", [])); // Output: false (length < 5)
console.log(validatePassword("Ab1!", [])); // Output: true (valid password)
console.log(validatePassword("Ab1!", ["Ab1!"])); // Output: false (already in passwords array)
console.log(validatePassword("password1", [])); // Output: false (missing special symbol)
console.log(validatePassword("Password1!", [])); // Output: true (valid password)
