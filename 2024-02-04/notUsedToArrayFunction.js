// every >> 모든요소가 조건을 만족하는지 검사한다. 통과한다면 true, 아니라면 false
const testArray1 = [1, 2, 3, 40, 50];
const is30Over = (value) => value > 30;
const result1 = testArray1.every((element) => is30Over(element));
console.log(result1); //false

// reduce >> 순회하며 특정 결과값을 만들때 사용한다.
const testArray2 = [1, 2, 3, 40, 50];
const testArray2_1 = ["H", "E", "L", "L", "O"];
/**
 * previousValue: 이전 결과값
 * currentValue: 순회중인 요소값
 * return: 현재 결과값.
 */
const result2 = testArray2.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(result2); // 96

const result2_1 = testArray2_1.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(result2_1); // HELLO

// flat >> 배열을 평평하게 만듬
const testArray3 = [1, 2, 3, [40, 50], [50, 70]];
console.log(testArray3.flat());
// [
//   1,  2,  3, 40,
//  50, 50, 70
// ]
