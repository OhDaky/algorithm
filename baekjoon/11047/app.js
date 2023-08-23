const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);
let count = 0;
let left = K;
let cur = N - 1;
while (left > 0) {
  if (left >= coins[cur]) {
    left -= coins[cur];
    count++;
  } else {
    cur--;
  }
}

console.log(count);
