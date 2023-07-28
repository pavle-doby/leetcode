/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const len = getLen({ node: head });
    const nTh = len - n;
    
    if (len === n) {
        head = head.next;
        return head;
    }

    remove({ node: head, n: nTh, ind: 0 });
    
    return head;
};
    
function getLen({ node }) {
    if(!node.next) {
        return 1;
    }
    
    if(node.next) {
        return 1 + getLen({node: node.next})
    }
}

function remove({ node, n, ind }) {
    if(!node) {
        return;
    }

    if(n === ind + 1 || n === 0) {
        node.next = node.next?.next;
    }
    
    remove({ node: node.next, n, ind: ind + 1});
}