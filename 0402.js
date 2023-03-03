function solution(N) {
  let count = 0;
  for (let i = 0; i < N + 1; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; j < 60; k++) {
        if (`${i}${j}${k}`.includes(3)) count++;
      }
    }
  }
  return count;
}

// 모든 케이스가 8만여건이기 때문에 for 문을 사용하여 문자열에서 include 로 검사해도 문제 풀이가 가능하다.
