/** Depth First Search **
 *
 * Return the depth first values of the given binary tree in
 * an array.
 *
 */

const depthFirstSearch = (root) => {
  const result = [];
  // stack will initially contain the root
  const stack = [root];

  // keep exploring nodes until stack is empty
  while (stack.length > 0) {
    // keep popping top element from stack, set to current, removed from stack
    const current = stack.pop();
    // to push removed value to results
    result.push(current.val);
    // check if current node has children(right), if it does push children to stack
    if (current.right) stack.push(current.right);
    // check if current node has children(right), if it does push children to stack
    if (current.left) stack.push(current.left);
  }
  return result;
};

module.exports = depthFirstSearch;
