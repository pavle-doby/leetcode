// Time: 88 ms (beats: 60.08%) | Memory: 46.5 MB (beats: 71.18%) | 283 - Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let i = 0;
    let n = nums.length;
    while(i < n) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            n--;
        } else {
            i++;
        }
    }
};