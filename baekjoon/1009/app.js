// baekjoon 1009 분산처리

const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/kakao_ent_1/private/algorithm/baekjoon/input/1009.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const len = input[0];
  for (let i = 1; i <= len; i++) {
    let a = Number(input[i].split(" ")[0]);
    let b = Number(input[i].split(" ")[1]);
    if (a > 10) a = a % 10;
    let arr = [a, (a * a) % 10, (a * a * a) % 10, (a * a * a * a) % 10];
    if (a === 10 || a === 0) arr = [10, 10, 10, 10];
    const index = b % 4 >= 1 ? (b % 4) - 1 : 3;
    console.log(arr[index]);
  }
}

solution(input);

// 3^7 => 3 9 7 1 3 9 7
// 6^2 => 6 6
// 7^100 => 7 9 3 1 7
// 9^635 => 9 1 9
// 2 => 2 4 8 6 2
// 4 => 4 6 4
// 5 => 5 5
// 8 => 8 4 2 6
// 10 => 0 0
