// 다 압니다..... 안다고요........ 그냥 복습하는거에요....
// 손이 기억할때까지 복습하는거라구요.......
function createMenu({ size = "large", color = "blue" }) {
  // const size = option.size ?? 'large'; >> 이과정 생략가능
  return { size, color };
}

const arr1 = [1, 2, 3];
const arr2 = arr1.concat([4, 5]); // [1, 2, 3, 4, 5];

const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1, { c: 3 });

const arr3 = [...arr1, 4, 5];
const obj3 = { ...obj1, c: 3 };

// 옵셔널체이닝
const user = null;
const userName = user !== null && user !== undefined ? user.name : "Guest";
const userName2 = user?.name ?? "Guest";

// 함수 선언 간소화하기
const obj = null;
if (obj && typeof obj.method === "function") {
  obj.method();
}

// 함수에도 옵셔널 체이닝 가능.
obj?.method?.();

// 객체생성 간소화
const entries = [
  ["name", "front"],
  ["age", 100],
];
const obj10 = {};
entries.forEach(([key, value]) => {
  obj10[key] = value;
});

// 위과정은 아래처럼 간소화 가능.
const obj11 = Object.fromEntries(entries);

// 값의 계산 간소화
let x = 10;
// x++;
// x = x + 5;

// 이렇게 위에 계산을 한대 몰아서 표현이 가능함.
x = (x++, (x = x + 5), x * 10);
