//Extract even numbers from [1, 2, 3, 4, 5, 6].

input = [1, 2, 3, 4, 5, 6];

const extractEven= (arr) => {
  return arr.filter((elem) => {
    return elem % 2 == 0 && elem;
  })
}

console.log(extractEven(input));