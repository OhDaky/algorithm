const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
let input = fs.readFileSync(filePath).toString().split("\n");
const cowsCount = +input[0];
input = input.slice(1);
let count = 0;
let moves = [];
input.forEach((el) => {
  if (moves.some((val) => val.cow === +el.split(" ")[0])) {
    let idx = moves.findIndex((val) => val.cow === +el.split(" ")[0]);
    moves[idx].pos.push(Number(el.split(" ")[1]));
  } else
    moves.push({
      cow: Number(el.split(" ")[0]),
      pos: [Number(el.split(" ")[1])],
    });
});

moves.forEach((el) => {
  for (let i = 1; i < el.pos.length; i++) {
    if (el.pos[i - 1] !== el.pos[i]) count++;
  }
});

console.log(count);
