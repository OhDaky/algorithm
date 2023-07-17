const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const S = fs.readFileSync(filePath).toString();
let sum = 0,
  cnt = 0;

for (let i = 1; i <= S; i++) {
  sum += i;
  cnt++;
  if (sum > S) {
    cnt--;
    i = S;
  }
}

console.log(cnt);
