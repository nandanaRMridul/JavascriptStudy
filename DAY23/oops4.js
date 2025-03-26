//OOPS Features

//Inheritance
class parent {
  showBike() {
    console.log("My bike is Mojo 300");
  }
}

class child extends parent{//child is defined

}

const Parent = new parent();
const Child = new child();

Child.showBike();