const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function sumCases(n) {
  if (n === 1 || n === 2) return n;
  else if (n === 3) return 4;
  else return sumCases(n - 1) + sumCases(n - 2) + sumCases(n - 3);
}

for (let i = 1; i < input.length; i++) {
  console.log(sumCases(Number(input[i])));
}
