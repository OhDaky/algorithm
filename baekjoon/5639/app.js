const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/odagyeong/Desktop/algorithm/baekjoon/5639/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// preorder 의 결과를 보고 postorder의 결과 출력
