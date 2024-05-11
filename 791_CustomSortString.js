// Source: https://leetcode.com/problems/custom-sort-string/description/

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const orderedS = [];

  for (let i = 0; i < order.length; i++) {
    while (true) {
      if (s.includes(order[i])) {
        orderedS.push(s[s.indexOf(order[i])]);
        s = s.replace(s[s.indexOf(order[i])], "");
      } else {
        break;
      }
    }
  }

  return orderedS.join("").concat(s);
};

console.log(customSortString("kqep", "pekeq"));