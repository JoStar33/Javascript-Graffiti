function myFunction(propsApple1, propsApple2, propsApple3) {
  const newApple =
    this.apple +
    "New" +
    (propsApple1 ?? "") +
    (propsApple2 ?? "") +
    (propsApple3 ?? "");
  return newApple;
}

console.log(myFunction.bind({ apple: "apple" })());
//앞에 첫인자는 this를 바인딩하고, 나머지는 함수의 프로퍼티. 이를 리스트로 정의하냐 배열로 정의하냐의 차이다.
//배어리콜~
console.log(myFunction.call({ apple: "apple" }, "props1", "props2", "props3"));
console.log(
  myFunction.apply({ apple: "apple" }, ["props1", "props2", "props3"])
);
