const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let max = -Infinity;
const dp = [arr[0]];

// 다음거 더한게 이번거보다 크면 더하기
// 다음거 더한게 이번거보다 작으면 그대로

for (let i = 1; i < n; i++) {
  dp[i] = arr[i] > arr[i] + dp[i - 1] ? arr[i] : arr[i] + dp[i - 1];
}

console.log(Math.max(...dp));
