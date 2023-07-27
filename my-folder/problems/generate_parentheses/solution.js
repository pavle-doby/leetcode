/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let output = [];

  function generate(comb = [], left = 0, right = 0) {
    if (comb.length === 2 * n) {
      output.push(comb.join(""));
    }

    if (left < n) {
      comb.push("(");
      generate(comb, left + 1, right);
      comb.pop();
    }

    if (right < left) {
      comb.push(")");
      generate(comb, left, right + 1);
      comb.pop();
    }
  }

  generate();

  return output;
};
