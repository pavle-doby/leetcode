// Time: 53 ms (beats: 92.63%) | Memory: 46.6 MB (beats: 5.12%) | 350. Intersection of Two Arrays II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    const map = new Map();
    const setNums1 = new Set(nums1);
    
    // find intersection
    for(const num of nums2) {
        if(setNums1.has(num)) {
            map.set(num, {n1Count: 0, n2Count: 0});
        }
    }
    
    // count nums1 frequinses
    for(const num of nums1) {
        if(map.has(num)) {
            map.get(num).n1Count += 1;
        }
    }
    
    // count nums2 frequinses
    for(const num of nums2) {
        if(map.has(num)) {
            map.get(num).n2Count += 1;
        }
    }
    
    // form output array
    let output = [];
    let count;
    for(const [num, countObj] of map.entries()) {
        count = Math.min(countObj.n1Count, countObj.n2Count);
        output = [...output, ...new Array(count).fill(num)];
    }
    
    return output;
    
};