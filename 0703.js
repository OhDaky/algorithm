function solution(N, M, lines) {
  const len = lines
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);
  let max = len[len.length - 1];
  let min = len[0];

  return max;
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
