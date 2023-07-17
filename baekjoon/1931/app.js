const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split("\n");
const len = input[0];
const meets = input
  .slice(1)
  .map((el) => el.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

let [cnt, cur] = [0, -1];
meets.forEach((el) => {
  if (el[0] >= cur) {
    if (el[1] !== 0) cur = el[1];
    cnt++;
  }
});
console.log(cnt);
