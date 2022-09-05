/*
 * 문제 설명
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

* 제한 사항
n은 2 이상 100,000 이하인 자연수입니다.
 
 */

function solution(num) {
  var answer = 0;
  var memo = [];

  memo[0] = 0;
  memo[1] = 1;

  for (var i = 2; i < num + 1; i++) {
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  }

  answer = memo[num];
  return answer;
  // const memo = [0, 1];
  // const aux = (n) => {
  //   // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
  //   if (memo[n] !== undefined) return memo[n];
  //   // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
  //   else memo[n] = (aux(n - 1) % 1234567 + aux(n - 2)% 1234567) % 1234567;
  //   return memo[n];
  // };
  // return aux(n);
}
