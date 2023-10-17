const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let sum = 0;
let res = 0;

function backtrack(i, sum) {
  // 고를 인덱스와 현재 합
  if (i === n) return;

  sum += arr[i];
  if (sum === s) res++;

  backtrack(i + 1, sum);
  backtrack(i + 1, sum - arr[i]);
}

backtrack(0, 0);

console.log(res);
