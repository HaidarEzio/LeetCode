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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  dfs(root);

  return diameter;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left); // longest Left path
    const right = dfs(node.right); // longest Right path

    // compare max with new Left + Right: update longest path
    diameter = Math.max(diameter, left + right);

    // add 1 for edge: connecting node with its parent
    return 1 + Math.max(left, right);
  }
}
