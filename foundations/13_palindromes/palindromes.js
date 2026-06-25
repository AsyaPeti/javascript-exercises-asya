// This function determines if a given string is a palindrome
const palindromes = function(string) {
  // A new filtered array is the string
  const filteredArr = string
    // Split into symbols
    .split("")
    // Filtered out non-letters and non-digits
    .filter((symbol) => /^[a-zA-Z0-9]+$/.test(symbol));
  // A new forward string is the array
  let forwardStr = filteredArr
    // Joined into a string
    .join("")
    // Changed to lowercase
    .toLowerCase();
  // A new reverse string is the array
  let reverseStr = filteredArr
    // Reversed
    .reverse()
    // Joined into a string
    .join("")
    // Changed to lowercase
    .toLowerCase();
  // Compare the forward and reverse strings and return the result
  return forwardStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
