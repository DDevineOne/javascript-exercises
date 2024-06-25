const findTheOldest = function(people) {
    const today = new Date()
    const thisYear = today.getFullYear()

    const getAge = function(person){
        if (person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = thisYear - person.yearOfBirth
        }
    }

    const getMaxAge = (current_max, person) => Math.max(current_max, person.age);

    people.forEach(getAge)
    
    let oldest;
    let maxAge = 0;
    for (const person of people) {
        if (person.age > maxAge){
            oldest = person;
            maxAge = person.age
        } 
    }
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
