const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const res = [];

function backtrack(depth, idx) {
  if (depth === m) {
    console.log(res.join(" "));
    return;
  }

  for (let i = idx; i < n; i++) {
    if (res[res.length - 1] < arr[i] || res.length === 0) {
      res.push(arr[i]);
      backtrack(depth + 1, idx + 1);
      res.pop();
    }
  }
}

backtrack(0, 0);
