function solution(N, moves) {
  let res = [1, 1];
  for (let i of moves) {
    if (i === "L" && res[1] > 1) res[1]--;
    else if (i === "R" && res[1] < N + 1) res[1]++;
    else if (i === "U" && res[0] > 1) res[0]--;
    else if (i === "D" && res[0] < N + 1) res[0]++;
  }
  return `${res[0]} ${res[1]}`;
}

// input 을 두 줄로, 공간의 크기 N과 이동 계획 moves를 두 개의 입력값으로 받고 츨력인 이동한 후 위치를 문자열로 설정했다.
