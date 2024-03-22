const arrayTest = [1, 2, 3, 4, 5, 5, 5, 6];

const set = new Set(arrayTest);
console.log(set);
//아래와 같은 객체를 리턴
//Set(6) { 1, 2, 3, 4, 5, 6 }

/**
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 */
set.forEach((value) => console.log(value));
//아래와 같이 작성시 이터레이터의 형태로 바뀜.
console.log(set.entries().next().value[1]); // 1
