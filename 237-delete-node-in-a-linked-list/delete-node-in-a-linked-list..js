// Time: 60 ms (beats: 80.23%) | Memory: 43.8 MB (beats: 85.20%) | 237. Delete Node in a Linked List

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