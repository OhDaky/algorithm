function solution(N, M, arr) {
  const d = new Array(M + 1).fill(10001);
  d[0] = 0;

  for (let i = 1; i <= N; i++) {
    for (let j = arr[i]; j <= M; j++) {
      if (d[j - arr[i]] !== 10001) d[j] = Math.min(d[j], d[j - arr[i]] + 1);
    }
  }

  if (d[M] === 10001) console.log(-1);
  else console.log(d[M]);
}

solution(2, 15, [2, 3]);
solution(3, 4, [3, 5, 7]);

// 이해가 잘 안된다 다시 풀어보자!
