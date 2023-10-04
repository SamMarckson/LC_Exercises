// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for(let i = 0; i < n; i++) {
        let str = '';
        let counter = 0;
        let hashNumber = 1 * (i+1)
        while (counter < hashNumber) {
            str += '#'
            counter++;
        }
        while(str.length !== n) str += ' ';
        console.log(str);
    }
}

steps(4);