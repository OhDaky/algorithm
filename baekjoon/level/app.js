const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = input.slice(1).sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  else {
    return a < b ? -1 : 1;
  }
});
arr = arr.filter((el, idx) => arr.indexOf(el) === idx);

console.log(arr.join("\n"));
