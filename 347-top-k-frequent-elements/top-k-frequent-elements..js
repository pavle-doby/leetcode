// Time: 55 ms (beats: 98.65%) | Memory: 44.5 MB (beats: 89.95%) | 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  return [...map.keys()]
    .sort((aKey, bKey) => map.get(bKey) - map.get(aKey))
    .slice(0, k);
};
