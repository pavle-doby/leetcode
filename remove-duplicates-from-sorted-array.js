// 
function removeDuplicates(nums: number[]): number {
    const unique = [...new Set(nums)];
    for(let i = 0; i < nums.length; i++) {
        if(i > unique.length - 1) {
            nums[i] = -1;
        } else {
            nums[i] = unique[i];
        }
    }
    return unique.length;
};