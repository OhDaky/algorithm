function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let compressed = "";
    let prev = s.slice(0, i);
    let cnt = 1;

    for (let j = i; j < s.length; j += i) {
      if (prev === s.slice(j, j + i)) {
        cnt++;
      } else {
        compressed += cnt >= 2 ? cnt + prev : prev;
        prev = s.slice(j, j + i);
        cnt = 1;
      }
    }
    compressed += cnt >= 2 ? cnt + prev : prev;
    answer = Math.min(answer, compressed.length);
  }
  console.log(answer);
  return answer;
}

solution("aabbaccc"); // 7
solution("ababcdcdababcdcd"); // 9
solution("abcabcdede"); // 8
solution("abcabcabcabcdededededede"); // 14
solution("xababcdcdababcdcd"); // 17

/**
 * 완전탐색
 * N/2 까지 모든 경우를 탐색하고 가장 짧은 길이 출력
 */
