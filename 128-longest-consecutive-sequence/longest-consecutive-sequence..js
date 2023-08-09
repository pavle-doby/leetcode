// Time: 114 ms (beats: 73.48%) | Memory: 62.5 MB (beats: 71.47%) | 128 - Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) {
        return 0;
    }

    let maxCount = 0, count = 0, tempNum;
    // pristup setu je O(1)
    const numSet = new Set(nums); // [100,4,200,1,3,2]

    for(const num of numSet) {
        if(numSet.has(num - 1)) {
            continue;
        }

        tempNum = num;


        while(numSet.has(tempNum)) {
            count++;
            tempNum++;
        }

        maxCount = Math.max(maxCount, count);
        count = 0;
    }

    return maxCount;
};