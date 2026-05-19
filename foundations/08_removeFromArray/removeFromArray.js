// A function takes an array and some more arguments and returns an array
const removeFromArray = function(arr, ...excArgs) {
  // A new array is equal to a filtered given array
  let cleanArr = arr.filter((item) => !excArgs.includes(item));
  // Return the new array
  return cleanArr;
};

// Do not edit below this line
module.exports = removeFromArray;
