/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
    let max = 0;
    
    function getDepth({node, depth}) {
        if(!node) {
            if(max < depth) {
                max = depth;
            }
            return;
        }
        
        getDepth({node: node.left, depth: depth + 1});
        getDepth({node: node.right, depth: depth + 1});
    }
    
    getDepth({node: root, depth: 0});
    
    return max;
};