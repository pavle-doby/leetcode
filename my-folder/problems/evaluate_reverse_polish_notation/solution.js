/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operationFn = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  const stack = [];
  let left, right;

  for (let i = 0; i < tokens.length; i++) {
    // Token is operation
    if (!!operationFn[tokens[i]]) {
      right = Number(stack.pop());
      left = Number(stack.pop());
      stack.push(operationFn[tokens[i]](left, right));
    } else {
      // Token is number
      stack.push(tokens[i]);
    }
  }

  return stack[0];
};
