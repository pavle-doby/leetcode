/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// node: 5
// [1,2,5,6,7] => [1,2,6,7]
function deleteNode(node) {    
    node.val = node.next.val;
    node.next = node.next.next;
};