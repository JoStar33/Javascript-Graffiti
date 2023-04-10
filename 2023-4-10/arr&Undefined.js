const arr = [];
console.log(arr === undefined); //false
//배열이 비어있는지를 확인하는 방법은 length의 길이가 0인지를 통해 확인하는 방법이 있겠다.
//근데... 이거 코드가 너무 명령적이라 꼴보기가 싫다. 그래서 다른 방안이 있나 찾아보다가
//짜잔~ 이렇게 Array.isArray를 통해 검출하는 방법을 알아냈다. 이렇게 찾아내면 오케이!
console.log(arr.length === 0); //true
console.log(Array.isArray(arr)); //true