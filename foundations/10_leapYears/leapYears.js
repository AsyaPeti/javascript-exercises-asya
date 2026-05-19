// A function which checks whether a given year is a leap year
const leapYears = function(year) {
  // If the year is a century year
  if (year % 100 === 0) {
    // If the year divs 400 without a remainder
    if (year % 400 === 0) {
      // Return true
      return true;
    // Else ...
    } else {
      // Return false
      return false;
    }
  
  // Else if the year divs 4 without a remainder
  } else if (year % 4 === 0) {
    // Return true
    return true;
  // Else ...
  } else {
    // Return false
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
