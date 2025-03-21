sentence = "hai hello hai hello world"

//display the word count

//output - {hai: 2, hello: 1, world: 1}

/* sentence.split(' ').forEach((eachWord) => {
  output.hasOwnProperty(eachWord) ? output[eachWord] += 1 : output[eachWord] = 1;
})
console.log(output); */
output = {};
let charArray = [];

for (char of charArray) {
  if (char in output) {
     console.log(`${char} is the first recusive `)
  }
}



