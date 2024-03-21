const obj = {
  name: "John",
  age: 30,
};
// 먼저 Object entries를 활용해여 객체를 배열의 형태로 변경해준다.
// [['name', 'John']. ['age', 30]]
// 이는 Map에서 요구하는 형태를 만족하므로 치환가능!
const map = new Map(Object.entries(obj));

console.log(map.get("name")); // John

// 반대로하는것도 당연히 가능한데, 바로 Object.fromEntries를 활용하는것!
const object = Object.fromEntries(map.entries());
//{ name: 'John', age: 30 }
console.log(object);
