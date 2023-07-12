const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/odagyeong/Desktop/algorithm/baekjoon/1991/input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");
const len = input[0];
input = input.slice(1);

function solution(input) {
  const tree = {};
  for (let i = 0; i < len; i++) {
    const [node, left, right] = input[i].split(" ");
    tree[node] = [left, right];
  }

  let res = "";

  function preorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    res += node;
    preorder(lt);
    preorder(rt);
  }

  function inorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    inorder(lt);
    res += node;
    inorder(rt);
  }

  function postorder(node) {
    if (node === ".") return;
    const [lt, rt] = tree[node];
    postorder(lt);
    postorder(rt);
    res += node;
  }

  preorder("A");
  res += "\n";
  inorder("A");
  res += "\n";
  postorder("A");

  console.log(res);
}

solution(input);
