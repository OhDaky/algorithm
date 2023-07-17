const fs = require("fs");
const filePath = "/Users/odagyeong/Desktop/algorithm/baekjoon/20115/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split("\n");
const len = input[0];
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let sum = arr.reduce((acc, cur) => acc + cur, 0) / 2 + arr[0] / 2;

console.log(sum);
