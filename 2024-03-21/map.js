//키가 있는 데이터를 저장한다는 특징이 있음.
//객체와 달리 키를 문자형으로 변환하지 않는다는 특징을 가지고 있음.
//키값에 대한 자료형 제약이 존재하지않음.
//key-value의 쌍으로 데이터를 저장하며 쌍의 삽입순서를 기억한다.
const map = new Map();
//숫자형 키
map.set(1, 2);
//문자형 키
map.set("1", 2);
//Map(2) { 1 => 2, '1' => 2 }
console.log(map);

//정말 재밌는점은 맵은 객체를 키로두는걸 허용한다.
//객체에서는 허용하지않는 규칙을 맵에서 허용한다는 사실.
const object = {
  name: "jose",
};

map.set(object, 3);
//Map(3) { 1 => 2, '1' => 2, { name: 'jose' } => 3 }
console.log(map);
//3
console.log(map.get(object));
