// Source: https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  digits[digits.length - 1] += 1;

  while (digits.some((elem) => elem === 10)) {
    let indexOfTen = digits.indexOf(10);
    if (indexOfTen > 0) {
      digits[indexOfTen] = 0;
      digits[indexOfTen - 1] += 1;
    } else if (indexOfTen === 0) {
      digits[indexOfTen] = 0;
      digits.unshift(1);
    }
  }
  return digits;
};

console.log(plusOne([9]));
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
// console.log(plusOne([9, 9]));
// console.log(plusOne([8,9,9,9]));
