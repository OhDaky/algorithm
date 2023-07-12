const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/odagyeong/Desktop/algorithm/baekjoon/9934/input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
const len = input[0];
const inorder = input[1].split(" ");

function solution() {
  const makeTree = (inorder, start, end) => {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = {
      data: inorder[mid],
      left: null,
      right: null,
    };
    root.left = makeTree(inorder, start, mid - 1);
    root.right = makeTree(inorder, mid + 1, end);

    return root;
  };
  const res = dataByDepth(makeTree(inorder, 0, 2 ** len - 2));
  const answer = res.map((arr) => arr.join(" ")).join("\n");
  console.log(answer);
}

function dataByDepth(root) {
  const output = [];
  const traverse = (node, depth) => {
    if (node === null) return;
    if (output[depth] === undefined) {
      output[depth] = [];
    }
    output[depth].push(node.data);
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  };
  traverse(root, 0);
  return output;
}

solution(input);
