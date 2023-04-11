function solution(n, arr) {
  let res = 0;
  arr.sort((a, b) => b - a);

  return arr[Math.floor(arr.length / 2)];
}

const n = 4;
const arr = [5, 1, 7, 9];

console.log(solution(n, arr));
