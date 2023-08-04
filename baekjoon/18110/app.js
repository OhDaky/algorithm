const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
if (n === 0) {
  console.log(0);
  process.exit(0);
}
input = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

const removed = Math.round(n * 0.15);
const sliced = input.slice(removed, n - removed);
const average = sliced.reduce((acc, cur) => acc + cur, 0) / sliced.length;
console.log(Math.round(average));
