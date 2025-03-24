
class employee{

  //properties
  empId= 1001
  empName = "Anoop"
  empSal = 100000

  //methods
  displayDetails() {
    console.log(`Name: ${this.empName}, Id: ${this.empId}`);
  }
}

const Emp1 = new employee();

Emp1.displayDetails();