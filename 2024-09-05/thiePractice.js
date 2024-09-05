const testObject = {
  data: "hi",
  fun: function () {
    console.log(this.data);
  },
};

testObject.fun();

function thisApplyFunction() {
  console.log(this[0]);
}
thisApplyFunction.apply([123]);

function thisCallFunction() {
  console.log(this[0]);
}
thisCallFunction.call({ 0: 123, 1: 456, 2: 789 });
