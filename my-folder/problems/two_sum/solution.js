/**
 * [1,2,3,2]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const dict = {};
    let diff;
    for(let i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        if(diff in dict) {
            return [i, dict[diff]];
        }
        dict[nums[i]] = i;
    }
 };
