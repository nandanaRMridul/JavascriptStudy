/* 
Find the first recursive character  from the given pattern = "ABBCCBAD"
*/

//ans B


pattern = "ABBCCBAD";
output = {}
/* pattern.split('').forEach((letter) => {
  output.hasOwnProperty(letter) ? output[letter] += 1 : output[letter] = 1;

}) */

let charArray = pattern.split(''); //array of characters

for (char of charArray) {
  if (char in output) {
    console.log(`${char} is the first recursive letter`);
    break;
  }
  else {
    output[char] = 1;
  }
}
