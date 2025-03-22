/* 
const salesData = [
    { city: "New York", sales: 5000 },
    { city: "Los Angeles", sales: 7000 },
    { city: "Chicago", sales: 6000 },
    { city: "New York", sales: 8000 },
    { city: "Los Angeles", sales: 6500 },
    { city: "Chicago", sales: 9000 },
    { city: "Houston", sales: 4000 },
    { city: "Houston", sales: 5500 },
]; */


// Print each city with its highest sales value
const salesData = [
    { city: "New York", sales: 5000 },
    { city: "Los Angeles", sales: 7000 },
    { city: "Chicago", sales: 6000 },
    { city: "New York", sales: 8000 },
    { city: "Los Angeles", sales: 6500 },
    { city: "Chicago", sales: 9000 },
    { city: "Houston", sales: 4000 },
    { city: "Houston", sales: 5500 },
];

//create an empty object to store final data
output = {}

//access city, sales keys using forEach and store current values in vars city, currentSales
salesData.forEach((eachDetail) => {
  let city = eachDetail.city;
  let currentSales = eachDetail.sales;

  if (city in output) {//check if the city name (city) is already a key in the output object
    if (currentSales > output[city]) {//If the city exists, check if the current sales amount > the sales amount in the output object.
      output[city] = currentSales;
    }
  } else {
    output[city] = currentSales; //if the current sales higher, store the new, higher sales amount for that city in output, sales
  }
})

console.log(output)