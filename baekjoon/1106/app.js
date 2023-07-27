const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin";
const input = fs.readFileSync(filePath).toString().split("\n");
const [C, N] = input[0].split(" ").map(Number);
const arr = input.slice(1, N + 1).map((el) => el.split(" ").map(Number));
const dp = Array(C + 101).fill(Infinity);
dp[0] = 0;

for (let i = 0; i < N; i++) {
  for (let j = arr[i][1]; j <= C + 100; j++) {
    dp[j] = Math.min(dp[j], dp[j - arr[i][1]] + arr[i][0]);
  }
}

console.log(Math.min(...dp.slice(C)));
