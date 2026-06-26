// This function determines if a given string is a palindrome
const palindromes = function(string) {
  
  // A new filtered array made from the string
  const filteredArr = string
    .split("")
    .filter((symbol) => /^[a-zA-Z0-9]+$/.test(symbol));
  
  // A new forward string made from the array
  let forwardStr = filteredArr
    .join("")
    .toLowerCase();
  
  // A new reverse string made from the array
  let reverseStr = filteredArr
    .reverse()
    .join("")
    .toLowerCase();
  
  // Compare the forward and reverse strings and return the result
  return forwardStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
