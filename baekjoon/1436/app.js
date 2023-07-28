const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim();
let N = Number(input);
let movie = 666;

while (N) {
  if (String(movie).includes("666")) {
    N--;
  }
  movie++;
}

console.log(movie - 1);
