function solution(str) {
  let answer = "";
  const arr = str.split("");
  let sum = 0;
  let strArr = [];
  for (let i of arr) {
    if (!isNaN(Number(i))) {
      sum += Number(i);
    } else {
      strArr.push(i);
    }
  }

  answer = strArr.sort().join("") + sum;
  console.log(answer);
  return answer;
}

solution("K1KA5CB7");
solution("AJKDLSI412K4JSJ9D");
