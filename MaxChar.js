// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charObject = {};
    for(let char of str) {
        charObject[char] ? charObject[char]++ : charObject[char] = 1;
    }

    let longestValue = 0;
    let longestKey = '';
    for(let key of str) {
        if(charObject[key] > longestValue) {
            longestValue = charObject[key];
            longestKey = key;
        }
    }
    // return `${longestKey} - ${longestValue}`;
    return longestKey
}

module.exports = maxChar;
console.log(maxChar("abcccccccd"));
