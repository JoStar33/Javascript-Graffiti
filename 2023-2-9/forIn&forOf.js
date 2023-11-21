//for in
const user = {
  name: 'jostar',
  age: 27,
  description: 'nice programmer'
}

/*
  name
  age
  description
*/
for(key in user) {
  console.log(key);
}

/*
  jostar
  27
  nice programmer
*/
for(key in user) {
  console.log(user[key]);
}


const numberArr = [1, 2, 3, 4, 5];

//아래 예제를 통해 확실히 알았다. for of문은 오직 이터러블한 코드에서만 사용할 수 있는 반면 for in문은 그런 규칙을 가지고있지 않다.
for(number of numberArr) {
  console.log(number);
}

for(key of user) {
  console.log(key);
}

//근데 문제는 이거임... 아래 코드 실행결과가 동일한데 for in, for of를 배열에 사용할 경우 구체적으로 어떤 차이점을 가지는 걸까?
for(number in numberArr) {
  console.log(number);
}

for(number of numberArr) {
  console.log(number);
}

//그건 여기서 확인해볼 수 있다. 먼저 numbers배열에 프로퍼티를 하나 넣어보도록 하겠다.(배열에 프로퍼티를 넣을 수 있다는 사실도 처음앎ㅋㅋㅋㅋ)
numberArr.prop = "프로퍼티입니다."

//자 이제 위에코드를 실행해보자.
for(number in numberArr) {
  console.log(number);
}

for(number of numberArr) {
  console.log(number);
}

/*
    0
    1
    2
    3
    4
    prop >> 이렇게 객체정보가 같이 출력되는걸 확인할 수 있다.


    1
    2
    3
    4
    5
*/