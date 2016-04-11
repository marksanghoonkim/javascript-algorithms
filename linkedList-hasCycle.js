var hasCycle = function(linkedList) {
  var slow = linkedList;
  var fast = linkedList;
  
  while (true) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return false;
    }

    // if either hits null, no loop
    if (slow === null || fast === null) {
      return false;
    }
    
    // if the two meet, there's a loop
    if (slow === fast) {
      return true;
    }
  }
};