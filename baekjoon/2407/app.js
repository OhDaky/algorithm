const fs = require("fs");
const filePath = __dirname + "/input.txt";
let [n, m] = fs.readFileSync(filePath).toString().split(" ").map(Number);

let numerator = BigInt(1); // 분자
let denominator = BigInt(1); // 분모

for (let i = 0; i < m; i++) {
  numerator *= BigInt(n - i);
  denominator *= BigInt(i + 1);
}

const result = numerator / denominator;
console.log(result.toString());
