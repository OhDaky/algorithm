const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const numCards = input[1].split(" ").map(Number);
const M = Number(input[2]);
const targets = input[3].split(" ").map(Number);

const cardMap = new Map();
numCards.forEach((card) => {
  if (cardMap.has(card)) {
    cardMap.set(card, cardMap.get(card) + 1);
  } else {
    cardMap.set(card, 1);
  }
});

let result = "";
targets.forEach((target) => {
  if (cardMap.has(target)) {
    result += `${cardMap.get(target)} `;
  } else {
    result += "0 ";
  }
});

console.log(result.trim());
