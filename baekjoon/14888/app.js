const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const operators = input[2].split(" ").map(Number);
let [max, min] = [-Infinity, Infinity];

const calc = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b),
];

function dfs(counts, sum) {
  if (counts === N - 1) {
    max = Math.max(max, sum);
    min = Math.min(min, sum);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (operators[i] <= 0) continue;

    operators[i]--;
    dfs(counts + 1, calc[i](sum, arr[counts + 1]));
    operators[i]++;
  }
}

dfs(0, arr[0]);

console.log(max);
console.log(min);
