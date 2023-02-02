// Iterates over elements of an array invoking callback for each element. 
// The callback should be passed the element, the current index, and the entire array.
// const callback = function(element, index, array) {
//   console.log(element +"," +index +"," +array);
// }
// forEach(['a','b','c'], callback); → prints a,0,['a','b','c'] b,1,['a','b','c'] c,2,['a','b','c']
// For each element in the array, the callback we passed is called. The callback can be customized, 
// but in the above example, the callback prints out the element, index, and entire array.
function forEach(array, callback) {
  // CODE HERE
  array.forEach((element, index, array) => callback(element, index, array));
}
// forEach(['a','b','c'], callback);

// Creates an array of values by running each element in collection through callback
// Should we explain that map returns?
// Callback (element/value, index/key, array)
// map([1,2,3], function(element, index, array) {
//  return element * 3;
// }); -> [3,6,9]
// BONUS: use the forEach method you use to create map
function map(array, callback) {
  // CODE HERE
  const result = []
  array.forEach((element, index, array) => result.push(callback(element, index, array)));
  return result;
}
console.log(map([1, 2, 3], function (element, index, array) {
  return element * 3;
}));

// Iterates over elements of collection, returning an Array of all elements callback returns truthy for.
console.log(filter([1, 2, 3, 4], function (element, index, collection) {
  return element % 2 === 0;
}));  /* → [2,4] */
console.log(filter({ a: 1, b: 2, c: 3, d: 4 }, function (element, index, collection) {
  return element % 2 !== 0;
})); /* → [1,3] */
function filter(collection, callback) {
  // CODE HERE
  const result = [];
  if (Array.isArray(collection)) {
    collection.forEach((element, index, array) => {
      if (callback(element, index, array)) {
        result.push(element);
      }
    });
  } else {
    for (let key in collection) {
      if (callback(collection[key], key, collection)) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

// Removes all elements from array that callback returns truthy for and returning a collection of elements that did not pass 
// the truthy test.
// The returned collection should be the same type that was passed in, either an Array or Object.
// reject([1,2,3,4], function(element, index, collection) {
//  return element % 2 === 0;
// }); /* → [1,3] */
// reject({a:1, b:2, c:3, d:4}, function(value, key, collection) {
//  return value % 2 !== 0;
// }); /* → {b:2, d:4} */
// Challenge: use filter
function reject(collection, callback) {
  // CODE HERE
  // two arrays, one for true statements and one for false.
  const falseArray = [];
  const falseObj = {};
  if (Array.isArray(collection)) {
    collection.forEach((element, index, array) => {
      if (!callback(element, index, array)) {
        falseArray.push(element);
      }
    })
  } else {
    for (let key in collection) {
      if (!callback(collection[key], key, collection)) {
        falseObj[key] = collection[key];
      }
    }
  }
  if (falseArray.length > 1) {
    return falseArray;
  }
  return falseObj;
}
console.log(reject({ a: 1, b: 2, c: 3, d: 4 }, function (value, key, collection) {
  return value % 2 !== 0;
}))

// Creates an array without duplicate values from the inputted array.
// The order of the array is preserved.
uniq([1, 2, 1]); /* → [1,2] */
function uniq(array) {
  // CODE HERE
  const result = [];
  array.forEach((element) => {
    if (!result.includes(element)) {
      result.push(element)
    }
  })
  return result;
}
// console.log(uniq([1,2,1]));

// Gets the index at which the first occurrence of value is found in array
// Returns -1 if element is not in array
// DO NOT USE THE BUILT-IN INDEXOF function
// indexOf([11,22,33], 11); → 0
// indexOf([11,22,33], 5); → -1
function indexOf(array, value) {
  // CODE HERE
  let result = -1;
  let first = true;
  array.forEach((element, index) => {
    if (value === element) {
      if (first == true) {
        result = index;
        first = false;
      }
    }
  })
  return result;
}
console.log(indexOf([11, 22, 33], 11))
console.log(indexOf([11, 22, 33], 5))


// Returns a function that is restricted to invoking func once.
// Repeat calls to the function return the value of the first call.
function once(func) {
  // CODE HERE
  let result;
  let repeat = false;
  return (arg) => {
    if (!repeat) {
      result = func(arg);
      repeat = true;
    }
    return result;
  }
}

var num = 0;
var increment = once(function () {
  num += 1;
});
increment();
increment();
increment();
increment();
console.log(num)



// Reduces collection to a value which is the accumulated result of running each element in collection through iteratee, 
// where each successive invocation is supplied the return value of the previous. 
// If accumulator is not provided the first element of collection is used as the initial value.
// If a start parameter is not provided, then set the start value as the zeroth index
// reduce([1,2], function(stored,current) {
//  return stored + current;
// }); → 3
// reduce([1,2], function(stored,current) {
//  return stored + current;
// },1); → 4
function reduce(array, callback, start) {
  // CODE HERE
  let value = null;
  if (start) {
    value = start;
  };
  array.forEach((element) => {
    if (value == null) {
      value = element
    } else {
      value = callback(value, element)
    }
  })
  return value;
}


// Takes an array and a function as arguments.
// Returns true if the function produces true when each array element is passed to it.
// Otherwise it returns false.
// every([2, 4, 6], function(elem) {
//   return elem % 2 == 0;
// });  -> true
// every([2, 4, 7], function(elem) {
//   return elem % 2 == 0;
// });  -> false
// BONUS: use reduce in your answer
console.log(every([2, 4, 7], function (elem) {
  return elem % 2 == 0;
}));

function every(array, func) {
  // CODE HERE
  let result = true;
  // loop through array to run each element through the function
  array.forEach((element) => {
    // check to see if the returned value is false, if false, return function as false, else if runs throught all arrays, then return true;
    if (func(element) == false) {
      result = false;
    }
  })
  return result;
}



// Flattens a nested array.
/* → [1, 2, 3, [4]] */
function flatten(array) {
  // CODE HERE
  const result = [];
  array.forEach((element) => {
    if (Array.isArray(element) == true) {
      element.forEach((ele) => result.push(ele))
    } else {
      result.push(element);
    }
  })
  return result;
}
console.log(flatten([1, [2, 3, [4]]]));

// Recursively flattens a nested array.
// flattenDeep([1, [2, 3, [4]]]); → [1, 2, 3, 4]
function flattenDeep(array) {
  // CODE HERE
  const newArray = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      newArray.push(...flattenDeep(element));
    } else {
      newArray.push(element);
    }
  })
  return newArray;
}

console.log(flattenDeep([1, [2, 3, [4]]]))
