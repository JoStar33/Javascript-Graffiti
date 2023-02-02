//원시타입은 불변성을 유지하기때문에 값이 바뀌더라도 불변성을 유지한 값을 계속 참조하기 때문에
//값을 변경하더라도 기존에 바뀐값을 참조한 녀석 자체는 바뀌지 않게된다.

let count = 1;

let newCount = count;

count = 3;

console.log(newCount);