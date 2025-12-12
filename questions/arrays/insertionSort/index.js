/** Insertion Sort **
 *
 * Sort the 'nums' array using insertion sort.
 *
 * @example
 * insertionSort([3, 2, 1]) -> [1, 2, 3]
 * insertionSort([0, 12, 8]) -> [0, 8, 12]
 * insertionSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 *
 */

//my first attempt passed 1/4 tests
// const insertionSort = (nums) => {
//   for (let i = 1; i < nums.lenght; ++i) {
//     let currIns = i;
//     for (let j = i + 1; j < nums.length; ++j) {
//       if (nums[j] < nums[currIns]) {
//         currIns = j;
//       }
//     }

//     if (currIns > nums[i]) {
//       let temp = nums[i];
//       nums[i] = nums[currIns];
//       nums[currIns] = temp;
//     }
//   }
//   return nums;
// };

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; ++i) {
    //while num to left(i - 1) is greater than current num(i)
    while (nums[i - 1] > nums[i]) {
      //store nums[i] in a temp variable so we don't lose value during swap
      let temp = nums[i];
      nums[i] = nums[i - 1];
      nums[i - 1] = temp;
      //decrement i to compare it to the other nums;
      i -= 1;
    }
  }
  return nums;
};

module.exports = insertionSort;
