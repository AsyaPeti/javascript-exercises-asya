// This function returns the Fibonacci number at the given index
const fibonacci = function(index) {
  
  // Verify that the index is greater than or equal to 0
  if (!(index >= 0)) {
    return "OOPS";
  
    // If the index is satisfactory,
  } else {
    let num1 = 0;
    let num2 = 1;
    
    // Move from 1 to the index along the Fibonacci sequence
    for (let i = 1; i <= index; i++) [num1, num2] = [num2, num1 + num2];
    return num1;
  }
};

// Do not edit below this line
module.exports = fibonacci;
