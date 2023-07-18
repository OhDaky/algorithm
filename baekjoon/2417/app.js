const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split().map(Number);
const n = BigInt(input);
const res = integerSquareRoot(n);
console.log(res.toString());

function integerSquareRoot(n) {
  if (n === 0n) {
    return 0n;
  }

  let low = 0n;
  let high = n;

  while (low < high) {
    const mid = (low + high) / 2n;

    if (mid * mid >= n) {
      high = mid;
    } else {
      low = mid + 1n;
    }
  }

  return low;
}
