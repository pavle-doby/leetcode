// Time: 94 ms (beats: 82.03%) | Memory: 55.7 MB (beats: 28.77%) | 238. Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  const prefix = new Array(nums.length);
  const suffix = new Array(nums.length);

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    prefix[i] = (prefix[i - 1] ?? 1) * nums[i];
    suffix[j] = (suffix[j + 1] ?? 1) * nums[j];
  }

  const out = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    out[i] = (prefix[i - 1] ?? 1) * (suffix[i + 1] ?? 1);
  }

  return out;
}
