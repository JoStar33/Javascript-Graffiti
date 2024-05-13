const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(array.slice(4, 8));

console.log(array.splice(4, 2)); // [ 5, 6 ]

console.log(array); // [ 1, 2, 3, 4, 7, 8 ]

console.log(
  array.some((element) =>
    [5, 6].find((exceptElement) => exceptElement === element)
  )
);

console.log(
  array.every((element) =>
    [5, 6].find((exceptElement) => exceptElement !== element)
  )
);

const objectTest = {
  a: 1,
  b: 2,
  c: 3,
};

for (let objectKey in objectTest) {
  console.log(objectKey);
}

// 에러발생! 객체내에 for of는 사용금지.
for (let objectKey of objectTest) {
  console.log(objectKey);
}

// 근데 또 이건됨ㅋ 왜냐하면 배열은 객체니까!
for (let objectKey in array) {
  console.log(objectKey);
}
