function sum(a, b) {
  console.log(a + b);
}


function sum(a, b, c) {
  console.log(a + b + c);
}

function sum(a, b, c, d) {
  console.log(a + b + c + d);
} 

sum(1, 2)

function sum(...args) {
  console.log(args.reduce((a, b) => a + b));
}

sum(1, 2, 3, 4, 1, 8, 7);