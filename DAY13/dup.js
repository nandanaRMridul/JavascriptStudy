//w.a.p to find duplicates in an array

//write a program to print all duplicate elements in an array

numbers = [1, 5, 44, 20, 6, 5, 20, 11, 8, 33];
console.log("Duplicates found: ")
for (i = 0; i <= numbers.length; i++)
{
  for (j = i + 1; j <= numbers.length; j++)
  {
    if (numbers[i] == numbers[j])
    {
      console.log(numbers[i]);
      break;
    }
  }
}