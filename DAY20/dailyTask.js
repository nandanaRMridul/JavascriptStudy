const products = [
  { pid: 100, pName: "Apple", brand: "5G", price: 120000, display: "OLED" },
  { pid: 101, pName: "Samsung", brand: "4G", price: 90000, display: "AMOLED" },
  { pid: 102, pName: "OnePlus", brand: "4G", price: 75000, display: "Fluid AMOLED"},
  { pid: 103, pName: "Pixel", brand: "3G", price: 85000, display: "OLED" },
  { pid: 104, pName: "Xiaomi", brand: "3G", price: 40000, display: "Super AMOLED"},
];

// print product name only - foreach
products.forEach((eachDetail) => {
  let name = eachDetail.pName;
  console.log(name);
})
console.log(
  "-----------------------------------------------------------------------"
);
// print all mobile details whose display is oled :
 console.log(products.filter((eachDetail) => {
  let display = eachDetail.display;
   if (display.toLowerCase() == "oled") {
     return eachDetail;
  }
}))
console.log(
  "-----------------------------------------------------------------------"
);
// print 3g mobile phone names :
 console.log(products.filter((eachDetail) => {
  let brand = eachDetail.brand;
  let name = eachDetail.pName;
    if (brand.toLowerCase() == "3g") {
    return name;
     }
   }).map((product) => product.pName))
console.log("-----------------------------------------------------------------------");

// sort mobile based on price - sort
sortedProducts = products.sort((p1, p2) => p1.price - p2.price)
console.log(sortedProducts)
console.log(
  "-----------------------------------------------------------------------"
);

// print costly mobile price
highestPrice = sortedProducts.reduce((p1, p2) => p1.price > p2.price ? p1 : p2);
console.log(highestPrice.price);
console.log("-----------------------------------------------------------------------");
// print low cost mobile
lowestPrice = sortedProducts.reduce((p1, p2) =>
  p1.price < p2.price ? p1 : p2
);
console.log(lowestPrice.price);
console.log("-----------------------------------------------------------------------");