/*
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.
*/

function allAnagrams (string) {
  var results = {};
  var stringArray = string.split("");
  
  function recurse(toPush, set) {
    // base case: if toPush str is the length of string, then push
    if (toPush.length === string.length) {
      results[toPush] = 1;
    } else {
      // iterate through set
      for (var i = 0; i < set.length; i++) {
        // pick one letter, splice it off, then concat and recurse
        var tempArray = set.slice();
        var letter = tempArray.splice(i, 1);
        
        var newStr = toPush + letter;
        recurse(newStr, tempArray);
      }
    }
  }
  
  recurse('', stringArray);
  
  return Object.keys(results);
}
