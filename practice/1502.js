function solution(N, arr) {
  let start = 0;
  let end = N - 1;

  function search(start, end) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === mid) return mid;
    else if (arr[mid] > mid) return search(start, mid - 1);
    else if (arr[mid] < mid) return search(mid + 1, end);
  }

  return search(start, end);
}

console.log(solution(5, [-15, -6, 1, 3, 7]));
console.log(solution(7, [-15, -4, 2, 8, 9, 13, 15]));
console.log(solution(7, [-15 - 4, 3, 8, 9, 13, 15]));
/**
 * 인덱스와 값이 동일
 * N 10만 ->
 *
 */
