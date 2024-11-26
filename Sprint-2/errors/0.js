// Predict and explain first...

//  from my own prediction The function capitalise has a syntax issue because it redeclares the parameter str using let.
//  This is not allowed in JavaScript as the function parameter already occupies the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring 

 
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}


console.log(capitalise("hello"));   // Output: "Hello"
console.log(capitalise("world"));   // Output: "World"
console.log(capitalise("javascript")); // Output: "Javascript"
