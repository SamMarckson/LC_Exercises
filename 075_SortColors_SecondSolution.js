// Source: https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function swap(nums, pos1, pos2) {
  let aux = nums[pos1];
  nums[pos1] = nums[pos2];
  nums[pos2] = aux;
}

var sortColors = function (nums) {
  let startPointer = 0;
  let midPointer = 0;
  let endPointer = nums.length - 1;

  while (midPointer <= endPointer) {
    switch (nums[midPointer]) {
      case 0:
        swap(nums, startPointer, midPointer);
        midPointer++;
        startPointer++;
        break;

      case 1:
        midPointer++;
        break;

      case 2:
        swap(nums, midPointer, endPointer);
        endPointer--;
        break;
    }
  }
};

/* 
Time Complexity = O(n);
Space Complexity = O(1);
*/
