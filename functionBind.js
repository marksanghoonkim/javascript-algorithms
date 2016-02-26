/*
Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.
*/

var bind = function(func, context){
  var inputArgs = Array.prototype.slice.call(arguments);
  inputArgs = inputArgs.slice(2);
  
  return function() {
    return func.apply(context, inputArgs.concat(Array.prototype.slice.call(arguments)));
  };
};

/*
Implement the function ‘bind’ as a method of the Function.prototype object.
*/

Function.prototype.bind = function(context) {
  var that = this;
  var inputArgs = Array.prototype.slice.call(arguments);
  inputArgs = inputArgs.slice(1);
  
  return function() {
    return that.apply(context, inputArgs.concat(Array.prototype.slice.call(arguments)));
  };
};