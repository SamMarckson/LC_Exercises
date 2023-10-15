// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    vowelsList = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase().split('');
    let vowelCounter = 0;
    str.filter((letter) => {
        vowelsList.includes(letter) ? vowelCounter++ : null;
    })
    return vowelCounter;
}