//  Source: https://leetcode.com/problems/climbing-stairs/description/

var climbStairs = function (n) {
  const numberOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }

  return numberOfWays[n - 1];
};
