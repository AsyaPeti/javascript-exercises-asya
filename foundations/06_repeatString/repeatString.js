// A function takes a string and a number and repeat the string
const repeatString = function(string, num) {
  // A final string is equal to an empty string
  let longString = "";
  // A loop from 1 to number add the given string to the final string
  for (i = 1; i <= num; i++) {longString += string;}
  
  // If a number is less than 0
  if (num < 0) {
    // Return "ERROR"
    return "ERROR";
  // Else ...
  } else {
    // Return the final string
    return longString;
  }
};

// Do not edit below this line
module.exports = repeatString;
