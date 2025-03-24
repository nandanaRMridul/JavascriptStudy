class employee {

  //properties
  constructor(id, name, desig, sal) {
    this.empId = id;
    this.empName = name;
    this.empDesig = desig;
    this.empSal = sal;
  }

  //method
  displayDetails() {
    console.log(`Name: ${this.empName}, Id: ${this.empId}`)
  }

}

const emp1 = new employee(1002, "Savio", "Full Stack Developer", 100000);

emp1.displayDetails();

const emp2 = new employee(1003, "Sreejith", "Full Stack Developer", 100000);

emp2.displayDetails();
