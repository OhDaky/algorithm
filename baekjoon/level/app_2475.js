const fs = require("fs");
const filePath = __dirname + "/input_2475.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);
let sum = 0;
for (let i = 0; i < input.length; i++) {
  sum += Math.pow(input[i], 2);
}

console.log(sum % 10);
