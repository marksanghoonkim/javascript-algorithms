// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.
// DO NOT use JSON.stringify

deepEquals = function (a, b) {

  var result = true;

  // need to write a recursive function that can be called on an object
  var recurse = function (a, b) {
    // if a and b are two empty objects with length 0, return true
    if (typeof a === 'object' && typeof b === 'object' && Object.keys(a).length === 0 && Object.keys(b).length === 0) {
      result = true;
    }

    // if a and b's lengths are different, return false
    if (Object.keys(a).length !== Object.keys(b).length) {
      result = false;
    }

    // iterate through each object, compare each key-value pair.
    for (var key in a) {
      // base case: if the key-value is not an object, compare a's value with b's
      if (typeof a[key] !== 'object') {
        if (a[key] !== b[key]) {
          result = false;
        }
      } else {
        // otherwise, call recurse on the contained object
        recurse(a[key], b[key]);
      }
    }

    // iterate through other object, compare each key-value pair.
    for (var key in b) {
      // base case: if the key-value is not an object, compare b's value with b's
      if (typeof b[key] !== 'object') {
        if (b[key] !== a[key]) {
          result = false;
        }
      } else {
        // otherwise, call recurse on the contained object
        recurse(b[key], a[key]);
      }
    }

    // if it passes all deepEquals checks, then return true
    return result;
  }

  return recurse(a,b);
};
