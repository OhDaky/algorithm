const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const s = input[1].split(" ").map(Number);
const dp = Array(n).fill(0);
dp[0] = s[0] % 2 ? 1 : 0;
let max = 0;

// 초기화
for (let i = 1; i < n; i++) {
  if (s[i] % 2 === 0) {
    dp[i] = 1;
    if (s[i - 1] % 2 === 0) {
      dp[i] = dp[i - 1] + 1;
    }
  }
}

max = Math.max(...dp);

let start = 0,
  end = 0,
  oddCount = 0;
if (s[0] % 2 !== 0) oddCount = 1;

while (end < n && start <= end) {
  if (oddCount <= k) {
    let sum = 0;
    for (let i = start; i <= end; i++) sum += dp[i];
    max = Math.max(max, sum);
    end++;
    if (end < n && s[end] % 2 !== 0) oddCount++;
  } else {
    if (s[start] % 2 !== 0) oddCount--;
    start++;
  }
}

console.log(max);
