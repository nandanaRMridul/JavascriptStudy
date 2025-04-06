//From an array of words, find the total number of characters in all words that start with a vowel.(Use filter() and reduce())


const words = [
  "apple",
  "banana",
  "orange",
  "umbrella",
  "grape",
  "avocado",
  "kiwi",
  "egg",
  "strawberry",
];

const vowelWords = words.filter(word => {
  const firstLetter = word[0].toLowerCase();
  return 'aeiou'.includes(firstLetter);
})

console.log(vowelWords);

const length = vowelWords.reduce((sum, word) => sum + word.length, 0)
console.log(length);