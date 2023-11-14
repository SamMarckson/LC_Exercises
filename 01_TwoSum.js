// Source: https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
  let j = 0;
  const pairSolutionFirstElement = [nums[j]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + pairSolutionFirstElement[0] === target) {
      return [j, i];
    }
    if (i === nums.length - 1) {
      pairSolutionFirstElement.splice(0, 1, nums[j + 1]);
      i = j + 1;
      j += 1;
    }
  }
};
