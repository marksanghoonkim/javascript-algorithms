/*
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.
*/

function evenOccurrence(arr) {
  // iterate through and count occurrences of each item
  var inventory = {};
  
  for (var i = 0; i < arr.length; i++) {
    if (inventory[arr[i]]) {
      // if exists, increase count
      inventory[arr[i]] += 1;
    } else {
      inventory[arr[i]] = 1;
    }
  }
  
  // find first even occurrence
  for (var i = 0; i < arr.length; i++) {
    if (inventory[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }
  
  return null;
}