//accept values from a user, then

/* 
1. w.a.p to validate an email is valid gmail or not
2. w.a.p to check a word starts with the letter A
3. w.a.p to display all vowels in a string
4.

*/

//1. w.a.p to validate an email is valid gmail or not

/* const prompt1 = require('prompt-sync')({ signint: true });
let email = prompt1("Enter your email: ");


email.endsWith("@gmail.com") ? console.log("Valid email") : console.log("Invalid email"); */


//2. w.a.p to check a word starts with the letter A

/* const prompt2 = require('prompt-sync')({ signint: true });
let word = prompt2("Enter a word: ");

word.startsWith("A") ? console.log("The word starts with  A"): console.log("The word do not start with  A")
 */
//3. w.a.p to display all vowels in a string

let word = "adwjjiklqweumk"
let vowels = ["a", "e", "i", "o", "u"]

console.log(word.split('').filter((char) => (vowels.includes(char.toLowerCase()))));
