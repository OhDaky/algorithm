const fs = require("fs");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "/Users/odagyeong/Desktop/algorithm/baekjoon/11725/input.txt";

let input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const len = input[0];
  input = input.slice(1);
  let answer = [];
  const graph = [];

  for (let i = 1; i <= len; i++) {
    graph[i] = [];
  }

  input.forEach((edge) => {
    const [from, to] = edge.split(" ");
    graph[from].push(to);
    graph[to].push(from);
  });

  const bfs = (start) => {
    const visited = new Array(len);
    visited[start] = true;

    const queue = [start];

    while (queue.length) {
      const cur = queue.shift();
      for (let i = 0; i < graph[cur].length; i++) {
        const next = graph[cur][i];

        if (!visited[next]) {
          visited[next] = true;
          answer[next] = cur;
          queue.push(next);
        }
      }
    }
  };

  bfs(1);
  let res = "";
  answer.forEach((ans) => (res += ans + "\n"));
  console.log(res);
}

solution(input);
