const symbolData = Symbol('hello, symbol');
console.log(symbolData);

const symbolReference = symbolData;
console.log(symbolReference);


//전혀 예상치못한 결과라 너무 당황했음. true가 찍힘. 왜일까?
//이유는 심볼자체가 아무리 고유한 값을 가진다 하더라도 결론적으론 원시타입이기 때문이다. 바라보고 있는 메모리가 같잖아.
console.log(symbolData === symbolReference);




//그럼 이경우는 어떨까? 아래와 같은 구문을 한번 보자. 두 심볼값은 동일한 상태이다. 그럼 비교시에 어떤 결과가 나올까~?
const symbolData1 = Symbol('hello, symbol');
const symbolData2 = Symbol('hello, symbol');
//결과는 바로 false! symbol을 사용하면 심볼만의 유일한 값이 생기게 되는거다.
console.log(symbolData1 === symbolData2);
