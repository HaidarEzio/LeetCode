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
var searchRecursion = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  function searchHelperRecursion(start, end) {
    if (start > end) return -1; //! base case
    //* divide the book into 2, get in the mid
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      //* search right
      return searchHelperRecursion(mid + 1, end);
    } else {
      //* search left
      return searchHelperRecursion(start, mid - 1);
    }
  }

  return searchHelperRecursion(start, end);

  // while (start <= end) {
  //   //* divide the book into 2, get in the mid
  //   let mid = Math.floor((start + end) / 2);
  //   if (nums[mid] == target) {
  //     return mid;
  //   } else if (nums[mid] < target) {
  //     start = mid + 1;
  //   } else {
  //     end = mid - 1;
  //   }
  // }
  // return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(searchRecursion([-1, 0, 3, 5, 9, 12], 9));
// console.log(searchRecursion([-1, 0, 3, 5, 9, 12], 2));
