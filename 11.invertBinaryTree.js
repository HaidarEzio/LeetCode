function invertTree(head) {
  const stack = [head];
  while (stack.length) {
    const node = stack.pop();
    if (node != null) {
      stack.push(node.left);
      stack.push(node.right);
      const tmp = node.left;
      node.left = node.right;
      node.right = tmp;
    }
  }
  return head;
}

// with recursion
function invertTree(node) {
  if (node !== null) {
    const tmp = node.left;
    node.left = invertTree(node.right);
    node.right = invertTree(tmp);
  }
  return node;
}
