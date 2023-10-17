const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const [N, M] = fs.readFileSync(filePath).toString().split(" ").map(Number);

const visited = Array(N + 1).fill(false);
const output = [];

function dfs(count) {
  if (count === M) {
    console.log(output.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      output.push(i);
      dfs(count + 1);
      visited[i] = false;
      output.pop();
    }
  }
}

dfs(0);
