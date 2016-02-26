/*
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.
*/

function powerSet (string) {
  str = string || '';
  var letters = {};
  var solutions = {};

  for (var i = 0; i < string.length; i++) {
    letters[string[i]] = true;
  }

  // create an alphabetized string without duplicates
  str = Object.keys(letters).sort().join('');

  var recurse = function(string) {
    for (var i = 0; i < string.length; i++) {
      // create a subset which doesn't include the letter at i
      var subSet = strSet.substr(0, i) + strSet.substr(i + 1, strSet.length);
      // push subSet as a key into the solutions object
      if (!solutions[subSet]) {
        solutions[subSet] = true;
        // recursive call over the subSet
        recurse(subSet);
      }
    }
  }

  recurse(str);

  return Object.keys(solutions).sort();
}