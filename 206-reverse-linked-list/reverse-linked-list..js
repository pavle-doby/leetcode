// Time: 37 ms (beats: 99.97%) | Memory: 44.6 MB (beats: 18.33%) | 206. Reverse Linked List

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
 // 1 -> 2 -> 3 -> 4
 // 1 <- 2 <-3 
function reverseList(head) {
    if(!head) {
        return null;
    }

    let newHead;
    function reverse({ prev, node }) {
        if(!node) {
            newHead = prev;
            return;
        }

        const next = node.next;
        node.next = prev;
        
        reverse({ prev: node, node: next })
    }

    reverse({ prev: head, node: head.next });
    head.next = null;

    return newHead;
};