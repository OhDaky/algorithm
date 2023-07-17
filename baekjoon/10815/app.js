const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
const cards = new Set(input[1].split(" ").map(Number));
const M = +input[2];
const checks = input[3].split(" ").map(Number);
const res = [];

for (let i = 0; i < M; i++) {
  if (cards.has(checks[i])) {
    res.push(1);
  } else {
    res.push(0);
  }
}

console.log(res.join(" "));
