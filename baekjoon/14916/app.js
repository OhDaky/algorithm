const fs = require("fs");
const filePath = "/Users/odagyeong/Desktop/algorithm/baekjoon/14916/input.txt";
//   process.platform === linux? /dev/stdin
let input = fs.readFileSync(filePath).toString().split();

if (input < 2) console.log(-1);
else {
  let cnt2 = 0;
  let cnt5 = Math.floor(input / 5);

  while (cnt5 >= 0) {
    if ((input - cnt5 * 5) % 2 === 0) {
      cnt2 = (input - cnt5 * 5) / 2;
      console.log(cnt2 + cnt5);
      break;
    }
    cnt5--;
  }

  if (cnt5 < 0) {
    console.log(-1);
  }
}
