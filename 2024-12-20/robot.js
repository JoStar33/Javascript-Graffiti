// 프로그래머스 리코쳇 로봇
function solution(board) {
  const n = board.length;
  const m = board[0].length;
  const directions = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];

  let start, goal;

  // 시작점과 목적지 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "R") start = [i, j];
      if (board[i][j] === "G") goal = [i, j];
    }
  }

  const queue = [[...start, 0]]; // [x, y, steps]
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[start[0]][start[1]] = true;

  while (queue.length !== 0) {
    const [x, y, steps] = queue.shift();

    // 목적지에 도달한 경우
    if (x === goal[0] && y === goal[1]) return steps;

    for (const [dx, dy] of directions) {
      let nx = x,
        ny = y;

      // 방향 유지하며 이동
      while (
        // 벽에 닿았는지 확인
        nx + dx >= 0 &&
        nx + dx < n &&
        ny + dy >= 0 &&
        ny + dy < m &&
        // D에 닿았는지 확인
        board[nx + dx][ny + dy] !== "D"
      ) {
        // D나 벽에 닿을때까지 쭉 이동
        nx += dx;
        ny += dy;
      }

      if (!visited[nx][ny]) {
        // 해당 노드 방문이 처음이라면,
        visited[nx][ny] = true;
        queue.push([nx, ny, steps + 1]);
      }
    }
  }

  // 목적지에 도달하지 못한 경우
  return -1;
}

// 테스트
const board = ["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."];
console.log(solution(board)); // 출력: 최소 이동 횟수
