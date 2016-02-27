/*
Given a string, return true if it contains balanced parenthesis ()
*/

function isBalanced (string) {
  var result = true;
  var openParens = [];
  
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      openParens.push('(');
    }
    if (string[i] === ')') {
      if (openParens.length === 0) {
        result = false;
      }
      openParens.pop();
    }
  }
  if (openParens.length !== 0) {
    result = false;
  }
  
  return result;
}
