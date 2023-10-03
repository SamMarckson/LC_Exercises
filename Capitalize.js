// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let finalString = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) finalString += str[i].toUpperCase();
    else if (i > 0 && str[i - 1] === " ") finalString += str[i].toUpperCase();
    else finalString += str[i];
  }
  return finalString;
}

console.log(capitalize("a short sentence"));
