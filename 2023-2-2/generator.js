//제너레이터를 사용하면 필요한 데이터 하나의 정보만 메모리상에 저장하기때문에 효과적으로 메모리를 관리하는게 가능해진다.
//제너레이터는 화살표 함수에서 사용이 불가능하다. 이점 유의하기.
//흥미로운 점 하나 더, 제너레이터는 이터러블 프로토콜을 기본적으로 제공한다. 즉, 이터레이터와 이터러블의 조합이다라고 말해도 무방하다.
//제너레이터 이녀석 이터레이터를 편하게 사용하기위한 보조수단이다라고 이해해도 무방하겠는걸?
function* generatorFunction() {
  yield 'one';
  yield 2;
  yield 3;
  yield 'four';
}

const newGenerator = generatorFunction();
const newGenerator2 = generatorFunction();
console.log(newGenerator.next());
console.log(newGenerator.next());
console.log(newGenerator2.next());
console.log(newGenerator.next());
console.log(newGenerator2.next());