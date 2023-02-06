
//case 1
let data1 = null;
if(data1 === undefined || data1 === null) {
  data1 = 3;
}

//case 2
let data2 = null;
data2 ??= 3;

//놀랍게도 위에 두 케이스는 동일하다.
console.log('data1: ', data2);
console.log('data2: ', data2);


//case 3
//undefined와 null, 빈스트링, 0을 검사해볼까?
if (!undefined) {
  console.log(undefined)
}
if (!null) {
  console.log(null)
}
if (!"") {
  console.log("빈값")
}
if (!0) {
  console.log('0이요')
}