const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const T = +input[0];
const vps = input.slice(1);
const res = [];

for (let i = 0; i < T; i++) {
  let arr = [];
  let item = vps[i];
  for (let j = 0; j < item.length; j++) {
    if (item[j] === "(") arr.push(item[j]);
    else {
      if (arr[arr.length - 1] === "(") {
        arr.pop();
        if (arr.length === 0 && j == item.length - 1) res.push("YES");
      } else {
        res.push("NO");
        j = item.length;
      }
    }
  }
  if (arr.length !== 0) res.push("NO");
}

console.log(res.join("\n"));
