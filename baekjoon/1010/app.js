const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const cases = +input[0];
let res = [];

for (let i = 1; i < cases + 1; i++) {
  let [N, M] = input[i].split(" ").map(Number);
  if (N === M) res.push(1);
  else res.push(Math.round(factorial(M) / factorial(M - N) / factorial(N)));
}

function factorial(n) {
  if (n === 1) return 1;
  else return factorial(n - 1) * n;
}

console.log(res.join("\n"));
