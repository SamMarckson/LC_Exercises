// Source: https://leetcode.com/problems/merge-sorted-array/description/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let backwardsCounter = nums1.length - 1;
  while (nums1[backwardsCounter] === 0) {
    nums1.pop();
    backwardsCounter--;
  }
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  while (nums1.length < m + n) {
    nums1.push(0);
  }
};

console.log(merge([-1, -1, 0, 0, 0, 0], 4, [-1, 0], 2));
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1, 2, 2], 3));
