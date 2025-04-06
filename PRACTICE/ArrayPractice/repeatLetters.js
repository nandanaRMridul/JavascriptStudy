//Filter out words that have any repeated letters in them.

const words = ["loop", "code", "test", "apple", "run"];


const noRepeats = words.filter(word => {
  return word.split("").every((char, index) => {
    return index === word.indexOf(char)
  } )
})

console.log(noRepeats);