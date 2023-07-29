const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];
const arr = input.slice(1).map((el) => el.split(" "));
let res = [];
arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});
res = arr.map((el) => {
  return `${el[0]} ${el[1]}`;
});

console.log(res.join("\n"));
