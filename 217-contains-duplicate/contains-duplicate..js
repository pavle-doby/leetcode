// Time: 74 ms (beats: 95.38%) | Memory: 53.9 MB (beats: 58.91%) | 217. Contains Duplicate

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