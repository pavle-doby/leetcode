// Time: 54 ms (beats: 88.99%) | Memory: 45.5 MB (beats: 13.99%) | 792. Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0,
    r = nums.length - 1,
    index;

  while (l <= r) {
    index = Math.floor((l + r) / 2);

    if (nums[index] === target) {
      return index;
    }

    if (nums[index] < target) {
      l = index + 1;
    } else {
      r = index - 1;
    }
  }

  return -1;
};
