const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = +fs.readFileSync(filePath).toString().trim();

function fibonacci(n) {
  if (n === 1 || n === 0) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(input));
