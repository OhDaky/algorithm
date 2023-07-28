function solution(N, x, arr) {
  function first(arr, target, start, end) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (mid === 0 || (target > arr[mid - 1] && arr[mid] === target)) return mid;
    else if (arr[mid] >= target) return first(arr, target, start, mid - 1);
    else return first(arr, target, mid + 1, end);
  }

  function last(arr, target, start, end) {
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    if (mid === N - 1 || (target < arr[mid + 1] && arr[mid === target]))
      return mid;
    else if (arr[mid] > target) return last(arr, target, start, mid - 1);
    else return last(arr, target, mid + 1, end);
  }

  let a = first(arr, x, 0, N - 1);
  let b = last(arr, x, 0, N - 1);

  if (a !== -1 && b !== -1) return b - a;
  else return -1;
}

// function solution(N, x, arr) {
//   let res = 0;
//   if (!arr.includes(x)) return -1;

//   let start = 0;
//   let mid = Math.floor(N / 2);
//   let end = N - 1;

//   while (mid > start && mid < end) {
//     if (arr[mid] > x) {
//       mid = Math.floor((start + mid) / 2);
//       end = mid - 1;
//     } else if (arr[mid] < x) {
//       mid = Math.floor((mid + end) / 2);
//       start = mid + 1;
//     } else {
//       // 같을 때는 mid ~end 까지 나누고
//       // start ~ mid 까지 나눠서
//       // 그 위치부터 재귀적으로 search 해서 mid ~ end 에서 개수
//       // start ~ mid 개수 더하기
//       // 아니면 배열에서 그 자리만 제거?
//       res++;
//     }
//   }

//   return res;
// }

console.log(solution(7, 2, [1, 1, 2, 2, 2, 2, 3]));
console.log(solution(7, 4, [1, 1, 2, 2, 2, 2, 3]));
