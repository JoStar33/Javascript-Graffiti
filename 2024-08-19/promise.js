// awaitPractice내에 있는 코드를 promise then으로 바꾸면 아래와 같이 된다.

const One = () => Promise.resolve("One!");

function myFunc() {
  console.log("In function!");
  return One().then((res) => {
    console.log(res);
  });
}
/**
 * Before Function!
 * In function!
 * One!
 * After Function!
 */
console.log("Before Function!");
myFunc().then(() => {
  console.log("After Function!");
});
