/* 
Given an array of words, display a new array containing only words with more than 5 characters.
const words = ["hello", "world", "JavaScript", "CSS", "HTML"];
 */

const words = ["hello", "world", "JavaScript", "CSS", "HTML"];

words.forEach((item) => {
  if (item.length > 5) {
    console.log(item)
  } 
})