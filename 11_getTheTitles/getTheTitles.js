const getTheTitles = function(books) {
    const result = books.flatMap((element) => element.title)
    return result
};

// Do not edit below this line
module.exports = getTheTitles;
