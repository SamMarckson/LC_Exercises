// Source: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

var removeDuplicates = function (nums) {
  for (let element of nums) {
    const firstAppearence = nums.indexOf(element);
    const lastAppearence = nums.lastIndexOf(element);

    if (firstAppearence !== lastAppearence) {
      nums.splice(firstAppearence + 1, lastAppearence - firstAppearence - 1);
    }
  }
  return nums.length;
};

