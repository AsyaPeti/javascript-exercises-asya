// This function identifies the oldest person in an array of people
const findTheOldest = function(people) {
  let result = people.reduce((oldest, person) => {
    if (!oldest.yearOfDeath) oldest.yearOfDeath = new Date().getFullYear();
    if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
    
    if ((person.yearOfDeath - person.yearOfBirth) > 
        (oldest.yearOfDeath - oldest.yearOfBirth)) {
      oldest = person;
    }
    
    return oldest;
  });
  
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
