/*
Implement a function that finds the longest palindrome in a given string.
*/

function longestPalindrome (string) {
  // reverse the string
  var reverseString = '';
  for (var i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  // find the longest matching strings in each, which should give us the longest palindrome
  return lcss(string, reverseString);
}

function lcss(string1, string2) {
  var comparsions = []; //2D array for the char comparsions ...
  var maxSubStrLength = 0;
  var lastMaxSubStrIndex = -1, i, j, char1, char2, startIndex;
  
  for (i = 0; i < string1.length; ++i) {
    comparsions[i] = new Array();
    
    for (j = 0; j < string2.length; ++j) {
      char1 = string1.charAt(i);
      char2 = string2.charAt(j);
      
      if (char1 === char2) {
        if (i > 0 && j > 0) {
          comparsions[i][j] = comparsions[i - 1][j - 1] + 1;
        } else {
          comparsions[i][j] = 1;
        }
      } else {
        comparsions[i][j] = 0;
      }
      
      if (comparsions[i][j] > maxSubStrLength) {
        maxSubStrLength = comparsions[i][j];
        lastMaxSubStrIndex = i;
      }
    }
  }

  if (maxSubStrLength > 0) {
    startIndex = lastMaxSubStrIndex - maxSubStrLength + 1;
    return string1.substr(startIndex, maxSubStrLength);
  }
  
  return null;
}