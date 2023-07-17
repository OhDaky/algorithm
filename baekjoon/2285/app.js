const fs = require("fs");
const filePath = __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const len = input[0];
const villages = [];
let totalPeople = 0;

for (let i = 1; i <= len; i++) {
  const [pos, cnt] = input[i].split(" ").map(Number);
  villages.push({ pos, cnt });
  totalPeople += cnt;
}

villages.sort((a, b) => a.pos - b.pos);

let prefixSum = 0;
let optimalPos = 0;
let minDistance = Infinity;

for (let i = 0; i < len; i++) {
  const currentPos = villages[i].pos;
  const currentPeople = villages[i].cnt;
  const remainingPeople = totalPeople - prefixSum - currentPeople;
  const distance = Math.abs(remainingPeople - prefixSum);

  if (distance < minDistance) {
    minDistance = distance;
    optimalPos = currentPos;
  }

  prefixSum += currentPeople;
}

console.log(optimalPos);
