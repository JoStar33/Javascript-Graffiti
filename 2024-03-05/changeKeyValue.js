const testObject = {
  a: "cc",
  b: "bb",
  c: "cc",
};

const result = Object.keys(testObject).reduce((objectInfo, data) => {
  const value = testObject[data];
  objectInfo[value] = [...(objectInfo[value] ?? []), data];
  return objectInfo;
}, {});

console.log(result);
