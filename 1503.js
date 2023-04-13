function solution(n, c, arr) {
  let res = 0;
  arr.sort((a, b) => a - b);
  let start = arr[1] - arr[0];
  let end = arr[arr.length - 1] - arr[0];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let value = arr[0];
    let cnt = 1;

    for (let i = 1; i < n; i++) {
      if (arr[i] >= value + mid) {
        value = arr[i];
        cnt++;
      }
    }
    if (cnt >= c) {
      start = mid + 1;
      res = mid;
    } else end = mid - 1;
  }

  return res;
}

console.log(solution(5, 3, [1, 2, 8, 4, 9])); // 3
// 10만 -> logN -> binary search
