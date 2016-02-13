/*
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')

Returns: 'aeiou'
*/

commonCharacters = function (string1, string2) {
  var letterObj1 = {};
  var letterObj2 = {};
  var result = '';

  // iterate through first string
  for (var i = 0; i < string1.length; i++) {
    // push non whitespaces into an object, not including duplicates
    if (letterObj1[string1[i]] === undefined && string1[i] !== ' ') {
      letterObj1[string1[i]] = 1;
    }
  }

   // iterate through second string
  for (var j = 0; j < string2.length; j++) {
    // push non whitespaces into an object, not including duplicates
    if (letterObj2[string2[j]] === undefined && string2[j] !== ' ') {
      letterObj2[string2[j]] = 1;
    }
  }

  // iterate through string1 again
  for (var k = 0; k < string1.length; k++) {
    // check if letter exists in both objects, and isn't duplicated
    if (letterObj1[string1[k]] && letterObj2[string1[k]] && letterObj1[string1[k]] === 1) {
      result += string1[k];
      // if used, then set key value to 0
      letterObj1[string1[k]] = 0;
    }
  }
  return result;
};