function callFunction () {
  console.log(this.number);
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

callFunction.call({number: 20}, 30, 40, 50);


function applyFuntion () {
  console.log(this.number);
  console.log(arguments[0]);
}
applyFuntion.apply({number: 0}, [20, 30, 40, 50])