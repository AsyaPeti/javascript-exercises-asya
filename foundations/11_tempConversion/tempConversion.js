// A function converts given Fahrenheit degrees to Celsius degrees
const convertToCelsius = function(fahrDegrees) {
  // Return Celsius degrees rounded to one decimal place
  return Math.round(5 / 9 * (fahrDegrees - 32) * 10) / 10;
};

// A function converts given Celsius degrees to Fahrenheit degrees
const convertToFahrenheit = function(celsDegrees) {
  // Return Fahrenheit degrees rounded to one decimal place
  return Math.round((9 / 5 * celsDegrees + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
