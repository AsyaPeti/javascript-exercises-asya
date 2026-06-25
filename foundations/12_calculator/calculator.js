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
  return base ** exp;
};

// This function calculates the factorial of a given number
const factorial = function(num) {
  // The result is 1
  let result = 1;
  // Loop from 1 to num, including num
    // Multiply the result by an iterator
  for (let i = 1; i <= num; i++) result *= i;
  // Return the result
  return result;
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
