// Source: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== stack[stack.length - 1]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};

/* 
Time Complexity = O(n);
Space Complexity = O(n);
*/
