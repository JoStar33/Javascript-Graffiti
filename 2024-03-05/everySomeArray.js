const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

//교집합
const result1 = array1.filter((element1) =>
  array2.some((element2) => element2 === element1)
);

//차집합
const result2 = () => {
  const resultElement1 = array1.filter((element1) =>
    array2.every((element2) => element2 !== element1)
  );
  const resultElement2 = array2.filter((element2) =>
    array1.every((element1) => element2 !== element1)
  );

  return [...resultElement1, ...resultElement2];
};

//합집합
const result3 = [...new Set([...array1, ...array2])];

//[ 4, 5 ]
console.log(result1);
//[ 1, 2, 3, 6, 7, 8 ]
console.log(result2());
//[1, 2, 3, 4, 5, 6, 7, 8]
console.log(result3);
