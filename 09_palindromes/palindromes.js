const palindromes = function (string) {

    function isValidWord(word) {
        invalidChars = [" ", ",", ".","!"]
        return !invalidChars.includes(word)
      }
      
    let stringArray = string.toLowerCase().split('').filter(isValidWord)
    let reversedArray = stringArray.toReversed()

    for (let i = 0; i<stringArray.length-1; i++) {
        if (stringArray[i] != reversedArray[i]) return false
    }

    return true
};

// Do not edit below this line
module.exports = palindromes;
