//코드가 단순할진 몰라도 array에 대한 메모리를 차지한다는 점이 마음에 걸리는 코드다.
const counterArray = ['one', 2, 3, 'four'];

counterArray.forEach(element => {
  console.log(element);
});