const weatherData = [
  { district: "Thrissur", temp: 32 },
  { district: "Thiruvananthapuram", temp: 33 },
  { district: "Kozhikode", temp: 31 },
  { district: "Thrissur", temp: 28 },
  { district: "Kozhikode", temp: 27 },
  { district: "Ernakulam", temp: 26 },
  { district: "Ernakulam", temp: 30 },
  { district: "Thiruvananthapuram", temp: 29 },
];

// print district with its highest temperature

output = {}; //create empty obj
weatherData.forEach((eachDetail) => {
  let district = eachDetail.district;
  let currentTemp = eachDetail.temp;

  if (district in output) {
    if (currentTemp > output[district]) {
      output[district] = currentTemp;
    }
  } else {
    output[district] = currentTemp;
  }
});
console.log(output);
