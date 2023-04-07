function solution(s) {
  const arr = s.split("").map((el) => Number(el));
  let cnt0 = 0,
    cnt1 = 0;
  if (arr[0] === 0) cnt1 = 1;
  else cnt0 = 1;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[i + 1] === 1 ? cnt0++ : cnt1++;
    }
  }

  console.log(Math.min(cnt0, cnt1));
  return Math.min(cnt0, cnt1);
}

solution("0001100");
solution("0011001100011");
// 전부 0으로 or 전부 1로
