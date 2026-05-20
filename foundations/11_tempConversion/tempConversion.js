// This function converts temperatures from Fahrenheit to Celsius
const convertToCelsius = function(fahrDegrees) {
  return Math.round(5 / 9 * (fahrDegrees - 32) * 10) / 10;
};

// This function converts temperatures from Celsius to Fahrenheit
const convertToFahrenheit = function(celsDegrees) {
  return Math.round((9 / 5 * celsDegrees + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
