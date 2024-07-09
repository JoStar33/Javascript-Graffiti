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
for (let i = 0; i <= 3000000000; i++) {
  if (i === 3000000000) {
    console.log(2000);
  }
}
