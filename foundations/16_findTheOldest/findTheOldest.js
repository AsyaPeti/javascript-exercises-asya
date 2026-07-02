// This function identifies the oldest person in an array of people
const findTheOldest = function(people) {
  // The oldest person in the array
  let result = people.reduce((oldest, person) => {
    // If a date of death is not provided, it is set to the current year
    if (!oldest.yearOfDeath) oldest.yearOfDeath = new Date().getFullYear();
    if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
    // If the current person is older than the oldest person
    if ((person.yearOfDeath - person.yearOfBirth) > 
        (oldest.yearOfDeath - oldest.yearOfBirth)) {
      // The current one is the oldest
      oldest = person;
    }
    // Return the oldest
    return oldest;
  });
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
