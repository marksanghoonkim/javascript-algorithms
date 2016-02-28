function translateRomanNumeral (romanNumeral) {
  /*
  Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

  When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.

  You should return "null" on invalid input.
  */

  // ie. CDXCIX => CD (400) + XC (90) + IX (9) = 499

  var allNumerals = 'IVXLCDM';
  var sum = 0;

  // iterate through the string and add to a sum
  for (var i = 0; i < romanNumeral.length; i++) {
    // check if it is a valid input
    if (!allNumerals.includes(romanNumeral[i])) {
      return "null";
    }

    var current = DIGIT_VALUES[romanNumeral[i]];
    var next = DIGIT_VALUES[romanNumeral[i+1]];

    // if we find a smaller numeral in front of a larger one, we calculate the subtracted value
    if (current < next) {
      sum += (next - current);
      // skip to the letter after 'next'
      i++;
    } else {
      sum += current;
    }
  }

  return sum;
}
