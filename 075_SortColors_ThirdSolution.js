// Source: https://leetcode.com/problems/sort-colors/description/
// Making use od Bubble Sort Algorithm

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function (nums) {
  let swapped;
  do {
    swapped = false;
    for(let i = 0; i < nums.length - 1; i++) {
      if(nums[i + 1] < nums[i]) {
        let aux = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = aux;
        swapped = true;
      }
    }
  } while(swapped)

  return nums;
};

console.log(sortColors([2,0,2,1,1,0]));
