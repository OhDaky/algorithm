const fs = require("fs");
const filePath = "/Users/odagyeong/Desktop/algorithm/baekjoon/11399/input.txt";
//   process.platform === linux? /dev/stdin?
const input = fs.readFileSync(filePath).toString().split("\n");
const len = input[0];
const time = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let res = 0;

time.reduce((acc, cur) => {
  let sum = cur + acc;
  res += sum;
  return sum;
}, 0);

console.log(res);
