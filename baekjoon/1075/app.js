const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/kakao_ent_1/private/algorithm/baekjoon/1075/input.txt";

const N = parseInt(fs.readFileSync(filePath).toString().split("\n")[0]);
const F = parseInt(fs.readFileSync(filePath).toString().split("\n")[1]);

function solution(num1, num2) {
  let res = num2 - num1 % num2;
  if(res < 10) res = `0${res}`
  console.log(res);
}

solution(N, F);
