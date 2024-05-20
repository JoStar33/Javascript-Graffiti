class Person {
  name = "";
  constructor(person) {
    this.name = person.name;
  }
  arrowMethod = () => {
    console.log(this);
  };
  functionMethod() {
    console.log(this);
  }
}

const person = new Person({ name: "jojo" });
person.arrowMethod();
person.functionMethod();

function myFunction() {
  name: "koko";
  const testFunction = () => {
    //global this
    console.log(this);
  };
  function testNewFunction() {
    //global this
    console.log(this);
  }
  testFunction();
  testNewFunction();
}

myFunction();

const helloObject = {
  value: "안녕",
  objectFunction: () => {
    //{}
    console.log(this);
  },
  functionalFunction: function () {
    /*
    {
      value: '안녕',
      objectFunction: [Function: objectFunction],
      functionalFunction: [Function: functionalFunction]
    }
    */
    console.log(this);
  },
};
helloObject.objectFunction();
helloObject.functionalFunction();
