//Find the longest word in the array.

const words = ["mango", "watermelon", "kiwi", "banana", "strawberry"];

let maxLength = 0;
let longestWords = [];

words.forEach((word) => {
  if (word.length > maxLength) {
    maxLength = word.length;
    longestWords = [word];
  } else if (word.length === maxLength) {
    longestWords.push(word)
  }
})

console.log(longestWords);


//Start with maxLength = 0 and an empty array.

//Loop through each word.

//If a word is longer than what you’ve seen so far: Update the maxLength and Start a new list with just this word

//If it’s the same length, add it to the list. 