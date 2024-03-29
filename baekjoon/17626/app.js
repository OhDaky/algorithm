const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = Number(fs.readFileSync(filePath).toString());
const dp = Array(input + 1).fill(0);
dp[1] = 1;

for (let i = 2; i < input + 1; i++) {
  let min = 4;
  for (let j = 1; j * j <= i; j++) {
    min = Math.min(min, dp[i - j * j]);
  }
  dp[i] = min + 1;
}

console.log(dp[input]);
