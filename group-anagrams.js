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
