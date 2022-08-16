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
