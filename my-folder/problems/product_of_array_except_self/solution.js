/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    const arrAllPrev = Array(n);
    const arrAllAfter = Array(n);
    
    // `arrAllPrev[i]` value is represening product of all elements before `i`
    arrAllPrev[0] = 1
    for(let i = 1; i < n; i ++) {
        arrAllPrev[i] = nums[i - 1] * arrAllPrev[i - 1];
    }
    
    // `arrAllAfter[i]` value is represening product of all elements after `i`
    arrAllAfter[n - 1] = 1;
    for(let i = n - 2; i >= 0; i--) {
        arrAllAfter[i] = nums[i + 1] * arrAllAfter[i + 1];
        // final value
        arrAllPrev[i] = arrAllPrev[i] * arrAllAfter[i];
    }

    return arrAllPrev;
};