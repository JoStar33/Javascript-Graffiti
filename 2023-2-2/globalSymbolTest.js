//for를 사용시 symbol을 전역적으로 등록할 수 있다. 이렇게하면 symbolData로 Symbol에 접근시
//해당 symbol에 일치하는 스트링값을 리턴받을 수 있다.
const symbolData = Symbol.for('mununununununumumu');

console.log(Symbol.keyFor(symbolData));