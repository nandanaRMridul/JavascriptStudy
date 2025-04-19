/* 



*/


  let n = 5; // height of half diamond (total height = 2*n - 1)

  // Upper half
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {//spaces
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {//stars
      if (j === 1 || j === 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
