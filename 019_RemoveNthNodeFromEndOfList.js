// Source: https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
  let firstPointer = head;
  let secondPointer = head;
  let cont = 0;
  while(cont < n) {
    firstPointer = firstPointer.next;
    cont++;
  }
  if(!firstPointer) {
    return head.next;
  }
  while(firstPointer.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  secondPointer.next = secondPointer.next.next;
  return head;
};
