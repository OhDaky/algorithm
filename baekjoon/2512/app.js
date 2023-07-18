const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split("\n");
const len = +input[0];
const request = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const limit = +input[2];
let rest = limit;
let sum = request.reduce((acc, cur) => acc + cur, 0);

if (sum <= limit) {
  console.log(request[len - 1]);
} else {
  let max = request[len - 1];
  let min = 1;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const rest = request.reduce(
      (acc, cur) => acc + (cur <= mid ? cur : mid),
      0
    );
    if (rest <= limit) min = mid + 1;
    else max = mid - 1;
  }

  console.log(max);
}
