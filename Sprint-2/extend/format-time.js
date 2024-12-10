// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const tests = [
  { input: "08:00", expected: "08:00 am" },
  { input: "23:00", expected: "11:00 pm" },
  { input: "00:00", expected: "12:00 am" },
  { input: "12:00", expected: "12:00 pm" },
  { input: "00:01", expected: "12:01 am" },
  { input: "12:01", expected: "12:01 pm" },
  { input: "13:00", expected: "1:00 pm" },
];

tests.forEach(({ input, expected }) => {
  const output = formatAs12HourClock(input);
  console.assert(
    output === expected,
    `Test failed for input "${input}". Output: "${output}", Expected: "${expected}"`
  );
});
