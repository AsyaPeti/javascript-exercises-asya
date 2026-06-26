// This function extracts the titles from book objects in an array
const getTheTitles = function(books) {
  // Replace the objects with their "title" properties in the array
  return books.map((book) => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
