function solution(input) {
  let answer = 8;
  let xpos = input.split("")[0];
  let ypos = input.split("")[1];

  if (xpos.charCodeAt() < 99 || xpos.charCodeAt() > "f".charCodeAt()) {
    answer -= 2;
  }
  if (ypos < 3 || ypos > 6) {
    answer -= 2;
  }
  if (xpos.charCodeAt() < 99 && (ypos < 3 || ypos > 6)) {
    answer -= 2;
  }
  if (xpos.charCodeAt() > "f".charCodeAt() && (ypos < 3 || ypos > 6)) {
    answer -= 2;
  }
  return answer;
}

// 17:21 ~ 17:37

/* 풀이 

이동경로 배열 steps = [(-2, 1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)]
8가지 경우.
현 위치에 더하고 (1, 1) ~ (8, 8) 위치 안에 존재하는 경우만 더하기

*/

function solutionEx(input) {
  const steps = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];
  let result = 0;
  const row = input.split("")[0].charCodeAt() - "a".charCodeAt() + 1;
  const column = Number(input.split("")[1]);

  for (let step of steps) {
    let next_row = row + step[0];
    let next_col = column + step[1];

    if (next_row >= 1 && next_row <= 8 && next_col >= 1 && next_col <= 8)
      result++;
  }

  return result;
}
