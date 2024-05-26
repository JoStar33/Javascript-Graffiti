//원시타입
const Number = 0; //참고: NaN은 number type.
const String = "string";
const Null = null;
const Undefined = undefined;
const Boolean = false;
const Symbol = Symbol("value");

//참조타입
//참조타입은 사실 프로토타입 기반의 객체들임.
//객체이기 때문에 메모리주소를 참조하고있음.
const Object = { name: "object" };
const Array = ["array"];
function Function() {
  return "funtion";
}
