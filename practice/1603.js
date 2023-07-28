function solution(N, obj) {
  let t = []; // 시간
  let p = []; // 금액
  let dp = new Array(N + 1).fill(0);
  let max = 0;
  // 점화식
  // dp[i] = max(p[i]+dp[t[i]+i], max_value)
  for (let i = 0; i < N; i++) {
    t.push(obj[i][0]);
    p.push(obj[i][1]);
  }

  for (let i = N - 1; i >= 0; i--) {
    let time = t[i] + i;

    if (time <= N) {
      dp[i] = Math.max(p[i] + dp[t[i] + i], max);
      max = dp[i];
    } else dp[i] = max;
  }
  // console.log(dp);

  return max;
}

console.log(
  solution(7, [
    [3, 10],
    [5, 20],
    [1, 10],
    [1, 20],
    [2, 15],
    [4, 40],
    [2, 200],
  ])
);
console.log(
  solution(10, [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    [1, 10],
  ])
);
console.log(
  solution(10, [
    [5, 10],
    [5, 9],
    [5, 8],
    [5, 7],
    [5, 6],
    [5, 10],
    [5, 9],
    [5, 8],
    [5, 7],
    [5, 6],
  ])
);

// 뒤부터 접근하기
