// baekjoon 1032 명령 프롬프트

const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/kakao_ent_1/private/algorithm/baekjoon/1032/input2.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

const inputFileName = [];

for (let i = 1; i <= parseInt(input[0]); i++) {
  inputFileName.push(input[i]);
}

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr[0].length; i++) {
    let temp = arr[0][i];
    let num = 0;
    for (let j = 0; j < arr.length; j++) {
      if (temp !== arr[j][i]) {
        answer.push("?");
        break;
      } else {
        num++;
      }
      if (num === arr.length) answer.push(temp);
    }
  }
  console.log(answer.join(""));
}

solution(inputFileName);
