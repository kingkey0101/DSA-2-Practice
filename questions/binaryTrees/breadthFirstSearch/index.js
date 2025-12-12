/** Breadth First Search **
 *
 * Return the breadth first values of the given binary tree in
 * an array.
 *
 */

const breadthFirstSearch = (root) => {
  const queue = [root];
  const result = [];

  //loop until queue is empty:
  while (queue.length > 0) {
    // remove first element from array and return it
    const curr = queue.shift();
    // add the curr node value to result
    result.push(curr.val);

    // check if curr node has children(left), if so push to queue;
    if (curr.left !== null) queue.push(curr.left);
    // check if curr node has children(right), if so push to queue;
    if (curr.right !== null) queue.push(curr.right);
  }

  return result;
};

module.exports = breadthFirstSearch;
