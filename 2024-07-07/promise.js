"use strict";

// Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.
const promise = new Promise((resolve, reject) =>
  setTimeout(() => {
    // 비동기 처리 후, "is Resolved"라는 스트링 정보를 리턴.
    resolve("is Resolved");
  }, 2000)
);

promise.then((value) => {
  console.log("is Over");
  console.log(value);
});
