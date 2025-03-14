// w.a.p to print common numbers from given arrays

// a1 = [10, 11, 12, 20, 30]
// a2 = [12, 20, 21, 30, 31]

a1 = [10, 11, 12, 20, 30]
a2 = [12, 20, 21, 30, 31]

for (i = 0; i <= a1.length; i++) {
  for (j = 0; j <= a2.length; j++){
    if (a1[i] == a2[j]) {
      console.log(a1[j]);
    }
  }
}

for (num1 of a1) {
  for (num2 of a2) {
    if(num1 == num2)
  }
}