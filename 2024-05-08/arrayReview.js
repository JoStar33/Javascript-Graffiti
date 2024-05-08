const newArray = [10, 40, 50, 60];
console.log(
  newArray.reduce((a, b) => {
    return a * b;
  })
);

console.log(newArray.sort((a, b) => (a > b ? -1 : 1)));

const nameArray = ["aimy", "bibi", "koko"];

console.log(nameArray.sort((a, b) => (a > b ? -1 : 1)));
