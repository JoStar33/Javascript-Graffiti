const promiseSetTimeOut = (text) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(text);
    }, 2000)
  );
};

const main = async () => {
  const response = await promiseSetTimeOut("run1");
  console.log(response);
  const response2 = await promiseSetTimeOut("run2");
  console.log(response2);
};
main();
