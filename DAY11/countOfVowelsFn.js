//write a function to find the count of vowels in a string

// a e i o u A E I O U


function countOfVowels(string) {
  let count = 0;
  for (i = 0; i <= string.length - 1; i++)
  {
    if (string[i] == "a" ||
        string[i] == "e" ||
        string[i] == "i" ||
        string[i] == "o" ||
        string[i] == "u" ||
        string[i] == "A" ||
        string[i] == "E" ||
        string[i] == "I" ||
        string[i] == "O" ||
        string[i] == "U" )
    {
      count++;
    }
  }
  console.log(count);
}

countOfVowels("QWERTY");