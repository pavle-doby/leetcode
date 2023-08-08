// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
function maxDepth(root) {
    let max = Number.MIN_VALUE;

    function depth({node, count}) {
        if(!node) {
            max = Math.max(count, max);
            return;
        }

        depth({node: node.left, count: count + 1})
        depth({node: node.right, count: count + 1})
    }

    depth({node: root, count: 0});

    return max;
}