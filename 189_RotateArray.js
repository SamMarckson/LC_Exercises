// Source: https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function numsRevert(array, start, end) {
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
}

var rotate = function (nums, k) {
  k = k % nums.length;
  nums.reverse();
  console.log(nums);

  numsRevert(nums, 0, k - 1);
  numsRevert(nums, k, nums.length - 1);
};

// RUN TIME ERROR SOLUTION
// var rotate = function (nums, k) {
//   let counter = 0;
//   while (counter < k) {
//     nums.splice(0, 0, nums.pop());
//     counter++;
//   }
//   console.log(nums);
// };

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
