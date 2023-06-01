function solution(n, computers) {
  let count = 0;
  const visited = new Array(n).fill(0);

  const dfs = (node) => {
    visited[node] = 1;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) dfs(i);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  console.log(count);
  return count;
}

solution(3, [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]);

solution(3, [
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
