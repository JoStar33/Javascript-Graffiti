const f1 = () => console.log(value + 1);
const value = 3;
f1();
//이거 왜 실행될까?

//자 잘생각해보자. f1은 아직 실행이 안된 상태이다. 즉, value의 값을 사용하지않았다 아직.
//만약 f1이라는 함수가 value메모리 공간에 값이 들어가기전에 사용됐다손 치자. 그럼 문제가 생긴다.
//그러나 위에 상황은 그게 아니기때문에 value의 값 초기화 및 정의가 정상적으로 이루어진다.
//즉 우리가 아래와 같은 리액트 코드를 봤을때 별 문제가 안생기는 이유를 알 수 있다!!!

function Component() {
  return <S.Component></S.Component>;
}

const S = {
  Component: {
    /*뭐시기 저시기...*/
  },
};
