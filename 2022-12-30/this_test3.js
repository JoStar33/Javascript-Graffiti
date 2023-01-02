//이게 가능한 이유는 화살표 함수에는 ⭐️this가 아예 없기 때문⭐️이다.
const helloObject = {
  value: "안녕",
  objectFuntion: function() {
    console.log(this);
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
}

//화살표함수는 this를 가지고있지않는다. 이때문에 아래와같은 경우는 objectFuntion의 this를 참조하는것이지, 자체적으로 this를 가지는게 아니라는 것이다.


const helloObject2 = {
  value: "안녕",
  objectFuntion: function() {
    console.log(this);
    const innerFunction = () => {
      console.log(this);
    }
    innerFunction();
  }
}
helloObject.objectFuntion();
helloObject2.objectFuntion();