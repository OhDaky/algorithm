const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const n = +input[0];
const arr = input.slice(1).map((el) => el.split(" ").map(Number));

let dp = Array.from({ length: n }, () => Array(n).fill(0));
dp[0][0] = arr[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j] + arr[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + arr[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + arr[i][j];
    }
  }
}

console.log(Math.max(...dp[n - 1]));
