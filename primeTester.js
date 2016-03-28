function primeTester(n) {   
  /* A prime number is an integer greater than 1
  that has no divisors other than itself and 1. Write a function that accepts a
  number and returns true if it’s a prime number, false if it’s not. */

  var lowerBound = Math.floor(Math.sqrt(n));
  
  if (n === 1) {
    return false;
  }
  
  for (var i = 2; i <= lowerBound; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
  
}
