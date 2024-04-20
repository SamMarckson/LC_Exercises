// Source: https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
  let resolutionsArray = [];
  let mathematicalOps;

  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] !== "+" &&
      tokens[i] !== "-" &&
      tokens[i] !== "*" &&
      tokens[i] !== "/"
    ) {
      resolutionsArray.push(tokens[i]);
    } else {
      mathematicalOps = 0;
      
      if (tokens[i] === "+") {
        mathematicalOps =
          parseInt(resolutionsArray[resolutionsArray.length - 2]) +
          parseInt(resolutionsArray[resolutionsArray.length - 1]);
      }

      if (tokens[i] === "-") {
        mathematicalOps =
          parseInt(resolutionsArray[resolutionsArray.length - 2]) -
          parseInt(resolutionsArray[resolutionsArray.length - 1]);
      }

      if (tokens[i] === "*") {
        mathematicalOps =
          parseInt(resolutionsArray[resolutionsArray.length - 2]) *
          parseInt(resolutionsArray[resolutionsArray.length - 1]);
      }

      if (tokens[i] === "/") {
        mathematicalOps =
          parseInt(resolutionsArray[resolutionsArray.length - 2]) /
          parseInt(resolutionsArray[resolutionsArray.length - 1]);
          
        if (mathematicalOps > 0) {
          mathematicalOps = Math.floor(mathematicalOps);
        } else {
          mathematicalOps = Math.ceil(mathematicalOps);
        }
      }
      resolutionsArray.splice(resolutionsArray.length - 2, 2);
      resolutionsArray.push(mathematicalOps);
    }
  }
  return parseInt(resolutionsArray[0]);
};
