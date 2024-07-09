const BASE_URL = "https://koreanjson.com/";
setTimeout(() => {
  console.log(1);
}, 0);
setTimeout(() => {
  console.log(2);
}, 0);
setTimeout(() => {
  console.log(3);
}, 8000);
fetch(`${BASE_URL}users`, { method: "GET" }).then(() => {
  console.log("성공!!!");
});
// 이 연산이 다 끝날때까지 위에 동작이 마무리된 비동기 처리된 결과값들이 보이지않음.
// 참고로 위에 코드들은 모두 비동기적으로 처리되지만, 그에따른 콜백함수들은 모두 콜백큐에 담긴다.
// 그리고 콜스택이 마무리될때까지 대기중인 상태를 유지함.
for (let i = 0; i <= 3000000000; i++) {
  if (i === 3000000000) {
    console.log(2000);
  }
}
