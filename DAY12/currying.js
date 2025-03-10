const addNumbers = (num1) => {
  return secondFunc = (num2) => {
    return thirdFunc = (num3) => {
      return num1 + num2 + num3;
    }
  }
}

console.log(addNumbers(1)(5)(10));