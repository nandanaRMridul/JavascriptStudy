let i = 2;
while (i <= 50) {
  j = 2;
  let isPrime = true;
  while (j < i) {
    if (i % j == 0) {
      isPrime = false;
    }
    j++;
  }
  if (isPrime) {
    console.log(i);
  }
  i++;
}