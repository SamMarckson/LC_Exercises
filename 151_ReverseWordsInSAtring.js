// Source: https://leetcode.com/problems/reverse-words-in-a-string/description/

var reverseWords = function(s) {
    s = s.trim().replace(/\s+/g, ' ').split(' ');
let reversedS = '';
for(let word of s) {
    reversedS = word + ' ' + reversedS;
}
return reversedS.trim();
};
