const reverseString = function(word) {
    // const chars = word.split('')
    let reversedString = ''
    for (let i = word.length-1; i >= 0; i--) {
        reversedString += word.charAt(i)
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
