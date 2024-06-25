const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  let sum = 0
  for (const i of array) {
    sum += i
  }
  return sum
};

const multiply = function(array) {
  let sum = 1
  for (const i of array) {
    sum *= i
  }
  return sum
};

const power = function(base, exponent) {
	return base**exponent
};

const factorial = function(num) {
	let total = 1
  for (let i = num; i >0; i--) {
    total *=i
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
