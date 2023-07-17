const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split("\n");
const N = input[0].split(" ")[0];
const K = input[0].split(" ")[1];
const kids = input[1].split(" ");
const diff = [];
let cost = 0;
for (let i = 1; i < N; i++) {
  diff.push(kids[i] - kids[i - 1]);
}
diff.sort((a, b) => a - b);
for (let i = 0; i < diff.length - K + 1; i++) {
  cost += diff[i];
}
console.log(cost);
