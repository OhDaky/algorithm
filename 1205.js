function solution(n, k, karr, l, larr) {
  let result = 0;
  let map = Array.from(Array(n), () => new Array(n).fill(0));
  let cur = [0, 0]; // 뱀의 현 위치
  let tail = [0, 0];
  let len = 1;

  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; //우 하 좌 상

  // 사과 채우기
  for (let i = 0; i < k; i++) {
    let x = karr[i][0] - 1,
      y = karr[i][1] - 1;
    map[x][y] = 1;
  }

  let add = dir[0];

  // 이동하기
  while (true) {
    if (len === 1) {
      tail[0] = cur[0] + add[0];
      tail[1] = cur[1] + add[1];
    } else {
      tail[0] = cur[0];
      tail[1] = cur[1];
    }

    // 방향 바꾸기
    for (let i = 0; i < l; i++)
      if (result === larr[i][0]) {
        if (larr[i][1] === "L") {
          if (add === dir[0]) add = dir[3];
          else if (add === dir[1]) add = dir[0];
          else if (add === dir[2]) add = dir[1];
          else if (add === dir[3]) add = dir[2];
        } else if (larr[i][1] === "D") {
          if (add === dir[0]) add = dir[1];
          else if (add === dir[1]) add = dir[2];
          else if (add === dir[2]) add = dir[3];
          else add = dir[0];
        }
      }

    cur[0] += add[0];
    cur[1] += add[1];

    if (cur[0] >= n || cur[0] < 0 || cur[1] >= n || cur[1] < 0) break;
    if (len !== 1 && cur === tail) break;

    result++;
    console.log(cur);

    if (map[cur[0]][cur[1]] === 1) {
      len++;
      map[cur[0]][cur[1]] = 0;
    }
  }

  console.log(result + 1);
  return result + 1;
}

const karr1 = [
  [3, 4],
  [2, 5],
  [5, 3],
];
const larr1 = [
  [3, "D"],
  [15, "L"],
  [17, "D"],
];

const karr2 = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
];
const larr2 = [
  [8, "D"],
  [10, "D"],
  [11, "D"],
  [13, "L"],
];
const karr3 = [
  [1, 5],
  [1, 3],
  [1, 2],
  [1, 6],
  [1, 7],
];
const larr3 = [
  [8, "D"],
  [10, "D"],
  [11, "D"],
  [13, "L"],
];

// solution(6, 3, karr1, 3, larr1);
// solution(10, 4, karr2, 4, larr2);
solution(10, 5, karr3, 4, larr3);
/**
 * 몸길이 늘려 머리를 다음칸에 위치
 * 사과 o - 사과 지우기, 꼬리 멈춤
 * 사과 x - 몸길이 줄여 꼬리 칸 비우기
 */

// 꼬리랑 머리랑 닿을 때 처리
