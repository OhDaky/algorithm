function solution(N) {
  const d = new Array(N + 1).fill(0);
  d[1] = 1;
  d[2] = 3;

  for (let i = 3; i <= N; i++) d[i] = d[i - 1] + d[i - 2] * 2;
  console.log(d[N]);

  return d[N];
}

solution(3);
