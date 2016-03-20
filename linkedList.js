var Node = function(value) {
  this.value = value;
  this.next = null;
}

var LinkedList = function(initialValue) {
  var node = new Node(initialValue);
  this.tail = node;
  this.head = node;
};

LinkedList.prototype.addToTail = function(value) {
  if (this.head.value === undefined) {
    this.head.value = value;
  } else {
    this.tail = new Node(value);
    this.head.next = this.tail;
  }
}

LinkedList.prototype.removeHead = function() {
  if (this.head.value === this.tail.value) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.tail;  
  }
}

LinkedList.prototype.contains = function(value) {
  var checkHead = this.head;
  
  while (checkHead.next) {
    if (checkHead.value === value) {
      return true;
    }
    checkHead = checkHead.next;
  }
  return false;
}