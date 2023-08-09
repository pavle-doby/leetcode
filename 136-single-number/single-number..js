// Time: 47 ms (beats: 98.96%) | Memory: 46.9 MB (beats: 31.24%) | 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const set = new Set();
    
    for(const num of nums) {
        if(set.has(num)) {
            set.delete(num);
        }
        else {
            set.add(num);
        }
    }
    
    return [...set][0];
};