/*
Given an array of arbitrarily nested arrays, return n, 
where n is the deepest level that contains a non-array value.
*/

function arrayception(array) {
  var deepestLevel = 0;
  
  function recurse(inputArray, level) {
    var currLevel = level + 1;
    
    for (var i = 0; i < inputArray.length; i++) {
      if (!Array.isArray(inputArray[i]) && currLevel > deepestLevel) {
        deepestLevel = currLevel;
      } else {
        recurse(inputArray[i], currLevel);
      }
    }
  }
  
  recurse(array, 0);
  
  return deepestLevel;
}
