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
