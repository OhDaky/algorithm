const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const n = Number(fs.readFileSync(filePath).toString());
const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const modular = 1000000000;
let res = 0;

for (let i = 2; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][j + 1] % modular;
    else if (j === 9) dp[i][j] = dp[i - 1][j - 1] % modular;
    else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % modular;
  }
}

for (let i = 0; i < 10; i++) {
  res += dp[n][i];
}

console.log(res % modular);
