const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const BFS = (graph, startNode) => {
  let queue = []; // 탐색해야할 노드들
  let visited = []; // 탐색을 마친 노드들

  queue.push(startNode); // 노드 탐색 시작

  while (queue.length !== 0) {
    // 탐색해야할 노드가 남아있다면
    const node = queue.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
    if (!visited.includes(node)) {
      // 해당 노드 방문이 처음이라면,
      visited.push(node);
      queue = [...queue, ...graph[node]];
    }
  }
  return visited;
};
