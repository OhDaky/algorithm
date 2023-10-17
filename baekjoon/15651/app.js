const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const [n, m] = fs.readFileSync(filePath).toString().split(" ").map(Number);
const res = [];
const output = [];

function backtrack(depth) {
  if (depth === m) {
    output.push(res.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    res.push(i);
    backtrack(depth + 1);
    res.pop();
  }
}

backtrack(0, 1);
console.log(output.join("\n"));
