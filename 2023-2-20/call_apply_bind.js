const jose = {
  name: 'jose'
};

const minsu = {
  name: 'minsu'
}

function introduceMySelf (age, city, like) {
  return `hello my name is ${this.name}. i'm ${age} years old. i'm leave in ${city}. i love ${like}`;
}

//콜그어배
console.log(introduceMySelf.call(jose, 27, 'gunpo', 'music'));
console.log(introduceMySelf.apply(minsu, [29, 'dongTan', 'game']));

//위와 아래 모두 동일한 결과를 보여준다!
//다음과같이 전달받은 파라메터를 arguments로 실행시킬 수 있다.
function introduceMySelfArguments () {
  return `hello my name is ${this.name}. i'm ${arguments[0]} years old. i'm leave in ${arguments[1]}. i love ${arguments[2]}`;
}

console.log(introduceMySelfArguments.call(jose, 27, 'gunpo', 'music'));
console.log(introduceMySelfArguments.apply(minsu, [29, 'dongTan', 'game']));

/*
  hello my name is jose. i'm 27 years old. i'm leave in gunpo. i love music
  hello my name is minsu. i'm 29 years old. i'm leave in dongTan. i love game
  hello my name is jose. i'm 27 years old. i'm leave in gunpo. i love music
  hello my name is minsu. i'm 29 years old. i'm leave in dongTan. i love game
*/
