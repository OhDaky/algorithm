const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
let input = fs.readFileSync(filePath).toString().split("\n");
let t = Number(input[0]);
let dp = [];
let sticker = [];

for (let i = 0; i < t; i++) {
  dp[i] = [];
  sticker[i] = [];
  let n = Number(input[i * 3 + 1]);
  sticker[i][0] = [0].concat(input[i * 3 + 2].split(" ").map(Number));
  sticker[i][1] = [0].concat(input[i * 3 + 3].split(" ").map(Number));

  dp[i][0] = Array(n + 1).fill(0);
  dp[i][1] = Array(n + 1).fill(0);
  dp[i][2] = Array(n + 1).fill(0);

  for (let j = 1; j <= n; j++) {
    dp[i][0][j] = Math.max(dp[i][0][j - 1], dp[i][1][j - 1], dp[i][2][j - 1]);
    dp[i][1][j] = Math.max(dp[i][0][j - 1], dp[i][2][j - 1]) + sticker[i][0][j];
    dp[i][2][j] = Math.max(dp[i][0][j - 1], dp[i][1][j - 1]) + sticker[i][1][j];
  }

  console.log(Math.max(dp[i][0][n], dp[i][1][n], dp[i][2][n]));
}
