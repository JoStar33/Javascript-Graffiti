const helloObject = {
  value: "안녕",
  objectFuntion: function () {
    console.log(this);
  }
}

//자체적인 this를 가지는게 아닌 에로우 함수.
//화살표 함수는 전역 컨텍스트에서 실행되더라도 this를 새로 정의하지 않고, 바로 바깥 함수나 클래스의 this를 쓴다.
//근데 주의! 아래와 같이 실행하면 window를 찍음. 왜그럴까? 
//메소드를 호출한 객체를 가리키지 않고 상위 컨택스트인 전역 객체 window를 가리키게 되어서이다. 이런 케이스로 인해, 객체로 호출한 함수는 반드시 화살표형으로 작성하지 말도록!
const helloObject2 = {
  value: "안녕",
  objectFuntion: () => {
    console.log(this);
  }
}
helloObject.objectFuntion();
helloObject2.objectFuntion();