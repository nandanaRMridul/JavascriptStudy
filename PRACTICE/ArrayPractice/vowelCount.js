//Count the total number of vowels in all the words of the array.


const words = ["javascript", "is", "awesome", "brilliant", "cool"];

const wordsTotal = words.join("");

console.log(wordsTotal);

console.log(wordsTotal.split("").filter(char => 'aeiou'.includes(char)).length);