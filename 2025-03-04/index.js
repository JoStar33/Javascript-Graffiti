setTimeout(() => {
  console.log("1");

  setTimeout(() => {
    console.log("2");
  });

  Promise.resolve().then(() => console.log("3"));

  console.log("4");
});

Promise.resolve().then(() => {
  console.log("5");

  setTimeout(() => {
    console.log("6");
  });

  Promise.resolve().then(() => console.log("7"));

  console.log("8");
});

console.log("9");
// 958714362
//
