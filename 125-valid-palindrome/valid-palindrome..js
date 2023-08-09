// Time: 67 ms (beats: 75.36%) | Memory: 44.1 MB (beats: 87.42%) | 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphanumerical = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = alphanumerical.length - 1;

  while (left < right) {
    if (alphanumerical[left] !== alphanumerical[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
