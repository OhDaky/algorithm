function solution(input) {
  let dp = new Array(input + 1).fill(0);

  for (let i = 2; i <= input + 1; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    else if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    else if (i % 5 === 0) dp[i] = Math.min(dp[i], dp[i / 5] + 1);
  }
  console.log(dp[input]);
  return dp[input];
}

solution(14);
solution(26);
solution(74);
