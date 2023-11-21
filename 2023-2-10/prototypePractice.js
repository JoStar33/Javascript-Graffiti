//프로토타입 복습하기..

Array.prototype.showThis = () => {
  console.log(this);
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
};

Person.prototype.showAge = function () {
  console.log(this.age);
}

const data = [1, 2, 3, 4];

data.showThis();

const newPerson = new Person('jojo', 27);

newPerson.showAge();
newPerson.showName();