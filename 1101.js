// Greedy - 모험가 길드

function solution(N, arr) {
  let cnt = 0;
  let sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < N; i++) {
    i += sorted[i];
    if (i > N) break; // 남는 인원
    else cnt++;
  }

  console.log(cnt);
  return cnt;
}

solution(5, [2, 3, 1, 2, 2]);
