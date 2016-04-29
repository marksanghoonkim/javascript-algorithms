/*
Given a positive integer n, return its digits reversed. DO NOT CONVERT n INTO A STRING OR ARRAY. Only use integers and math in your solution.
*/

function reverseInteger(n) {
  // find the digits of each x-place

  var result = 0;

  // get rid of zeroes
  while (getValueOfOnesPlace(n) === 0 && n !== 0) {
    n = n/10;
    console.log('inside get rid of zeroes. n is: ', n);
  }

  while (n > 0) {
    result *= 10;
    var value = getValueOfOnesPlace(n);
    console.log('n is: ', n);
    console.log('value is: ', value);

    result += value;
    n -= value;
    n /= 10;
  }
  
  return result;
}

function getValueOfOnesPlace(n) {
  n = n / 10;

  if (Math.round(n) === n) {
    return 0;
  }

  while (n > 1) {
    n--;
  }

  n = n * 10;

  return Math.round(n);
}