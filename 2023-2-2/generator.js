function* generatorFunction() {
  yield 'one';
  yield 2;
  yield 3;
  yield 'four';
}

const newGenerator = generatorFunction();
const newGenerator2 = generatorFunction();
console.log(newGenerator.next());
console.log(newGenerator.next());
console.log(newGenerator2.next());
console.log(newGenerator.next());
console.log(newGenerator2.next());