var sortColors = function (nums) {
  if (nums.length < 2) {
    return nums;
  }

  let pivot = nums[nums.length - 1];

  let leftArray = nums.filter((element) => element < pivot);
  let pivotArray = nums.filter((element) => element === pivot);
  let rightArray = nums.filter((element) => element > pivot);

  return [...sortColors(leftArray), ...pivotArray, ...sortColors(rightArray)];
  // return sortColors(leftArray).concat(equal).concat(sortColors(rightArray));
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
