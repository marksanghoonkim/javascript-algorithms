/*
Write a function for reversing a linked list. Do it in-place.
*/

reverseLinkedList(head) {
  var curr = head;
  var prev = null;

  while (curr) {
    var nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}