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

/* 
Time Complexity Info:

  - Since the algo iterates through each token, the time complexity of the loop is O(n), where "n" is the number o tokens in the input array.
  - The ops executed within each iteration are constant time ops(e.g: push, pop and arithmetic ops). Since they don't depend on the size of the
  array, it's complexity can be considered as O(1).
  - Overall, the time complexity of the algorithm is O(n).

Space Complexity Info:

  - Since the space used by resolutionsArray is directly proportional to the number of operands and operators in the input array, 
  and since there can be at most n/2 operands in the input array (assuming a valid RPN expression), the space complexity of the algorithm is O(n/2), 
  which simplifies to O(n), where n is the number of tokens in the input array.

To Summarize:

  TC = O(n);
  SC = O(n);

*/