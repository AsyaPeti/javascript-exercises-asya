// This function adds two numbers together
const add = function(num1, num2) {
  return num1 + num2;
};

// This function subtracts the second number from the first
const subtract = function(num1, num2) {
  return num1 - num2;
};

// This function sums all the numbers in the given array
const sum = function(numArr) {
  return numArr.reduce((sum, num) => sum + num, 0);
};

// This function multiplies all the numbers in the given array together
const multiply = function(numArr) {
  return numArr.reduce((multi, num) => multi * num, 1);
};

// This function raises the first number to the power of the second number
const power = function(base, exp) {
  // Return the result of exponentiation
  return base ** exp;
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
