let data = [1, 2, 3, 4, 5];

//뭐 하나만 확인해보자. data map을 돌려서 *2를 실행했다. data는 map으로 나온 결과 array로 변할까?
data.map((element) => {
  return element * 2;
});
//안바뀜.
console.log(data);


//그렇다면 필터는?
data.filter((element) => {
  element > 2
});
//마찬가지로 안바뀜ㅇㅇ
console.log(data);

//map과 filter를 사용하라고 권장하는건 불변성 유지 때문이군!
console.log([...data, 2]);