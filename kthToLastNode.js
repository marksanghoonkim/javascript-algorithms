/*
Write a function kthToLastNode() that takes an integer kk and the headNode of a singly linked list, and returns the kkth to last node in the list.
*/

function kthToLastNode(k, headNode) {
  var initialPointer = headNode;
  var kthPointer = headNode;
  var counter = 0;

  while (initialPointer) {
    initialPointer = initialPointer.next;

    if (counter >= k) {
      kthPointer = kthPointer.next;
    }

    counter++;
  }

  return kthPointer;
}