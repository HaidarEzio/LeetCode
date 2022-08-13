/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//* O(n)
// var search = function (nums, target) {
//   if (nums.includes(target)) {
//     return nums.indexOf(target);
//   } else {
//     return -1;
//   }
// };
//! O(log n)
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    //* divide the book into 2, get in the mid
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
