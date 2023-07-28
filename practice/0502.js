const graph = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

function solution(n, m, graph) {
  let distance = graph;

  // 상하좌우 이동
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs(x, y) {
    const queue = []; // 방문 여부
    queue.push([x, y]);
    while (queue.length > 0) {
      const [x, y] = queue.shift();

      // 현재 위치에서 네 방향 위치 확인
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 범위 밖으로 벗어나면 무시
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        // 방문할 수 없는 노드 무시
        if (distance[nx][ny] === 0) continue;
        // 방문할 수 있는 노드 - 직전 노드의 거리 +1, 큐에 넣기
        if (distance[nx][ny] === 1) {
          distance[nx][ny] = distance[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  bfs(0, 0);

  console.log(distance[n - 1][m - 1]);
  return distance[n - 1][m - 1];
}

solution(5, 6, graph);
