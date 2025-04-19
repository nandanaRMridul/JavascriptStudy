/*  Create a Person class with the following properties:
 firstName, lastName, age, and gender.
Add a method getFullName() that returns the person's full name in the format: firstName lastName.
Extend the Person class to create an Employee class with an additional position property and a method getDetails() that returns the employee's full name and position.*/

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, gender, position) {
    super(firstName, lastName, age, gender);
    this.position = position;
  }

  getDetails() {
    const fullName = this.getFullName();
    return`Full name: ${this.getFullName()}, Position: ${this.position}`;
  }
}

const emp1 = new Employee(
  "Jane",
  "Doe",
  25,
  "female",
  "Full Stack Developer"
);


console.log(emp1.getFullName()); 

console.log(emp1.getDetails()); 
