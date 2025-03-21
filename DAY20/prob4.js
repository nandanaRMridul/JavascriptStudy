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
//create an empty object
output = {}

salesData.forEach((eachDetail) => {
  let city = eachDetail.city;
  let currentSales = eachDetail.sales;

  if (city in output)
  {
    if (currentSales > output[city])
    {
      output[city] = currentSales;
    }
    
  }
  else {
    output[city] = currentSales;
  }
})

console.log(output)