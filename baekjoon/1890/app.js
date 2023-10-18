const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const map = input.slice(1).map((el) => el.split(" ").map(Number));
const dp = Array.from({ length: N }, () => Array(N).fill(BigInt(0)));
dp[0][0] = 1;
// dp[i][j] = 도달할 수 있는 경우의 수
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === N - 1 && j === N - 1) break;

    const jump = map[i][j];

    if (j + jump < N) {
      dp[i][j + jump] += BigInt(dp[i][j]);
    }

    if (i + jump < N) {
      dp[i + jump][j] += BigInt(dp[i][j]);
    }
  }
}

console.log(dp[N - 1][N - 1].toString());

// 출력이 커질 수 있으므로 BigInt 로 풀고 toString()
