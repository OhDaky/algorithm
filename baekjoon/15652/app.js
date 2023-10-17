const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const [n, m] = fs.readFileSync(filePath).toString().split(" ").map(Number);

const res = [];
const output = [];

function backtrack(depth, start) {
  if (depth === m) {
    output.push(res.join(" "));
    return;
  }

  for (let i = start; i <= n; i++) {
    if (res[res.length - 1] <= i || res.length === 0) {
      res.push(i);
      backtrack(depth + 1, start);
      res.pop();
    }
  }
}

backtrack(0, 1);
console.log(output.join("\n"));
