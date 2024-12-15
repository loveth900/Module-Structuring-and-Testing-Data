// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  if (hours === 0) {
    // Handle midnight
    return `12:${minutes} am`;
  } else if (hours === 12) {
    // Handle noon
    return `12:${minutes} pm`;
  } else if (hours > 12) {
    // Afternoon and evening
    return `${hours - 12}:${minutes} pm`;
  } else {
    // Morning
    return `${hours}:${minutes} am`;
  }
}

console.log(formatAs12HourClock("00:00")); // Expected: "12:00 am"
console.log(formatAs12HourClock("12:00")); // Expected: "12:00 pm"
console.log(formatAs12HourClock("08:00")); // Expected: "08:00 am"
console.log(formatAs12HourClock("23:15")); // Expected: "11:15 pm"
console.log(formatAs12HourClock("15:45")); // Expected: "03:45 pm"
console.log(formatAs12HourClock("10:30")); // Expected: "10:30 am"


const testCases = [
  { input: "00:00", expected: "12:00 am" },
  { input: "12:00", expected: "12:00 pm" },
  { input: "08:00", expected: "08:00 am" },
  { input: "23:00", expected: "11:00 pm" },
  { input: "15:45", expected: "03:45 pm" },
];

testCases.forEach(({ input, expected }) => {
  const output = formatAs12HourClock(input);
  console.assert(output === expected, `For input ${input}, expected ${expected}, got ${output}`);
});
