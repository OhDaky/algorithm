const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/odagyeong/Desktop/algorithm/baekjoon/3584/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let res = "";
const cases = input[0];
const test = Array.from({ length: cases }, () => []);
input = input.slice(1);
for (let i = 0; i < cases; i++) {
  let len = Number(input[0]);
  const tc = input.slice(0, len + 1);
  input = input.slice(len + 1);
  test[i].push(...tc);
}

test.forEach((el, idx) => {
  const len = Number(el[0]);
  const tree = Array.from({ length: len + 1 }, () => []);
  const [child1, child2] = el[len].split(" ").map(Number);
  el.forEach((val, index) => {
    index !== 0 && index !== len
      ? tree[val.split(" ").map(Number)[0]].push(val.split(" ").map(Number)[1])
      : null;
  });
  let p1 = [child1];
  let p2 = [child2];
  findAncestor(child1, tree, p1);
  findAncestor(child2, tree, p2);

  console.log(p1.filter((el) => p2.includes(el))[0]);
});

function findAncestor(child, tree, parents) {
  tree.forEach((el, idx) => {
    if (el.includes(child)) {
      parents.push(idx);
      findAncestor(idx, tree, parents);
    }
  });
}

/**
 * tree
 * idx 부모 [] 배열 안에 자식
 */
