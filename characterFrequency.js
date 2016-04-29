function characterFrequency(string) {
  var results = [];
  
  if (string.length === 0) {
    return results;
  }
  
  // creates count obj
  var count = {};
  var countArrayLength = 0;
  
  for (var i = 0; i < string.length; i++) {
    if (count[string[i]]) {
      count[string[i]] += 1;
    } else {
      count[string[i]] = 1;
      countArrayLength += 1;
    }
  }
  
  while (results.length !== countArrayLength) {
    var highestCount = 0;
    var toPushArray = [];
    
    // find highest count
    for (var key in count) {
      if (count[key] > highestCount) {
        highestCount = count[key];
      }
    }
    
    // find all key/counts in object
    for (var key in count) {
      if (count[key] === highestCount) {
        toPushArray.push(key);
        delete count[key];
      }
    }
    
    var sortedArray = toPushArray.sort();
    
    // push sorted letters into results array
    for (var i = 0; i < sortedArray.length; i++) {
      results.push([sortedArray[i], highestCount]);
    }
  }
  
  return results;
}