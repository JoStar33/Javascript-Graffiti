//이렇게 고유한 id를 생성하는 제너레이터를 만들 수 있다.
function* makeId() {
  let id = 1;
  while(true) {
    yield id;
    id++;
  }
}

const newId = makeId();
//next는 다음을 실행, return은 제너레이터 실행을 종료하고 값을 반환. return이후 next를 실행하면 value는 undefined가 나온다.
console.log(newId.next().value);
console.log(newId.next());
console.log(newId.next());
console.log(newId.next());
console.log(newId.next());
console.log(newId.next());
console.log(newId.next());