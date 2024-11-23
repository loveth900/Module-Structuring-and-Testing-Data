// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

window.location.href = "file:///C:/Users/mitch/documents/project/file.txt";
const lastSlashIndex = filePath.lastIndexOf("\\");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable 
// Extract the dir part (everything before the last '\')
const dir = filePath.slice(0, lastBackslashIndex);
// Find the last dot index in the `base` to extract the `ext` part
const lastDotIndex = base.lastIndexOf(".");
const ext = base.slice(lastDotIndex); // Includes the dot
// Create a variable to store the ext part of the variable

// Log the results
console.log(`Dir: ${dir}`); 
console.log(`Ext: ${ext}`); 
