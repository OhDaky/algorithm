const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const n = +input[0];
const map = input.slice(1, n + 1).map((el) => el.split(""));
const afterMap = input.slice(n + 1).map((el) => el.split(""));
let output = Array.from({ length: n }, () => []);
let open = false;
// x인 칸의 숫자 채우기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (afterMap[i][j] === "x") {
      output[i][j] = countBomb(i, j, map);
      if (map[i][j] === "*") open = true;
    } else {
      output[i][j] = ".";
    }
  }
}

if (open) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] === "*") output[i][j] = "*";
    }
  }
}

for (let i = 0; i < n; i++) {
  output[i] = output[i].join("");
}

console.log(output.join("\n"));

function countBomb(x, y, map) {
  let cnt = 0;
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < map.length &&
      ny < map[0].length &&
      map[nx][ny] === "*"
    ) {
      cnt++;
    }
  }

  return cnt;
}
