const getName = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("나의 이름 Jostar");
    }, 1000);
  });

const getTodo = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("밥먹기");
    }, 2000);
  });

//동시에 두가지 처리를 할때 아래와 같이 Promise.all을 사용한다.
//이때 Promise 객체의 비동기 처리가 끝나면 아래와 같이 배열의 형태로 resolve된 값을 사용가능하다.
const runMain = async () => {
  try {
    const promise = await Promise.all([getName(), getTodo()]);
    //[ '나의 이름 Jostar', '밥먹기' ]
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
};

runMain();

const getTodoError = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("이런! 할일이 없군요");
    }, 2000);
  });

const runMainWithError = async () => {
  try {
    const promise = await Promise.all([getName(), getTodoError()]);
    console.log(promise);
  } catch (error) {
    //Promise.all의 특징은 에러가 발생할때 가장 빨리 에러가 발생한 객체에 대해서만 error를 뱉는다.
    //이런! 할일이 없군요
    console.log(error);
  }
};

runMainWithError();

const runMainWithSettled = async () => {
  try {
    /**
     * allSettled는 다음과 같이 상태정보를 포함한 객체배열을 Promise객체의 결과값으로 받을수 있다.
     * 특징은 Promise객체의 비동기처리가 성공했다면 fulfilled. 그게 아니라면 rejected이고 fulfilled일때에는 value를 통해
     * 비동기 처리의 결과물을 받을 수 있으며, rejected일때는 비동기처리 실패의 이유를 확인할 수 있다.
     * [
     *   { status: 'fulfilled', value: '나의 이름 Jostar' },
     *   { status: 'rejected', reason: '이런! 할일이 없군요' }
     * ]
     */
    const promise = await Promise.allSettled([getName(), getTodoError()]);
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
};

runMainWithSettled();
