/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dict = {};
    let hasDuplicate = false;
    for(let i=0; i < nums.length; i++) {
        hasDuplicate = !!dict[nums[i]];
        if(hasDuplicate) break; 
        dict[nums[i]] = true;
    }
    return hasDuplicate;
};