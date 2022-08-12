let array = [2, 5, 7, 15];

//! Brute force solution o(n^2)
function twoSums(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const item2 = nums[j];
      if (i !== j) {
        let sum = item + item2;
        if (sum === target) {
          return [i, j];
        }
      }
    }
  }
}
//* Best solution o(n)
const twoSum = function (nums, target) {
  const num = [];
  for (i = 0; nums.length - 1; i++) {
    entry = nums[i]; //registers the entry
    x = target - entry; //looking for the other entry
    if (nums.includes(x)) {
      // if it's here then populate num[]
      num[0] = i;
      num[1] = nums.indexOf(x);
      if (num[1] != num[0]) {
        // if they're the same, loop back to find them
        break;
      }
    }
  }
  return num;
};
console.log(twoSum(array, 20));
