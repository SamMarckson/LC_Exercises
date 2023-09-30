// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let finalArray = [];
  let helperArray = [];
  for (let elem of array) {
    if (helperArray.length < size) helperArray.push(elem);

    if (helperArray.length === size) {
      finalArray.push(helperArray);
      helperArray = [];
    }
  }
  if (helperArray.length !== 0) finalArray.push(helperArray);

  return finalArray;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
