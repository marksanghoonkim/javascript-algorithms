function fractionConverter (number) {
  /*
  Write a function that takes a number as its argument and returns a string that represents that number’s simplified fraction.
  Whole numbers and mixed fractions should be returned as improper fractions.
  */

  if ( (number%1) === 0 ) {
    return number + '/' + 1;
  }

  // take the decimal portion of the input, and determine the fraction
  // count the number of decimal places, then the denominator will be 1 more than the number
  
  var decimalPlace = number.toString().indexOf('.');
  var wholeNumber = Number(number.toString().slice(0, decimalPlace));
  var numerator = Number(number.toString().slice(decimalPlace + 1));
  var denominator = Math.pow(10, number.toString().slice(decimalPlace+1).length);

  // make fraction into smallest possible kind
  // check if you can divide both numerator and denominator by the same numbers 

  // an arbitrary amount of dividing
  for (var i = 0; i < 5; i++) {
    if ( (numerator/2)%1 === 0 && (denominator/2)%1 === 0 ) {
      numerator = numerator/2;
      denominator = denominator/2;
    } else if ( (numerator/3)%1 === 0 && (denominator/3)%1 === 0 ) {
      numerator = numerator/3;
      denominator = denominator/3;
    } else if ( (numerator/5)%1 === 0 && (denominator/5)%1 === 0) {
      numerator = numerator/5;
      denominator = denominator/5;
    }
  }
  
  // found the smallest numerator and denominator, now just combine whole number and the fraction

  var wholeNumberFraction = wholeNumber * denominator;

  if (wholeNumberFraction < 0) {
    return (wholeNumberFraction - numerator) + '/' + denominator;
  }
  return (wholeNumberFraction + numerator) + '/' + denominator;
}
