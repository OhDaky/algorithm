function solution(s) {
  let answer = 0;

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
