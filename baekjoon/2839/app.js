const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = +fs.readFileSync(filePath).toString().trim();
let big = Math.floor(input / 5);
let small = (input - 5 * big) / 3;
while (1) {
  if (big === 0 && small % 1 !== 0) {
    small = -1;
  }
  if (small % 1 !== 0) {
    big--;
    small = (input - 5 * big) / 3;
  } else {
    break;
  }
}

console.log(big + small);
