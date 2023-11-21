const arr = [1, 2, 3, 4, 5, 6];
//다음과 같이 순회가능한 객체를 이터러블하게 바꿔준다.
const iterateArr = arr[Symbol.iterator]();


//컬렉션 구현 방법을 노출시키지 않으면서도 그 집합체 안에 들어있는 모든 항목에 접근할 수 있는 방법을 제공하기에 사용함.
//이터레이터 사용시 해당 컬렉션에 접근할 수 있는 방법은 next()뿐.
console.log(iterateArr.next());
console.log(iterateArr.next());
console.log(iterateArr.next());
console.log(iterateArr.next());
console.log(iterateArr.next());
console.log(iterateArr.next());
console.log(iterateArr.next());

/*
  { value: 1, done: false }
  { value: 2, done: false }
  { value: 3, done: false }
  { value: 4, done: false }
  { value: 5, done: false }
  { value: 6, done: false }
  { value: undefined, done: true }
*/
