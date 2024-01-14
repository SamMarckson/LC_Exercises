// Source: https://leetcode.com/problems/pascals-triangle-ii/description/

var getRow = function (numRows) {
  const initialArray = [[1], [1, 1]];
  if (numRows < 2) return initialArray[numRows];

  for (let i = 2; i <= numRows; i++) {
    initialArray.push([]);
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        initialArray[i][j] = 1;
      } else {
        initialArray[i][j] =
          initialArray[i - 1][j] + initialArray[i - 1][j - 1];
      }
    }
  }
  return initialArray[numRows];
};
