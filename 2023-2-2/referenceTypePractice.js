//다음과 같이 참조타입인 객체를 변경할때는 newPerson이라는 변수가 person을 참조하여 같은 메모리를 바라보기 때문에 newPerson이라는 값 자체도 같이 바뀌게 된다.

let person = {
  name: 'hi',
  age: 23,
  place: 'anyang'
};

let newPerson = person;

person.name = 'jojo';

console.log(newPerson);


//자바스크립트 객체의 이상한 특성...
let OA = {};
let OB = {};

console.log(OA === OB);

//위에 구문을 이렇게 실행한다면? 정상동작!
let objectA = {};

let objectB = objectA;

console.log(objectA === objectB)