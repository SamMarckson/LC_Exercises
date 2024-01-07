// Source: https://leetcode.com/problems/length-of-last-word/description/

// First Solution
var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");
  return s[s.length - 1].length;
};

// Second Solution
// var lengthOfLastWord = function (s) {
//   s = s.trim();
//   let counter = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " ") break;
//     counter += 1;
//   }

//   return counter;
// };