const fs = require("fs");
const filePath = __dirname + "/input_1157.txt";
//   process.platform === linux? "/dev/stdin"
let input = fs.readFileSync(filePath).toString().split()[0];
input = input.toUpperCase();
let count = {};
for (let i = 0; i < input.length; i++) {
  count[input[i]] = (count[input[i]] || 0) + 1;
}

let entries = Object.entries(count);
entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

if (entries.length > 1 && entries[0][1] === entries[1][1]) {
  console.log("?");
} else {
  console.log(entries[0][0]);
}
