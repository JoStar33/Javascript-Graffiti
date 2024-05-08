const numberMap = new Map([
  [1, 1000],
  [2, 2000],
  [3, 3000],
]);

/** map.keys()
 *  - 키를 모은 값을 반복가능한 객체로 반환함.
 *
 *  map.values()
 *  - 각 요소의 값을 모은 이터러블 객체를 반환함.
 *
 *  map.entries()
 *  - 요소의 [키, 값]을 한 쌍으로 하는 객체를 반환.
 */

/**
 * Result
 * 1
 * 2
 * 3
 */
for (const key of numberMap.keys()) {
  console.log(key);
}

/**
 * Result
 * 1000
 * 2000
 * 3000
 */
for (const value of numberMap.values()) {
  console.log(value);
}
/**
 * Result
 * [ 1, 1000 ]
 * [ 2, 2000 ]
 * [ 3, 3000 ]
 */
for (const entry of numberMap.entries()) {
  console.log(entry);
}

/**
 * forEach도 사용가능한데, 이때에
 * 첫번째 인자는 value
 * 두번째 인자는 key
 * 세번째 인자는 map
 * 이다.
 */
let result = 0;
numberMap.forEach((_, key, element) => {
  result += element.get(key);
});
//6000
console.log(result);
