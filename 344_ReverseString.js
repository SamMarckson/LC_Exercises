// SOURCE: https://leetcode.com/problems/reverse-string/description/
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// SOLUTION ONE
var reverseString = function (s) {
  let helper;
  for (let i = 0; i < s.length / 2; i++) {
    helper = s[i];
    s[i] = s[s.length - (i + 1)];
    s[s.length - (i + 1)] = helper;
  }
  return s;
};

// FIRTS SOLUTION
// var reverseString = function (s) {
//   return s.reverse();
// };
