/*
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/

function longestRun (string) {
  var start = 0;
  var end = 0;
  var consecutives = [];
  var current = '';
  var longest = [0, 0];

  for (var i = 1; i < string.length; i++) {
    if (string[i] === string[i-1]) {
      // check to see if we are continuing our run
      if (current === string[i]) {
        end = i;
      } else {
        // note the starting index and the ending index
        current = string[i];
        start = i-1;
        end = i;
        // if we're at the end of the string, we need to push into the consecutives array
        if (i === string.length-1) {
          var temp = [start, end];
          consecutives.push(temp);
        }
      }
    } else if (current !== '') {
      // if we encounter a new letter, we need to push the resulting indices and reset the current letter holder
      var temp = [start, end];
      consecutives.push(temp);
      current = '';
      start = 0;
      end = 0;
    }
  }

  // parse through consecutives, return the one with the greatest difference in start and end
  for (var i = 0; i < consecutives.length; i++) {
    if ( (consecutives[i][1] - consecutives[i][0]) > (longest[1] - longest[0]) ) {
      longest = [consecutives[i][0], consecutives[i][1]];
    }
  }

  return longest;
}
