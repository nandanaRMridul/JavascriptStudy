//w.a.p to categorise the temperature
//above 30 hot
//20 - 30 -pleasant
//below 20 - cold

//user input
temp = 0;

//check if hot, pleasant or cold

if (temp > 30) {
  console.log("Hot");
}
else if (temp > 20 && temp <= 30) {
  console.log("Pleasant");
}
else if (temp <= 20) {
  console.log("Cold");
}