// This function removes the specified arguments from the specified array
const removeFromArray = function(arr, ...excArgs) {
  return arr.filter((item) => !excArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
