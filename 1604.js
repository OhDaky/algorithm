function solution(N, arr) {
  let res = arr.reverse();
  let dp = new Array(N).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (res[j] < res[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return N - Math.max(...dp);
}

console.log(solution(7, [15, 11, 4, 8, 5, 2, 4]));

/** 가장 긴 증가하는 부분 수열
 * d[i] = arr[i]를 마지막 원소로 가지는 부분 수열의 최대 길이
 * 뒤집에서 for(i=1~N){ for(j=0~i) { arr[i] > arr[j] ? dp[i] = Math.max(dp[i], dp[j]+1)}}
 */
