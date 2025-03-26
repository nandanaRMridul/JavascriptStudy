const baleno = {
  model: "hatchback",
  price: 950000,
  manufacturer: "maruti"
}
const glanca = {
  model: "hatchback",
  price: 120000
}

glanca.__proto__ = baleno;

console.log(glanca.manufacturer);