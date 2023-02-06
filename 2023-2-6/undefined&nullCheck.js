
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