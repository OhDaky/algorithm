const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const n = Number(fs.readFileSync(filePath).toString());

/**
 * 1 => 1
 * 2 => 2
 * 3 => 3
 * 4 => |||| ||__ |__| __|| ____ => dp[n] = dp[n-1] + dp[n-2]
 * 5 => ||||| |||__ ||__| |__|| __||| |____ __|__ ____|
 */

const dp = Array(n + 1).fill(0);
(dp[1] = 1), (dp[2] = 2);
for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);
