//프로토타입에 대해서 재밌는게 하나 더 있어서 연습해보자.
function Grope(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = place;
  this.mapping = function (params) {
    console.log(params);
  }
}


const dav = new Grope('nana', 22, 'kk');
const dav2 = new Grope('nana', 22, 'kk');
//결과는 false. 참조하는 메모리가 달라서 그러는 이슈.
console.log(dav.mapping === dav2.mapping);

//그렇다면 이건 어떨까?
Grope.prototype.mapping = (params) => {
  console.log(params);
}

//이건 true다~~
console.log(dav.mapping === dav2.mapping);