String.prototype.charAt = () => {
  console.log("charAt");
};

String.prototype.showString = function () {
  console.log(this[0]);
};

String.prototype.showBindInfo = function () {
  console.log(this);
};

const star = "*";
star.charAt();
star.showString();
star.showBindInfo.bind("hihi")();
