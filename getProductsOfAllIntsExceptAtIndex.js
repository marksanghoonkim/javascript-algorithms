function getProductsOfAllIntsExceptAtIndex(intArray) {
  var productsOfAllIntsBeforeIndex = [];

  // for each integer, find the product of all the integers
  // before it, storing the total product so far each time
  var productSoFar = 1;
  for (var i = 0; i < intArray.length; i++) {
      productsOfAllIntsBeforeIndex[i] = productSoFar;
      productSoFar *= intArray[i];
  }

  // then multiply by the product of all integers after it
  var productSoFar = 1;
  for (var i = intArray.length - 1; i >= 0; i--) {
      productsOfAllIntsBeforeIndex[i] = productSoFar;
      productSoFar *= intArray[i];
  }

  return productsOfAllIntsBeforeIndex;
}