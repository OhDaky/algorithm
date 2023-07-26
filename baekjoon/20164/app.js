const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim();
function countOdd(numStr) {
  return numStr.split("").reduce((acc, val) => acc + (parseInt(val) % 2), 0);
}

function solve(numStr) {
  const len = numStr.length;
  const oddCount = countOdd(numStr);

  if (len === 1) {
    return [oddCount, oddCount];
  }

  if (len === 2) {
    const nextNumStr = (parseInt(numStr[0]) + parseInt(numStr[1])).toString();
    const [min, max] = solve(nextNumStr);
    return [min + oddCount, max + oddCount];
  }

  let min = Infinity,
    max = -Infinity;

  for (let i = 1; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const nextNumStr = (
        parseInt(numStr.substring(0, i)) +
        parseInt(numStr.substring(i, j)) +
        parseInt(numStr.substring(j))
      ).toString();
      const [curMin, curMax] = solve(nextNumStr);
      min = Math.min(min, curMin);
      max = Math.max(max, curMax);
    }
  }

  return [min + oddCount, max + oddCount];
}

const [min, max] = solve(input);
console.log(min, max);
