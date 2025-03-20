/* 
Create an object named car with the following details:
	Brand: “Toyota”
	Model: “Camry”
	Year: 2020
	Access and print the car’s model.
	Update the car’s year to 2022.
	Add a new property color with the value “Blue”.
	Print the updated object.
*/

car = {
  Brand: "Toyota",
	Model: "Camry",
	Year: 2020
}

//Access and print the car’s model.
console.log(car.Model);

//Update the car’s year to 2022.
car.Year = 2022;

//Add a new property color with the value “Blue”.
Object.assign(car, {Color: "Blue"})

//Print the updated object.
console.log(car);