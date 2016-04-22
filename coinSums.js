function coinSums(total) {
  var counter = 0;
  var pence = [1,2,5,10,20,50,100,200];
  
  var recurse = function(sum, index) {
    if (sum === total) {
      counter++;
      return;
    }
    
    if (sum > total) {
      return;
    }
    
    for (var i = index; i < pence.length; i++) {
      recurse(sum + pence[i], i);
    }
  };
  
  recurse(0, 0);
  
  return counter;
}