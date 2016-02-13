/*
Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.
*/

Array.prototype.isSubsetOf = function(input) {

  // iterate through this
  for (var i = 0; i < this.length; i++) {

    // check if this[i] exists in input
    if (input.indexOf(this[i]) === -1) {
      // if not, return false
      return false;
    }
    // if true, continue
  }
  return true;
};
