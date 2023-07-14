const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/odagyeong/Desktop/algorithm/baekjoon/1068/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const len = Number(input[0]);
const idx = Number(input[2]);
input = input[1].split(" ").map((el) => Number(el));

function deleteLeaf(idx) {
  if (!tree[idx].length) leaf--;
  else tree[idx].forEach((el) => deleteLeaf(el));
}

const tree = Array.from({ length: len }, () => []);
input.forEach((parent, child) => parent !== -1 && tree[parent].push(child));
input.forEach((parent, child) => console.log(parent, child)); // parent : 값, child : index
let leaf = tree.reduce((x, y) => (y.length ? x : ++x), 0);
if (input[idx] !== -1 && tree[input[idx]].length === 1) leaf++;
deleteLeaf(idx);
console.log(leaf);
