function hello() {
  const hello2 = () => {
    console.log(value1);
  };
  const value1 = 123;
  hello2();
}
// 리액트에서 스타일드 컴포넌트를 사용시에 스타일드 컴포넌트 코드를 함수형 컴포넌트 아래에 작성해도 정상적으로 동작하는 이유가 바로 이것이다!
// 함수가 실행되기전에 value1이라는 값이 초기화 및 할당이 되기때문.
hello();

const hello2 = () => {
  console.log(value3);
};
const value3 = "is it run?";

hello2();
