// baekjoon 1037 약수

const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/kakao_ent_1/private/algorithm/baekjoon/1037/input3.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  let res = 0;
  const arr = input[1].split(" ").sort((a, b) => parseInt(a) - parseInt(b));
  const min = arr[0];
  const max = arr[arr.length - 1];
  input[0] === 1 ? (res = min * min) : (res = min * max);
  console.log(res);
}

solution(input);
