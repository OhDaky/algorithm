const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = +input[0];
const arr = input.slice(1).map((el) => el.split(" ").map(Number));
arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

console.log(arr.map((el) => `${el[0]} ${el[1]}`).join("\n"));
