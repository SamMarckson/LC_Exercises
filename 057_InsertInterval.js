var insert = function(intervals, newInterval) {
  let [firstComparative, lastComparative] = newInterval;
  let leftArray = [];
  let rightArray = [];

  for (let array of intervals) {
    const [firstElement, secondElement] = array;

    if (secondElement < firstComparative) {
      leftArray.push(array);
    }

    else if (firstElement > lastComparative) {
      rightArray.push(array);
    }

    else {
      firstComparative = Math.min(firstElement, firstComparative);
      lastComparative = Math.max(secondElement, lastComparative);
    }
  }

  return [...leftArray, [firstComparative, lastComparative], ...rightArray];
};

// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
                                                      //  [3,8]
                                                      //  [3,8]
                                                      //  [3,10]









