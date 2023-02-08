const third = () => {
  console.log("세번째");
}

const second = () => {
  third();
  console.log("두번째");
}

const first = () => {
  second();
  console.log("첫번째");
}

first();
console.log("세번째");