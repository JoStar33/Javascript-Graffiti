const numbers = [1, 2, 3, 4, 5];

Array.prototype.showData = (number) => {
  console.log(number);
}

numbers.showData(3);
console.dir(numbers);

function newFunction(name, age) {
  this.name = name;
  this.age = age;
  this.showInfo = function (){
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}
newFunction.prototype.vivi = () => {
  //여기서 가리키는 this는 재밌게도 전역객체다?
  console.log(this);
  console.log("실행은 된 상태라는 점");
};
const funcTest = new newFunction('halolo', 23);
funcTest.showInfo();
funcTest.vivi();