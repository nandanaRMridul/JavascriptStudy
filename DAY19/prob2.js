let car = {
  name: "polo",
  model: "petrol",
  manufacturer: "volkswagon",
  price: 800000
}

/* 
1. display carname and price
2. check model key is present, if present display it's value
3. add variant as automatic and manual []
4. add color as red
*/

console.log(`carname: ${car.name}, price: ${car.price}`);

/* for (key in car) {
  if (key == "model")
  {
    console.log(car[key]);
  }
} */

car.hasOwnProperty("model") ? console.log(car.model) : console.log("not found");

car["variant"] = ["automatic", "manual"];

Object.assign(car, {color: "red"})

console.log(car);