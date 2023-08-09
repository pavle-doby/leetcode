// Time: 116 ms (beats: 81.70%) | Memory: 51.6 MB (beats: 99.05%) | 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagramMap = new Map();
  let sortedStr = "";

  strs.forEach((str) => {
    sortedStr = str.split("").sort().join("");
    if (anagramMap.has(sortedStr)) {
      anagramMap.get(sortedStr).push(str);
    } else {
      anagramMap.set(sortedStr, [str]);
    }
  });

  return [...anagramMap.values()];
};
