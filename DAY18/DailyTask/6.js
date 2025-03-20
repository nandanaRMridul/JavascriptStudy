/* print given pattern */

for (i = 1; i <= 5; i++){
  str = '';
  for (j = 1; j <= 9; j++){
    if (i == 1 || i == j || i == 9 - j + 1) {
      str += '* '
    }
    else {
      str += '  '
    }
  }
  console.log(str)
}