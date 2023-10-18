const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const n = Number(fs.readFileSync(filePath).toString());
let count = 0;
const dp = Array(n + 1).fill(0);
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= n; i++) {
  const candidate = [];
  if (i % 3 === 0) {
    candidate.push(dp[i / 3] + 1);
  }
  if (i % 2 === 0) {
    candidate.push(dp[i / 2] + 1);
  }
  candidate.push(dp[i - 1] + 1);
  // console.log(candidate);
  dp[i] = Math.min(...candidate);
}

console.log(dp[n]);
