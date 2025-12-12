/** Length of Linked List **
 *
 * Find the length of the given linked list.
 *
 * @example
 * lengthOfList(1 -> 2 -> 3) -> 3
 * lengthOfList(10 -> 20) -> 2
 * lengthOfList(100 -> 200 -> 300 -> 400) -> 4
 *
 */

const lengthOfList = (head) => {
  let lenght = 0;
  let curr = head;
  while (curr) {
    lenght++;
    curr = curr.next;
  }
  return lenght;
};

module.exports = lengthOfList;
