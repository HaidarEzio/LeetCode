/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let node: any = null;

  if (!l1 || !l2) {
    return l1 || l2;
  }

  if (l1.val < l2.val) {
    node = l1;
    node.next = mergeTwoLists(l1.next, l2);
  } else {
    node = l2;
    node.next = mergeTwoLists(l1, l2.next);
  }
  return node;
}
