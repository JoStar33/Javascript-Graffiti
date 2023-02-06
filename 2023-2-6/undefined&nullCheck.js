let data1 = null;
if(data1 === undefined || data1 === null) {
  data1 = 3;
}

let data2 = null;
data2 ??= 3;

console.log('data1: ', data2);
console.log('data2: ', data2);