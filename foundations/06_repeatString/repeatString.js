// This function takes two inputs—a string and a number—and repeats the string
const repeatString = function(string, num) {
  let longString = "";
  for (i = 1; i <= num; i++) {longString += string;}
  
  // If the number is less than 0, return "ERROR"
  if (num < 0) {
    return "ERROR";
  } else {
    return longString;
  }
};

// Do not edit below this line
module.exports = repeatString;
