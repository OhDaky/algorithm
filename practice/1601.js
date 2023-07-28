function solution(arr) {
  let res = [];
  let row = arr[0],
    column = arr[1];
  let map = [];
  for (let i = 0; i < row; i++) {
    map.push(arr[2].slice(column * i, column * (i + 1)));
  }
  for (let i = 1; i < column; i++) {
    for (let j = 0; j < row; j++) {
      let max = 0;
      if (j === 0) {
        max = Math.max(map[0][i - 1], map[1][i - 1]);
      } else if (j === row - 1) {
        max = Math.max(map[j][i - 1], map[j - 1][i - 1]);
      } else {
        max = Math.max(map[j][i - 1], map[j - 1][i - 1], map[j + 1][i - 1]);
      }
      map[j][i] += max;
    }
  }
  for (let i = 0; i < map.length; i++) {
    res.push(map[i][map[0].length - 1]);
  }
  return Math.max(...res);
}
const testArr = [3, 4, [1, 3, 3, 2, 2, 1, 4, 1, 0, 6, 4, 7]];
const testArr2 = [4, 4, [1, 3, 1, 5, 2, 2, 4, 1, 5, 0, 2, 3, 0, 6, 1, 2]];

console.log(solution(testArr)); // 19
console.log(solution(testArr2)); // 16

// 점화식
// dp[i][j] = arr[i][j] + Math.max(dp[i-1][j-1], dp[i][j-1], dp[i+1][j-1])
