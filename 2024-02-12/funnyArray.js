//1. Object.groupBy
//특정 규칙을 바탕으로 그룹지어 배열을 만들어야할때 유용하다.

const person = [
  { name: "john", age: 23 },
  { name: "john", age: 32 },
  { name: "kyle", age: 36 },
  { name: "timmy", age: 12 },
];

const personGroup = Object.groupBy(person, (people) => people.name);
//이름의 그룹형태로 배열이 분리돼서 보여짐.
console.log(personGroup);

//2. Array.with
//배열의 특정요소를 치환하여 배열을 새로만든다.
//이때 기존배열의 요소를 건들지 않는다.(불변성 유지)
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]

//3. Array.fill
//배열의 요소들을 fill의 매개변수값으로 전부 치환해버림
const arr2 = [2, 3, 4, 5];
arr2.fill(1);
// [1, 1, 1, 1]
