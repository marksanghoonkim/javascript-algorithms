function sortAndCountInversions(arr){
  if (arr.length === 1) {
    return {
      'count': 0,
      'list': arr
    };
  }

  var mid = Math.floor(arr.length/2);
  var firstHalf = arr.slice(0, mid);
  var secondHalf = arr.slice(mid, arr.length);

  var x = sortAndCountInversions(firstHalf);
  var y = sortAndCountInversions(secondHalf)
  var mergeOut = mergeAndCountInversions(x.list, y.list);

  return {
    'count': x.count + y.count + mergeOut.count,
    'list': mergeOut.list
  };
}

function mergeAndCountInversions(a, b) {
  var count = 0;
  var outputList = [];

  while (a.length > 0 && b.length > 0) {
    outputList.push(Math.min(a[0], b[0]));

    if (b[0] < a[0]) {
      count += a.length;
      b.shift();
    } else {
      a.shift();
    }
  }
  
  outputList = outputList.concat(a.concat(b));

  return {
    'count': count,
    'list': outputList
  }
};