/* 
Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

Eg. Arguments = 'apple', 'p'
Output = 2
 */


countLetter = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    } 
  }
  return count;
}

const prompt = require('prompt-sync')({ sigint: true });
let word = prompt("Enter a word: ");
let letter = prompt("Enter a letter: ");
console.log(`Number of occurences of ${letter} in ${word}: ${countLetter(word, letter)}`);
