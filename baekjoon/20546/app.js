const fs = require("fs");
const filePath = __dirname + "/input1.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const stockCost = input[1].split(" ").map(Number);
const Junh = { stock: 0, cash: +input[0], sum: +input[0] };
const Sungm = { stock: 0, cash: +input[0], sum: +input[0] };
let compare = 0;

for (let i = 0; i < 14; i++) {
  Junh.stock += Math.floor(Junh.cash / stockCost[i]);
  Junh.cash -= Math.floor(Junh.cash / stockCost[i]) * stockCost[i];
  Junh.sum = stockCost[i] * Junh.stock + Junh.cash;

  if (i !== 0) {
    if (stockCost[i] > stockCost[i - 1]) {
      compare >= 0 ? compare++ : (compare = 1);
    } else if (stockCost[i] < stockCost[i - 1])
      compare <= 0 ? compare-- : (compare = -1);
  }
  if (compare >= 3) {
    Sungm.cash += Sungm.stock * stockCost[i];
    Sungm.stock = 0;
    Sungm.sum = Sungm.cash;
  } else if (compare <= -3) {
    Sungm.stock += Math.floor(Sungm.cash / stockCost[i]);
    Sungm.cash -= Math.floor(Sungm.cash / stockCost[i]) * stockCost[i];
    Sungm.sum = stockCost[i] * Sungm.stock + Sungm.cash;
  } else {
    Sungm.sum = stockCost[i] * Sungm.stock + Sungm.cash;
  }
}

console.log(Sungm, Junh);

if (Junh.sum > Sungm.sum) console.log("BNP");
else if (Junh.sum < Sungm.sum) console.log("TIMING");
else console.log("SAMESAME");
