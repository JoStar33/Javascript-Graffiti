/**
 * Before Function!
 * In function!
 * After Function!
 * One!
 */
const One = () => Promise.resolve("One!");

async function myFunc() {
  console.log("In function!");
  const res = await One();
  console.log(res);
}

// console.log("Before Function!");
// myFunc();
// console.log("After Function!");

/**
 * Before Function!
 * In function!
 * One!
 * After Function!
 */
const main = async () => {
  console.log("Before Function!");
  await myFunc();
  console.log("After Function!");
};
main();
