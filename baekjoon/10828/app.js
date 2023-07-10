const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/odagyeong/Desktop/algorithm/baekjoon/10828/input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const len = input[0];
  const arr = [];
  const stack = [];
  for (let i = 0; i <= len; i++) {
    if (input[i].includes("push")) {
      arr.push(input[i].split(" ")[1]);
    } else if (input[i] === "top") {
      stack.push(arr.length === 0 ? -1 : arr[arr.length - 1]);
    } else if (input[i] === "size") {
      stack.push(arr.length);
    } else if (input[i] === "empty") {
      stack.push(arr.length === 0 ? 1 : 0);
    } else if (input[i] === "pop") {
      if (arr.length === 0) stack.push(-1);
      else {
        stack.push(arr[arr.length - 1]);
        arr.splice(arr.length - 1);
      }
    }
  }
  console.log(stack.join("\n"));
}

solution(input);
