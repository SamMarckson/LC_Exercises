// Making use of Quick Sort Algorithm

var sortColors = function (nums) {
  if (nums.length < 2) {
    return nums;
  }

  const pivotElement = nums[nums.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivotElement) {
      leftArr.push(nums[i]);
    } else {
      rightArr.push(nums[i]);
    }
  }
  return [...sortColors(leftArr), pivotElement, ...sortColors(rightArr)];
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
