// adds 2 to inputted number
// ex: addTwo(5); -> 7
// ex: addTwo(6); -> 8
function addTwo(number) {
  // CODE HERE
  return number + 2;
}
console.log(addTwo(5));

// adds the two inputted numbers together
// ex: add(5, 10); -> 15
function add(num1, num2) {
  // CODE HERE
  return num1 + num2;
}
console.log(add(5, 10));

// adds all three inputted numbers together
// ex: addd(1,2,3); -> 6
// ex: addd(2,4,2); -> 8
function addd(value1, value2, value3) {
  // CODE HERE
  return value1 + value2 + value3;
}
console.log(addd(2,4,2));

// subtracts the second inputted number from the first inputted number
// ex: subtract(5, 10); -> -5
function subtract(n1, n2) {
  // CODE HERE
  return n1 - n2;
}
console.log(subtract(5,10));

// multiplies the inputted number by 2
// ex: multiplyByTwo(5); -> 10
// ex: multiplyByTwo(6); -> 12
function multiplyByTwo(numero) {
  // CODE HERE
  return 2 * numero;
}
console.log(multiplyByTwo(6));

// multplies the two inputted numbers together
// ex: multiply(1,2); -> 2
// ex: multiply(2,2); -> 4
function multiply(val1, val2) {
  // CODE HERE
  return val1 * val2;
}
console.log(multiply(2,2));

// multiplies all three inputted numbers together
// ex: multiplyy(1,2,3); -> 6
// ex: multiplyy(2,2,3); -> 12
function multiplyy(a, b, c) {
  // CODE HERE
  return a * b * c;
}
console.log(multiplyy(2,2,3));

// returns the square of the inputted number
// ex: square(5); -> 25
function square(value) {
  // CODE HERE
  return value * value;
}
console.log(square(5));

// determines if the number is odd
// outputs true if the number is odd
// outputs false if the number is even
// ex: isOdd(4); -> false
// ex: isOdd(5); -> true
function isOdd(num) {
  // CODE HERE
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isOdd(5));

// determines if the number is negative
// outputs true if the number is negative
// outputs false if the number is zero or positive
// ex: isNegative(-1); -> true
// ex: isNegative(1); -> false
// ex: isNegative(0); -> false
function isNegative(num) {
  // CODE HERE
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isNegative(0));

// returns the absolute value of the inputted number
// ex: positive(-1); -> 1
// ex: positive(1); -> 1
function positive(num) {
  // CODE HERE
  if (num < 0) {
    return num * -1;
  } else {
    return num;
  }
}
console.log(positive(-5));

// Returns boolean of whether argument is classified as a Number object
// isNumber(5); → true
// isNumber('hi'); → false
function isNumber(value) {
  // CODE HERE
  if (Number.isInteger(value)) {
    return true;
  } else {
    return false;
  }
}
console.log(isNumber('hello'));

// Returns boolean of whether argument is classified as an Array object
// isArray(5); → false
// isArray([1,2,3]); → true
function isArray(value) {
  // CODE HERE
  if (Array.isArray(value)) {
    return true;
  }
  return false;
}
console.log(isArray([1,2,3]));

// Returns boolean of whether argument is classified as an Object
// isObject(5); → false
// isObject([1,2,3]); → true
function isObject(value) {
  // CODE HERE
  if (typeof value === 'object'){
    return true;
  }
  return false;
}
console.log(isObject([1,2,3]))

// return boolean of whether argument is classified as null
// isNull(null); -> true
// isNull(5); -> false
function isNull(value) {
  // CODE HERE
  if (value === null) {
    return true;
  }
  return false;
}
console.log(isNull(undefined))
