const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let [N, M] = [];

const dfs = (n, m, sequence) => {
  if (m === 0) {
    console.log(sequence.join(" "));
    return;
  }

  for (let i = n; i <= N; i++) {
    dfs(i, m - 1, [...sequence, i]);
  }
};

rl.on("line", (line) => {
  [N, M] = line.split(" ").map(Number);
}).on("close", () => {
  dfs(1, M, []);
});
