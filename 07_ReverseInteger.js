// Source: https://leetcode.com/problems/reverse-integer/description/

var reverse = function (x) {
  x = x.toString();
  let finalNumber = "";

  for (let i = x.length - 1; i >= 0; i--) {
    finalNumber += x[i];
  }

  if (
    parseInt(finalNumber) <= (-2) ** 31 ||
    parseInt(finalNumber) >= 2 ** 31 - 1
  )
    return 0;

  if (parseInt(x) < 0) return -parseInt(finalNumber);

  return parseInt(finalNumber);
};

console.log(reverse(-123));
