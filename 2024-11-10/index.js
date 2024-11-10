const solution = (numbers) => {
  const setNumbers = new Set(numbers);
  const sortedNumbers = Array.from(setNumbers).sort();
  const dictionaryMap = new Map();
  sortedNumbers.forEach((_, index) => {
    dictionaryMap.set(sortedNumbers[index], sortedNumbers[index + 1] ?? -1);
  });
  const answer = [];
  numbers.forEach((element) => {
    const value = dictionaryMap.get(element);
    answer.push(value);
  });
  return answer;
};
