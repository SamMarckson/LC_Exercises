// Source: https://leetcode.com/problems/merge-intervals/description/

var merge = function (intervals) {

    if (intervals.length === 1) return intervals;
    // sorting the array of arrays
    intervals = intervals.sort(function (a, b) {
      return a[0] - b[0];
    });
  
    let j = 0;
    let finalArray = [[...intervals[j]]];
  
    for (let i = 1; i < intervals.length; i++) {
      let mixedArray = [];
      if (
        intervals[i][0] >= finalArray[j][0] &&
        intervals[i][0] <= finalArray[j][1]
      ) {
        mixedArray.push(...intervals[i]);
        mixedArray.push(...finalArray[j]);
        finalArray.splice(j, 1, [Math.min(...mixedArray), Math.max(...mixedArray),]);
      } else {
        finalArray.push([intervals[i][0], intervals[i][1]]);
        j += 1;
      }
    }
  
    return finalArray;
  };
  
  // console.log(merge([[1,4],[0,2],[3,5]]));
  
  