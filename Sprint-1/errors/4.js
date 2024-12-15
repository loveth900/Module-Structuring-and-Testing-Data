const twelveHourClockTime = "08:53";
const twentyFourHourClockTime = "20:53";
console.log(twelveHourClockTime)
console.log(twentyFourHourClockTime)



// Display the original times
console.log(`12-hour clock time: ${twelveHourClockTime}`);
console.log(`24-hour clock time: ${twentyFourHourClockTime}`);

// Convert 24-hour clock time to 12-hour clock format
function convertToTwelveHour(time24) {
  const [hours, minutes] = time24.split(":").map(Number);
  const isPM = hours >= 12;
  const twelveHour = hours % 12 || 12; // Convert 0 to 12 for midnight
  const period = isPM ? "PM" : "AM";
  return `${twelveHour}:${minutes.toString().padStart(2, "0")} ${period}`;
}

// Convert 12-hour clock time to 24-hour clock format
function convertToTwentyFourHour(time12) {
  const [time, period] = time12.split(" ");
  const [hours, minutes] = time.split(":").map(Number);
  const isPM = period.toUpperCase() === "PM";
  const twentyFourHour = isPM ? (hours % 12) + 12 : hours % 12;
  return `${twentyFourHour.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

// Examples
const convertedToTwelveHour = convertToTwelveHour(twentyFourHourClockTime);
console.log(`24-hour to 12-hour: ${twentyFourHourClockTime} → ${convertedToTwelveHour}`);

const convertedToTwentyFourHour = convertToTwentyFourHour("8:53 PM");
console.log(`12-hour to 24-hour: 8:53 PM → ${convertedToTwentyFourHour}`);
