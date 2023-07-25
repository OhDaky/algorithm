const fs = require("fs");
const filePath = __dirname + "/input2.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M, R] = input[0].split(" ").map(Number);
const map = input.slice(1).map((el) => el.split(" ").map(Number));

let rotatedMatrix = rotateMatrix(map, N, M, R);
let res = "";
for (let i = 0; i < N; i++) {
  res += rotatedMatrix[i][0];
  for (let j = 1; j < M; j++) {
    res += " " + rotatedMatrix[i][j];
  }
  res += "\n";
}

console.log(res);

function rotateMatrix(matrix, n, m, r) {
  const cycles = Math.min(n, m) / 2;

  for (let cycle = 0; cycle < cycles; cycle++) {
    let queue = [];
    let i = cycle,
      j = cycle;

    // Top row
    for (j = cycle; j < m - cycle; j++) queue.push(matrix[i][j]);

    // Right column
    for (i = cycle + 1, j--; i < n - cycle; i++) queue.push(matrix[i][j]);

    // Bottom row
    for (i--, j = m - cycle - 2; j >= cycle; j--) queue.push(matrix[i][j]);

    // Left column
    for (i = n - cycle - 2, j++; i > cycle; i--) queue.push(matrix[i][j]);

    const rotateCnt = r % queue.length;
    for (let _ = 0; _ < rotateCnt; _++) queue.push(queue.shift());

    // Put values back to matrix
    (i = cycle), (j = cycle);

    // Top row
    for (j = cycle; j < m - cycle; j++) matrix[i][j] = queue.shift();

    // Right column
    for (i = cycle + 1, j--; i < n - cycle; i++) matrix[i][j] = queue.shift();

    // Bottom row
    for (i--, j = m - cycle - 2; j >= cycle; j--) matrix[i][j] = queue.shift();

    // Left column
    for (i = n - cycle - 2, j++; i > cycle; i--) matrix[i][j] = queue.shift();
  }

  return matrix;
}
