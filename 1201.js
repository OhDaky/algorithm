function solution(n) {
  const strN = String(n);
  const arr1 = strN
    .split("")
    .map((el) => Number(el))
    .slice(0, strN.length / 2);

  const arr2 = strN
    .split("")
    .map((el) => Number(el))
    .slice(strN.length / 2);

  const sum1 = arr1.reduce((a, b) => a + b);
  const sum2 = arr2.reduce((a, b) => a + b);

  console.log(sum1 === sum2 ? "LUCKY" : "READY");
  return sum1 === sum2 ? "LUCKY" : "READY";
}

const test1 = 123402;
const test2 = 7755;

solution(test1);
solution(test2);
