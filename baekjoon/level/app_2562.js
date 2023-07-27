const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);
const max = Math.max(...input);
console.log(max);
console.log(input.findIndex((val) => val === max) + 1);
