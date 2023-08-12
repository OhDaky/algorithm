const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const [A, B] = fs.readFileSync(filePath).toString().split(" ").map(Number);

function dfs(A, B) {
  let cnt = 0;

  while (A !== B) {
    if (A > B) return -1;
    else if (getLastNumber(B) === 1) {
      B = removeLastOne(B);
      cnt++;
    } else if (getLastNumber(B) !== 1) {
      B /= 2;
      cnt++;
    }
  }
  return cnt + 1;
}

function getLastNumber(input) {
  return Number(
    input.toString().split("")[input.toString().split("").length - 1]
  );
}

function removeLastOne(input) {
  let arr = input.toString().split("");
  arr.pop();
  return Number(arr.join(""));
}

const answer = dfs(A, B);
console.log(answer);
