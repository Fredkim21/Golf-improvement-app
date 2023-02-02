// Creates a clone of an object.
const users = [{ 'user': 'barney' },{ 'user': 'fred' }];
const shallowClone = clone(users);
console.log(shallowClone[0] === users[0])
function clone(value) {
  // CODE HERE
  const cloneUsers = [];
  if (value.length > 1) {
    value.forEach((element) => cloneUsers.push(element));
  } else {
    cloneUsers.push(value);
  }
  return cloneUsers;
}


// Return the size of collection. If the argument passed is an array, then return
// the length of the array. If the argument passed is an object, then return the
// number of key/value properties.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
  // CODE HERE
  let count = 0;
	if (Array.isArray(collection) == 'array') {
    return collection.length;
  } else {
    for (let key in collection) {
      if (key) {
        count++;
      }
    }
    return count;
  }
}
console.log(size([1,2,3,]));
console.log(size({a:1, b:2, c:3}));

// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined
function first(arr) {
  // CODE HERE
  if (arr.length === 0) {
    return undefined;
  }
  return arr[0];
}
console.log(first([]));


// Creates a slice of array with n elements dropped from the beginning.
// n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n) {
  // CODE HERE
	let count = 1;
  if (Number.isInteger(n)) {
    count = n;
  }
  return array.slice(count);
}
console.log(drop([1, 2, 3], 0));

//Creates a slice of array with n elements taken from the beginning.
//n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n) {
  // CODE HERE
	let count = 1;
  if (Number.isInteger(n)) {
    count = n;
  }
  return array.slice(0, count);
}
console.log(take([1,2,3], 2));


// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
function pluck(array, key) {
  // CODE HERE
	const result = [];
  array.forEach((element) => result.push(element[key]))
  return result;
}
console.log(pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'));


// Assigns own enumerable properties of source object(s) to the destination
// object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
// should return ->  { 'user': 'fred', 'age': 40 }
// BONUS: solve with reduce
function extend(destination, ...sources) {
  return sources.reduce(function(dest, src) {
    for (let key in src) {
      if (src.hasOwnProperty(key)) {
        dest[key] = src[key];
      }
    }
    return dest;
  }, destination);
}


console.log(extend({ 'user': 'barney'}, { 'age': 40 }, { 'user': 'fred' }))

// Using a for loop, call the functions in the queue in order with the input
// number, where the results of each function become the next function’s input.
// Additionally, the queue should be empty after the function is called.
const puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4;},
  function(a) { return a % 5;}
];
const start = 2;
// applyAndEmpty(2, puzzlers); → 3

function applyAndEmpty(input, queue) {
  // CODE HERE
  let result = input;
	for (let i = 0; i < queue.length; i++) {
    result = queue[i](result);
  }
  return result;
}
console.log(applyAndEmpty(2, puzzlers));


// Returns a function that when called, will check if it has already computed
// the result for the given argument and return that value instead if possible.
function memoize(func) {
  // CODE HERE
  const cache = {};
  return function(args) {
    let key = args;
    if (cache[key]) {
      return cache[key];
    } else {
      let result = func(args);
      cache[key] = result;
      return result;
    }
  }
}


// Invokes func after wait milliseconds. Any additional arguments are provided
// to func when it is invoked.
function delay(func, wait) {
  // CODE HERE
  let args = Array.prototype.slice.call(arguments, 2);
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
}
