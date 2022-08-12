/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicates = (nums) => {
  let set = new Set();
  for (let value of nums) {
    if (set.has(value)) {
      return true;
    } else {
      set.add(value);
    }
  }
  return false;
};

var containsDuplicate = function (nums) {
  let set = new Set(nums);
  if (set.size !== nums.length) return true;
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 4]));
