let a = 2 + 2;

switch (a) {
  case 3:
    alert("비교하려는 값보다 작습니다.");
  case 4:
    alert("비교하려는 값과 일치합니다.");
  case 5:
    alert("비교하려는 값보다 큽니다.");
  default:
    alert("어떤 값인지 파악이 되지 않습니다.");
}

//switch문은 동등연산자(==)가 아닌, 일치연산자(===)로 비교함.
//이점 유의하기! 따라서 스트링값과 숫자값을 엄격하게 비교함.
let arg = prompt("값을 입력해주세요.");
switch (arg) {
  // ||
  case "0":
  case "1":
    alert("0이나 1을 입력하셨습니다.");
    break;

  case "2":
    alert("2를 입력하셨습니다.");
    break;

  case 3:
    alert("이 코드는 절대 실행되지 않습니다!");
    break;
  default:
    alert("알 수 없는 값을 입력하셨습니다.");
}
