const repeatString = function(string, n) {
    // Repeats given string n times

    if (n < 0) {
        return 'ERROR'
    }
    let returnString = ''
    for (let i = 0; i < n; i++) {
        returnString += string
    }
    return returnString
};

// Do not edit below this line
module.exports = repeatString;
