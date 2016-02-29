/*
Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
*/

function LetterChanges(str) {
  var result = '';
  var vowels = 'aeiou';

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      var newChar = String.fromCharCode(str.charCodeAt(i) + 1);
      if (vowels.indexOf(newChar) !== -1) {
        result += newChar.toUpperCase();
      } else {
        result += newChar;
      }

    } else {
      result += str[i];
    }
  }
  return result; 

}