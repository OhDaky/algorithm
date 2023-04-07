function solution(N, arr) {
  let target = 1;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    if (target < arr[i]) {
      i = N;
    } else target += arr[i];
  }

  console.log(target);
  return target;
}

solution(5, [3, 2, 1, 1, 9]);

/**
 * 이게 어려웠다면 그리디를 많이 풀자. 어렵다.
 */
