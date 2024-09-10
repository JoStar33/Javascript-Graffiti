const land = [
  [0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1],
];

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
        earthMakeStar(lineIndex, earthIndex, land, pointSaver);
        pointSaver.forEach((pointElement) => {
          land[pointElement[0]][pointElement[1]] = pointSaver.length;
        });
        pointSaver = [];
      }
    });
  });
  console.log(land);
}

solution(land);

const test = [
  [0, 0, 0, 3, 3, 3, 0, 0],
  [0, 0, 0, 0, 3, 3, 0, 0],
  [8, 8, 0, 0, 0, 3, 1, 0],
  [8, 8, 8, 0, 0, 0, 0, 0],
  [8, 8, 8, 0, 0, 0, 2, 2],
];
