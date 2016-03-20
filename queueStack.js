var Stack = function() {
  var storage = [];

  this.push = function(value){
    storage.push(value);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    // push value to inbox
    inbox.push(value);

    // also need reverse outbox, push, reverse
    var tempStack = reverseStack(outbox);
    tempStack.push(value);
    outbox = reverseStack(tempStack);
  };

  this.dequeue = function(){
    // pop value off of outbox
    var value = outbox.pop();

    // reverse inbox, pop, reverse
    var tempStack = reverseStack(inbox);
    tempStack.pop();
    inbox = reverseStack(tempStack);

    return value;
  };

  this.size = function(){
    return inbox.size();
  };

  function reverseStack(stack) {
    // pop all values off of stack and push the value onto a new stack
    var newStack = new Stack();
    var tempArray = [];

    while (stack.size()) {
      var value = stack.pop();
      newStack.push(value);
      tempArray.push(value);
    }

    // need to recreate the stack that was passed in
    while (tempArray.length) {
      stack.push(tempArray.pop());
    }

    return newStack;
  }
};
