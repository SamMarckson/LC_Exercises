// Source: https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let redQtd = 0;
  let whiteQtd = 0;
  let blueQtd = 0;

  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      redQtd++;
    } else if (nums[i] === 1) {
      whiteQtd++;
    } else {
      blueQtd++;
    }
    i++;
  }

  let countAll = 0;
  while (countAll < redQtd) {
    nums[countAll] = 0;
    countAll++;
  }

  while (countAll < redQtd + whiteQtd) {
    nums[countAll] = 1;
    countAll++;
  }

  while (countAll < redQtd + whiteQtd + blueQtd) {
    nums[countAll] = 2;
    countAll++;
  }
};
