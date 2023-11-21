const pickArr = [];


//변수가 이터러블 한지 아닌지를 체크하는 방법!
//심볼 프로토타입을 활용해서 체크.
if(Symbol.iterator in pickArr) {
  console.log('이터러블 통과')
}