const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
let res = [];
for (let i = 1; i < 2 * N + 1; i += 2) {
  const arr = input[i + 1].split(" ").map(Number);
  res.push(`${Math.min(...arr)} ${Math.max(...arr)}`);
}

console.log(res.join("\n"));
