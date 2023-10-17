const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = Number(fs.readFileSync(filePath).toString());

const dp = Array(input + 1).fill(0);
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[input]);
