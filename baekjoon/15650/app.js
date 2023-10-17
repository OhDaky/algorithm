const fs = require("fs");
const filePath = __dirname + "/input.txt";

const [N, M] = fs
  // .readFileSync("/dev/stdin")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array(N + 1).fill(false);
const output = [];

function backtracking(depth, start) {
  if (depth === M) {
    console.log(output.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(i);
      backtracking(depth + 1, i + 1);
      output.pop();
      visited[i] = false;
    }
  }
}

backtracking(0, 1);
