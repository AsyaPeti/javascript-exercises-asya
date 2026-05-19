// A function which summarizes all integer numbers in the range of given ones
const sumAll = function(num1, num2) {
  // A sum is equal to 0
  let sum = 0;
  
  // Check that given numbers are not the integers greater than 0
  if (!(typeof(num1) === "number" && typeof(num2) === "number" &&
       num1 % 1 === 0 && num2 % 1 === 0 && num1 > 0 && num2 > 0)) {
    // Return "ERROR"
    return "ERROR";
  // Else check that the second number is greater or equal to the first one
  } else if (num2 >= num1) {
    // Loop from the first to the second number
    for (let i = num1; i <= num2; i++) {sum += i;}
    // Return the sum
    return sum;
  // Else...
  } else {
    // Loop from the second to the first number
    for (let i = num2; i <= num1; i++) {sum += i;}
    // Return the sum
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
