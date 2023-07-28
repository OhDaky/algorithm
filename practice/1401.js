function solution(N, input) {
  let arr = input.sort((a, b) => b[1] - a[1]);
  arr = arr.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[2] === b[2]) {
        if (a[3] === b[3]) {
          return a[0] - b[0];
        } else {
          return a[3] - b[3];
        }
      } else {
        return b[2] - a[2];
      }
    } else {
      return b[1] - a[1];
    }
  });
  return arr;
}

const arr = [
  ["Junkyu", 50, 60, 100],
  ["Sangkeun", 80, 60, 50],
  ["Sunyoung", 80, 70, 100],
  ["Soong", 50, 60, 90],
  ["Haebin", 50, 60, 100],
  ["Kangsoo", 60, 80, 100],
  ["Donghyuk", 80, 60, 100],
  ["sei", 70, 70, 70],
  ["Wons", 70, 70, 90],
  ["Sanghyun", 70, 70, 80],
  ["nsi", 80, 80, 80],
  ["Taewhan", 50, 60, 90],
];

console.log(solution(arr.length, arr));

/**
 * 1. 국어 감소
 * 2. 같으면 영어 증가
 * 3. 같으면 수학 감소
 * 4. 이름 오름차순 - 대문자 앞
 * 학생수 []
 *
 */
