function solution(s) {
  const arr = s.split("").map((el) => Number(el));
  let res = 1;
  for (let i of arr) {
    if (i !== 0) res *= i;
    else res += i;
  }
  console.log(res);
  return res;
}

solution("02984");
solution("567");
