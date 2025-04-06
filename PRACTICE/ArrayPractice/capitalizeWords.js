// Capitalize First Letter of Each Word
//Return a new array where the first letter of each word is capitalized (like a title).

const words = ["hello", "world", "javascript", "rocks"];

const capitalized = words.map(word => 
    word[0].toUpperCase() + word.slice(1)
 );

console.log(capitalized);


//words.map(...): You loop through each word in the array.

//word[0].toUpperCase(): Takes the first character and makes it BIG!

//word.slice(1): Gets the rest of the word, starting from index 1.