const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const [H, W] = input[0].split(" ").map(Number);
const blocks = input[1].split(" ").map(Number);

let sum = 0;
let leftMax = 0,
  rightMax = 0,
  left = 0,
  right = blocks.length - 1;

while (left < right) {
  leftMax = Math.max(leftMax, blocks[left]);
  rightMax = Math.max(rightMax, blocks[right]);

  if (leftMax <= rightMax) {
    sum += leftMax - blocks[left];
    left++;
  } else {
    sum += rightMax - blocks[right];
    right--;
  }
}

console.log(sum);
