//arguments란? 함수호출시 전달된 인수들의 정보를 담고있는 순회가능한 유사객체.

function multifyFunction () {
  console.log(arguments);
  console.log(Symbol.iterator in arguments); //true. 따라서 순회 가능함.
}

/*
실행결과:
  [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
  */
multifyFunction(1, 2, 3, 4);

function makeSumFunctionVer1 () {
  let sum = 0;
  for(const element of arguments) {
    sum += element;
  }
  return sum;
}

console.log(makeSumFunctionVer1(1, 2, 3, 4));

function makeSumFunctionVer2 () {
  let sum = 0;
  for(const element in arguments) {
    sum += arguments[element];
  }
  return sum;
}

console.log(makeSumFunctionVer2(1, 2, 3, 4));

//화살표함수에서는 arguments 사용 불가능.
const arrowFunction = () => {
  console.log(arguments[0]); //undefined
}

console.log(arrowFunction(1, 2, 3, 4));