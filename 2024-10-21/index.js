function calcTime(time) {
  const [hour, minute] = time.split(":").map((timeElement) => +timeElement);
  return hour * 60 + minute;
}

function solution(bookTimeArray) {
  const map = new Map();

  for (const [startTime, endTime] of bookTimeArray) {
    let calcStartTime = calcTime(startTime);
    const calcEndTime = calcTime(endTime);
    for (; calcStartTime < calcEndTime + 10; calcStartTime++) {
      map.set(calcStartTime, (map.get(calcStartTime) ?? 0) + 1);
    }
  }

  return Math.max(...map.values());
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
