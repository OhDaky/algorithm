const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim();
const [N, K] = input.split(" ").map(Number);
let num = 1;
let count = 1;
const answer = [];
const queue = Array.from({ length: N }, (el) => num++);
while (queue.length) {
  const shiftItem = queue.shift();
  if (count % K === 0) {
    answer.push(shiftItem);
  } else queue.push(shiftItem);
  count++;
}

console.log(`<${answer.join(", ")}>`);
