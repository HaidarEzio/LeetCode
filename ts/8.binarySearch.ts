function searching(nums: number[], target: number): number {
  let lo: number = 0;
  let hi: number = nums.length - 1;

  function searchRecursion(low: number, high: number) {
    //base case
    if (high < low) return -1;

    let mid: number = Math.floor((high + low) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (target > nums[mid]) {
      return searchRecursion(mid + 1, high);
    } else {
      return searchRecursion(low, mid - 1);
    }
  }

  return searchRecursion(lo, hi);
}
