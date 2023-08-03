const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];
const arr = input.slice(1);
let res = [];
let answer = [];

arr.forEach((el) => {
  if (el.includes("push")) {
    res.push(+el.split(" ")[1]);
  } else if (el === "pop") {
    if (res.length !== 0) {
      let pop = res[0];
      res = res.slice(1);
      answer.push(pop);
    } else {
      answer.push(-1);
    }
  } else if (el === "size") {
    answer.push(res.length);
  } else if (el === "empty") {
    answer.push(res.length === 0 ? 1 : 0);
  } else if (el === "front") {
    answer.push(res.length ? res[0] : -1);
  } else if (el === "back") {
    answer.push(res.length ? res[res.length - 1] : -1);
  }
});

console.log(answer.join("\n"));
