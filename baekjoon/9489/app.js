const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/odagyeong/Desktop/algorithm/baekjoon/9489/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
let depth = 0;
let res = [];

for (let i = 0; i < input.length - 1; i += 2) {
  const [n, find] = input[i].split(" ").map(Number);
  const nodes = input[i + 1].split(" ").map(Number);

  let cnt = 0;

  const tree = [];
  for (let j = 0; j < n; j++) {
    tree[j] = { node: nodes[j], child: [] };
  }

  let empty = tree[0];
  for (let j = 1; j < n; j++) {
    if (nodes[j] > nodes[j - 1] + 1) {
      empty = findEmptyNode(tree);
    }
    empty.child.push(nodes[j]);
  }

  const parent = findParent(find, tree);
  if (!parent) {
    res.push(0);
  } else {
    const fdepth = findDepth(find, tree);
    tree.forEach((el) => {
      if (
        findDepth(el.node, tree) === fdepth &&
        findParent(el.node, tree) !== parent
      ) {
        cnt++;
      }
    });
    res.push(cnt);
  }
}

console.log(res.join("\n"));

function findEmptyNode(tree) {
  for (const node of tree) {
    if (node.child.length === 0) {
      return node;
    }
  }
  return null;
}

function findDepth(val, tree, depth = 0) {
  for (const node of tree) {
    if (node.node === val) {
      return depth;
    }
    if (node.child.includes(val)) {
      depth++;
      return findDepth(node.node, tree, depth);
    }
  }
  return -1;
}

function findParent(val, tree) {
  for (const node of tree) {
    if (node.child.includes(val)) {
      return node.node;
    }
  }
  return null;
}
