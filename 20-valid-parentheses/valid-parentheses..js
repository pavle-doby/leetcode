// Time: 68 ms (beats: 32.73%) | Memory: 42.7 MB (beats: 34.62%) | 20 - Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
  const parenthesesOpenList = "{[(";
  const parenthesesCloseList = "}])";
  const stack = [];
  let parOpen = "";
  let parClose = "";

  for (let i = 0; i < str.length; i++) {
    if (parenthesesOpenList.includes(str[i])) {
      stack.push(str[i]);
      continue;
    }

    if (parenthesesCloseList.includes(str[i])) {
      parOpen = stack.pop();
      parClose = str[i];

      if (
        parenthesesOpenList.indexOf(parOpen) !==
        parenthesesCloseList.indexOf(parClose)
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
};