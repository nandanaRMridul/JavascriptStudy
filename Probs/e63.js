const calculateVolume1 = (length) => (width) => (height) => {
  return length * width * height;
}
  

console.log(calculateVolume1(3)(4)(5));

//OR

function calculateVolume2(length) {
  return function (width) {
    return function (height) {
      return length * width * height;
    };
  };
}

console.log(calculateVolume2(3)(4)(5));