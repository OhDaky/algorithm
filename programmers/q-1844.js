function solution(maps) {
  let mapArray = maps;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const n = mapArray.length - 1;
  const m = mapArray[0].length - 1;

  function bfs(x, y) {
    const queue = [];
    queue.push([x, y]);
    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx > n || nx < 0 || ny > m || ny < 0) continue;
        if (mapArray[nx][ny] === 0) continue;
        if (mapArray[nx][ny] === 1) {
          mapArray[nx][ny] = mapArray[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
  bfs(0, 0);
  console.log(mapArray[n][m] !== 1 ? mapArray[n][m] : -1);
  // 방문하지 못하면 -1 출력
  return mapArray[n][m] !== 1 ? mapArray[n][m] : -1;
}

const example1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
const example2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];
solution(example1);
solution(example2);
// bfs 특징 - 방문 못하는 곳 0. 마지막 위치에 방문 최소거리
