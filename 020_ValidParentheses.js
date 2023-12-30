// Source: https://leetcode.com/problems/valid-parentheses/description/

var isValid = function (s) {
  const openBracketsStack = [];
  const brackets = { "(": 1, ")": -1, "[": 2, "]": -2, "{": 3, "}": -3 };

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(" || s[index] === "[" || s[index] === "{") {
      openBracketsStack.push(s[index]);
    } else {
      if (
        brackets[openBracketsStack[openBracketsStack.length - 1]] * -1 ===
        brackets[s[index]]
      ) {
        openBracketsStack.pop();
      } else {
        return false;
      }
    }
  }
  return !openBracketsStack.length;
};
