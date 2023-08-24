const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input.slice(0, 2).map(Number);
const broken = input[2].split(" ").map(Number);

function canPress(num) {
  if (num === 0) {
    return !broken.includes(0);
  }

  const strNum = String(num);
  for (let i = 0; i < strNum.length; i++) {
    if (broken.includes(Number(strNum[i]))) {
      return false;
    }
  }
  return true;
}

function findChannel(N) {
  let minPress = Math.abs(N - 100);

  for (let i = 0; i <= 1000000; i++) {
    if (canPress(i)) {
      const press = String(i).length + Math.abs(N - i);
      minPress = Math.min(minPress, press);
    }
  }

  return minPress;
}

console.log(findChannel(N));
