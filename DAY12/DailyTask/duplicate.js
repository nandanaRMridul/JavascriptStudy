//write a program to print all duplicate elements in an array

numbers = [1, 5, 44, 20, 6, 5, 20, 11, 8, 33];
for (i = 0; i <= numbers.length - 1; i++)
{
  for (j = i + 1; j <= numbers.length - 1; j++)
  {
    if (numbers[i] == numbers[j])
    {
      console.log(numbers[i]);
    }
  }
}