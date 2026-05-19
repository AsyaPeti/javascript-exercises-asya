// This function determines if a given year is a leap year
const leapYears = function(year) {
  // Checks for century years
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  
  // Checks for non-century years
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
