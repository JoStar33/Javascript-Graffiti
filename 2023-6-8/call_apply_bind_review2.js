function myInfo (name, age, place) {
  console.log(`ID: ${this} 사용자명: ${name} 나이: ${age} 사는장소: ${place}`);
  console.log(`arguments: ${arguments[0]}`);
};
//첫번째 인자: thisBind. 두번째 인자부터는 매개변수 바인딩.
//함수를 실행시킨다.
myInfo.call("375329adb", "james", 34, "경기도");


function tableRow (first, second, third) {
  console.log(`이름: ${this.name} 첫번째: ${first} 두번째: ${second} 세번째: ${third}`);
  console.log(`arguments: ${arguments[0]}`);
}

//마찬가지, this를 바인딩해주며 매개변수를 연결
/*
"이름: kakaru 첫번째: 20 두번째: 30 세번째: 40";
arguments[0]: 20
*/
tableRow.apply({name: "kakaru"}, [20, 30, 40]);


//잠깐만!!! arguments객체는 뭘까?
//함수에 전달된 인수에 해당하는 Array 형태의 객체이다.