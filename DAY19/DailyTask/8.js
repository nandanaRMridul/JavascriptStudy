/* 
const smartphone = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 799
};

1) Access and print the phone's model.
2) Due to a price drop, update the price to 699.
3) Add a new property is5G and set it to true.
4) Print the updated smartphone object.
*/

const smartphone = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 799
};

//1) Access and print the phone's model.
console.log(smartphone.model);

//2) Due to a price drop, update the price to 699.
smartphone.price = 699;

//3) Add a new property is5G and set it to true.
Object.assign(smartphone, { is5G: true })

//4) Print the updated smartphone object.
console.log(smartphone);