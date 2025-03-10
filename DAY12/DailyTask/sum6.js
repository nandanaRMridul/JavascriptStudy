/* Write a program to print pairs of numbers in an array whose sum is 6. */

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];


for (i = 0; i <= numbers.length - 1; i++){
  for (j = i + 1; j <= numbers.length - 1; j++) {
    if (numbers[i] + numbers[j] == 6) {
      console.log(`${numbers[i]}, ${numbers[j]}`);
    }
  }
}