// 게임 맵 최단거리
const solution = (graph) => {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const n = graph[0].length;
  const m = graph.length;
  let queue = []; // 탐색해야할 노드들

  queue.push([0, 0, 1]);

  while (queue.length !== 0) {
    let [nx, ny, step] = queue.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
    if (nx === n - 1 && ny === m - 1) {
      return step;
    }
    for (const [dx, dy] of directions) {
      if (
        nx + dx >= 0 &&
        nx + dx < n &&
        ny + dy >= 0 &&
        ny + dy < m &&
        graph[ny + dy][nx + dx] === 1
      ) {
        graph[ny + dy][nx + dx] = 0;
        queue.push([nx + dx, ny + dy, step + 1]);
      }
    }
  }
  return -1;
};
