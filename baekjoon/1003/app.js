const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input[0];

const zeroCount = [1, 0];
const oneCount = [0, 1];

for (let i = 2; i <= 40; i++) {
  zeroCount[i] = zeroCount[i - 1] + zeroCount[i - 2];
  oneCount[i] = oneCount[i - 1] + oneCount[i - 2];
}

for (let i = 1; i <= T; i++) {
  const n = input[i];
  console.log(`${zeroCount[n]} ${oneCount[n]}`);
}
