/**
 * [1,2,3,2]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // quicker alg
function twoSum(nums, target) {
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

// better memory complexity
// function twoSum(nums, target) {
//     let diff, j;
//     for(let i = 0; i < nums.length; i++) {
//         diff = target - nums[i];
//         j = nums.indexOf(diff, i + 1);
//         if(j !== -1) {
//             return [i, j]
//         }
//     }
// }

