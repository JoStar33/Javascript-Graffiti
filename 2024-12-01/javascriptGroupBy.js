const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// 그러나 유감이지만 위에 코드는 동작을 안함. 노드.js가 groupBy를 지원안함.
// 따라서 아래와 같이 만들어줘야함.

Object.prototype.groupBy = (arr, callback) => {
  return arr.reduce((obj, element, index) => {
    const key = callback(element, index);
    obj[key] = [...(obj[key] || []), element];
    return obj;
  }, {});
};

const result = Object.groupBy(inventory, ({ type }) => type);

console.log(result);
