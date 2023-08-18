const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
let count = 0;
let user = new Set();

for (let i = 1; i <= N; i++) {
  if (input[i] === "ENTER") {
    count += user.size;
    user.clear();
  } else {
    user.add(input[i]);
  }
}
count += user.size;

console.log(count);
