const land = [
  [1, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1],
];

const generateRandomString = (num) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

const earthMakeStar = (lineIndex, earthIndex, land, pointSaver) => {
  land[lineIndex][earthIndex] = "*";
  pointSaver.push([lineIndex, earthIndex]);
  if (lineIndex - 1 >= 0 && land[lineIndex - 1][earthIndex] === 1) {
    earthMakeStar(lineIndex - 1, earthIndex, land, pointSaver);
  }
  if (lineIndex + 1 < land.length && land[lineIndex + 1][earthIndex] === 1) {
    earthMakeStar(lineIndex + 1, earthIndex, land, pointSaver);
  }
  if (earthIndex - 1 >= 0 && land[lineIndex][earthIndex - 1] === 1) {
    earthMakeStar(lineIndex, earthIndex - 1, land, pointSaver);
  }
  if (
    earthIndex + 1 < land[0].length &&
    land[lineIndex][earthIndex + 1] === 1
  ) {
    earthMakeStar(lineIndex, earthIndex + 1, land, pointSaver);
  }
};

function solution(land) {
  let pointSaver = [];
  land.forEach((line, lineIndex) => {
    line.forEach((earth, earthIndex) => {
      if (earth === 1) {
        let randomStr = generateRandomString(10);
        earthMakeStar(lineIndex, earthIndex, land, pointSaver);
        pointSaver.forEach((pointElement) => {
          land[pointElement[0]][pointElement[1]] = {
            key: randomStr,
            value: pointSaver.length,
          };
        });
        pointSaver = [];
      }
    });
  });
  const earthLineLength = land[0].length;
  let oilKeeper = [];
  let answer = 0;
  for (let earthLine = 0; earthLine < earthLineLength; earthLine++) {
    land.forEach((line) => {
      const currentLineOil = line[earthLine];
      if (
        !oilKeeper.find((element) => element.key === currentLineOil.key) &&
        currentLineOil !== 0
      ) {
        oilKeeper.push(line[earthLine]);
      }
      const sumOil = oilKeeper.reduce((a, b) => {
        return a + b.value;
      }, 0);
      if (answer < sumOil) {
        answer = sumOil;
      }
    });
    oilKeeper = [];
  }
  return answer;
}

console.log(solution(land));
