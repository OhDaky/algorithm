function solution(N, M, lines) {
  const len = lines
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);
  let end = len[len.length - 1];
  let start = 0;

  let res = 0;
  while (start <= end) {
    sum = 0;
    let mid = Math.ceil((start + end) / 2);
    for (let el of len) {
      if (el > mid) sum += el - mid;
    }
    if (sum < M) end = mid - 1;
    else {
      res = mid;
      start = mid + 1;
    }
  }

  console.log(res);
  return res;
}

function binarySearch(array, start, end, target) {
  while (start <= end) {
    mid = Math.round((start + end) / 2);
    if (array[mid] === target) return mid;
    else if (array[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return;
}

let line1 = "4 6";
let line2 = "19 15 10 17";
solution(4, 6, line2);
