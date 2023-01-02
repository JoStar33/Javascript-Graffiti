const helloObject = {
  value: "안녕",
  objectFuntion: function () {
    console.log(this);
  }
}

const helloObject2 = {
  value: "안녕",
  objectFuntion: () => {
    console.log(this);
  }
}
helloObject.objectFuntion();
helloObject2.objectFuntion();