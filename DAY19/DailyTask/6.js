/* 
const weather = {
  city: "New York",
  temperature: 28,
  condition: "Sunny"
};

1) Access and print the city's name.
2) The temperature has dropped by 5 degrees. Update it.
3) Add a new property humidity with a value of 60.
4) Print the updated weather object.
*/

const weather = {
  city: "New York",
  temperature: 28,
  condition: "Sunny"
};

//1) Access and print the city's name.
console.log(weather.city);

//2) The temperature has dropped by 5 degrees. Update it.
weather.temperature -= 5;

//3) Add a new property humidity with a value of 60.
Object.assign(weather, {humidity: 60})

//4) Print the updated weather object.
console.log(weather)