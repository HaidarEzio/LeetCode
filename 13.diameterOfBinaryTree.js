var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  dfs(root);

  return diameter;

  function dfs(node, level) {
    if (!node) return 0;

    const left = dfs(node.left); // longest Left path
    const right = dfs(node.right); // longest Right path

    // compare max with new Left + Right: update longest path
    diameter = Math.max(diameter, left + right);

    // add 1 for edge: connecting node with its parent
    return 1 + Math.max(left, right);
  }
};
