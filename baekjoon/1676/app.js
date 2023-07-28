const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim();
let N = factorial(Number(input));
let arr = String(N).split("");
let res = 0;

function factorial(n) {
  if (n === 1 || n === 0 || n === 2) return n;
  else return factorial(n - 1) * n;
}

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === "0") res++;
  else {
    i = -1;
  }
}

console.log(res);
