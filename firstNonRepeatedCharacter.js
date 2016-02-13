/*
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.
*/

function firstNonRepeatedCharacter (string) {

  // if no string provided
  if (!string) {
    return undefined;
  }

  // scan the string from left to right, and count the instances of each letter
  var countObj = {};

  for (var i = 0; i < string.length; i++) {
    // if character doesn't exist in our countObj, add it
    if (countObj[string[i]] === undefined) {
      countObj[string[i]] = 1;
    } else {
      // if char exists in count array, increment it
      countObj[string[i]] += 1;
    }
  }

  // return the element that has a count number of 1
  for (var key in countObj) {
    if (countObj[key] === 1) {
      return key;
    }
  }

  // if every char is repeated, then return 'sorry'
  return 'sorry';
}