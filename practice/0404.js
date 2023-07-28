function solution(size, pos, map) {
  let res = "";
  const row = size.split(" ")[0];
  const column = size.split(" ")[1];

  let cur_row = pos.split(" ")[0];
  let cur_col = pos.split(" ")[1];
  let direction = pos.split(" ")[2];

  const move = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  //  direction - 1

  let visited = Array.from(Array(row), () => Array(column).fill(-1));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (map[i][j] === 1) visited[i][j] = 1;
    }
  }

  return res;
}

// 18:09 - 18:30
