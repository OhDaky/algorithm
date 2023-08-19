const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0], 10);
let index = 1;

for (let t = 0; t < T; t++) {
  const func = input[index++];
  const n = parseInt(input[index++], 10);
  const arr = input[index++]
    .slice(1, -1)
    .split(",")
    .filter((v) => v)
    .map(Number); // filter로 빈 문자열 제거
  let isReversed = false;
  let isError = false;

  for (const f of func) {
    if (f === "R") {
      isReversed = !isReversed;
    } else {
      if (arr.length === 0) {
        isError = true;
        break;
      }
      if (isReversed) {
        arr.pop();
      } else {
        arr.shift();
      }
    }
  }

  if (isError) {
    console.log("error");
  } else {
    if (isReversed) arr.reverse();
    console.log(`[${arr.join(",")}]`);
  }
}
