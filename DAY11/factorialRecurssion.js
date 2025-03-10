function factorial(n) { //5 //4 //3 //2 //1 
  if (n == 0) { //0
    return 1;
  }
  return n * factorial(n - 1);//5 * fact(4) //5 * 4 * fact(3) ... //5 * 4 * 3 * 2 * 1 * fact(0)
}


console.log(factorial(5));