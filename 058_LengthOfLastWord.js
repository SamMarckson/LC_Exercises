// Source: https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");
  return s[s.length - 1].length;
};
