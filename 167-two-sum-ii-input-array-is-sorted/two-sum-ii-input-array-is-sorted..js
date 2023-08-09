// Time: 68 ms (beats: 31.52%) | Memory: 42.6 MB (beats: 79.71%) | 167 - Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const dict = {};
  let diff;
  for (let i = 0; i < numbers.length; i++) {
    diff = target - numbers[i];
    if(dict[diff] >= 0) {
      return [dict[diff] + 1, i + 1];
    }
    dict[numbers[i]] = i;
  }
};