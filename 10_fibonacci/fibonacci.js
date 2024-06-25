const fibonacci = function(num) {
    num = Number(num)
    if (num === 1 || num === 2) return 1;
    else if (num === 0) return 0;
    else if (num < 0) return "OOPS"
    
    
    let curr = 1;
    let prev = 1;
    let temp;
    for (let i = 3; i<=num; i++) {
        temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    return curr
};

// Do not edit below this line
module.exports = fibonacci;
