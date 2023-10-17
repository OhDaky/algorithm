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
const output = [];
const visited = Array(n).fill(false);

function backtrack(depth) {
  if (depth === m) {
    output.push(res.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      res.push(arr[i]);
      backtrack(depth + 1);
      res.pop();
      visited[i] = false;
    }
  }
}

backtrack(0, 0);
console.log(output.join("\n"));
