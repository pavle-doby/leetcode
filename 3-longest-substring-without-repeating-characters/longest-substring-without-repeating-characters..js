// Time: 264 ms (beats: 20.25%) | Memory: 49.5 MB (beats: 17.79%) | 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
  let maxCount = Number.MIN_VALUE;
  let charIndexMap = new Map();
  let strSet = new Set();
  let l = 0;
  let r = 0;

  while (r < str.length) {
    if (!strSet.has(str[r])) {
      strSet.add(str[r]);
      charIndexMap.set(str[r], r);
      r++;
    } else {
      maxCount = Math.max(strSet.size, maxCount);
      l = charIndexMap.get(str[r]) + 1;

      charIndexMap.clear();
      strSet.clear();
      while (l <= r) {
        strSet.add(str[l]);
        charIndexMap.set(str[l], l);
        l++;
      }

      r++;
    }
  }
  maxCount = Math.max(strSet.size, maxCount);

  return maxCount;
}
