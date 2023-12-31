// Source: https://leetcode.com/problems/remove-element/

// First Solution
var removeElement = function (nums, val) {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }
};

// Second Solution - Slower
// var removeElement = function (nums, val) {
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] === val) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
// };