//제너레이터를 사용하면 필요한 데이터 하나의 정보만 메모리상에 저장하기때문에 효과적으로 메모리를 관리하는게 가능해진다.
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