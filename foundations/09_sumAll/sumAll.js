// This function summarizes all the integers within a given range
const sumAll = function(num1, num2) {
  // Determine if the given numbers are positive integers and find the larger
  if (!(typeof(num1) === "number" && typeof(num2) === "number" &&
       num1 % 1 === 0 && num2 % 1 === 0 && num1 > 0 && num2 > 0)) {
    return "ERROR";
  } else if (num2 >= num1) {
    let count = num2 - num1 + 1;
    return count * (num1 + num2) / 2;
  } else {
    let count = num1 - num2 + 1;
    return count * (num1 + num2) / 2;
  }
};

// Do not edit below this line
module.exports = sumAll;
