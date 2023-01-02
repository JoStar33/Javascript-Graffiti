//이게 바로 비동기처리를 할때 화살표 함수를 써야하는 이유.
//비동기함수내에서는 this를 윈도우로 가리킨다!!!

const helloObject = {
  value: "안녕",
  objectFuntion() {
    setTimeout(function () {
      console.log(this);
    }, 500);
  }
};

const helloObject2 = {
  value: "안녕",
  objectFuntion() {
    setTimeout(() => {
      console.log(this);
    }, 500);
  }
};
helloObject.objectFuntion();
helloObject2.objectFuntion();