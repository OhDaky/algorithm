function solution(N, obj) {
  let map = Array.from(Array(N), () => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      map[i][j] += obj[i] && obj[i][j] ? obj[i][j] : 0;
    }
  }

  // res[i][j] = max(map[i-1][j], map[i-1][j-1])
  for (let i = 1; i < N; i++) {
    for (let j = 0; j < N; j++) {
      map[i][j] +=
        j !== 0 ? Math.max(map[i - 1][j], map[i - 1][j - 1]) : map[i - 1][0];
    }
  }

  return Math.max(...map[map.length - 1]);
}

console.log(
  solution(5, {
    0: [7],
    1: [3, 8],
    2: [8, 1, 0],
    3: [2, 7, 4, 4],
    4: [4, 5, 2, 6, 5],
  })
);
