function solution(N) {
  let numbers = new Array(N).fill(0);
  numbers[0] = 1;
  let i2 = 0,
    i3 = 0,
    i5 = 0;
  let next2 = 2,
    next3 = 3,
    next5 = 5;

  for (let i = 1; i < N; i++) {
    numbers[i] = Math.min(next2, next3, next5);
    if (numbers[i] === next2) {
      i2 += 1;
      next2 = numbers[i2] * 2;
    }
    if (numbers[i] === next3) {
      i3 += 1;
      next3 = numbers[i3] * 3;
    }
    if (numbers[i] === next5) {
      i5 += 1;
      next5 = numbers[i5] * 5;
    }
  }

  return numbers[N - 1];
}

console.log(solution(10));
