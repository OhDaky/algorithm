const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split("\n");
const [K, N] = input[0].split(" ").map(Number);
const lines = input.slice(1).map(Number);
const sum = lines.reduce((acc, cur) => acc + cur, 0);
let min = 1;
let max = Math.floor(sum / N);

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let count = 0;
  for (let i = 0; i < K; i++) {
    count += Math.floor(lines[i] / mid);
  }

  if (count >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
