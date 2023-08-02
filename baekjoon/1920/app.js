const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = +input[2];
const arr = input[3].split(" ").map(Number);

const res = [];
for (let i = 0; i < M; i++) {
  let start = 0,
    end = N - 1,
    mid = Math.floor((start + end) / 2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (A[mid] === arr[i]) {
      res.push(1);
      break;
    } else if (A[mid] < arr[i]) {
      start = mid + 1;
    } else if (A[mid] > arr[i]) {
      end = mid - 1;
    }
  }
  if (A[mid] !== arr[i]) res.push(0);
}

console.log(res.join("\n"));
