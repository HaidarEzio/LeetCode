/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  let result = true;
  let dfs = function (node) {
    if (!node) return 0;
    let left = dfs(node.left); // check the left subtree
    let right = dfs(node.right); // check the right subtree
    if (Math.abs(left - right) > 1) return (result = false); // if the difference is greater than 1, return Infinity
    return Math.max(left, right) + 1; // return the max depth of the subtree + 1 (the current node)
  };

  dfs(root);
  return result;
}
