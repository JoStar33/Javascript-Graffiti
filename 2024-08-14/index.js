const main = () => {
  setTimeout(() => {
    console.log("비동기 동작");
  }, 0);
  for (let i = 0; i < 1_000_000; i++) {
    if (i === 999_999) {
      console.log("over", i);
    }
  }
};

const anotherAsync = async () => {
  const value = await Promise.all([
    setTimeout(() => {
      console.log("비동기 동작");
    }, 0),
    setTimeout(() => {
      console.log("비동기 동작");
    }, 0),
    setTimeout(() => {
      console.log("비동기 동작");
    }, 0),
  ]);
  console.log(value); // [Timeout, Timeout, Timeout]
};

anotherAsync();
// main();
