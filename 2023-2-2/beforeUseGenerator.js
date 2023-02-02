//코드가 단순할진 몰라도 array에 대한 메모리를 차지한다는 점이 마음에 걸리는 코드다.
//이게 만약 수열을 통해 값을 저장해나가야 한다고 가정했을때 수많은 수열 정보들이 담기게 된다. 그럼 메모리가........오우...
const counterArray = ['one', 2, 3, 'four'];

counterArray.forEach(element => {
  console.log(element);
});