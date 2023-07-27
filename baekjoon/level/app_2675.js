const fs = require("fs");
const filePath = __dirname + "/input_2675.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const cases = +input[0];
let res = "";
for (let i = 1; i <= cases; i++) {
  let cnt = +input[i].split(" ")[0];
  let str = input[i].split(" ")[1];
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < cnt; k++) res += str[j];
  }
  res += "\n";
}

console.log(res);
