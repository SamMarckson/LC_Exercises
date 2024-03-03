// Source: https://leetcode.com/problems/middle-of-the-linked-list/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let firstPointer = this.head;
  let middlePointer = this.head;

  while (firstPointer && firstPointer.next) {
    firstPointer = firstPointer.next.next;
    middlePointer = middlePointer.next;
  }

  return middlePointer;
};
