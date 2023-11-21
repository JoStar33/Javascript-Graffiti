/**
 * 배열을 받고 이를 나누어주는 함수입니다.
 * @param {number[]} numberArr - 숫자배열입니다.
 * @param {number} arrAverageLength - 배열을 합치고나서 나누는 값입니다.
 * @returns {number} 최종적으로 결과값을 리턴합니다.
 */
const makeAverage = (numberArr, arrAverageLength) => {
  const initialValue = 0;
  return numberArr.reduce((a, b) => (a + b) / arrAverageLength, initialValue);
};
