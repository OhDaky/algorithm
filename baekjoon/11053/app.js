const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array.from({ length: N }, () => 0);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && dp[j] > dp[i]) {
      dp[i] = dp[j];
    }
  }
  dp[i]++;
}

console.log(Math.max(...dp));
