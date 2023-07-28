function isBalanced(p) {
  let cnt = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") cnt++;
    else cnt--;
    if (cnt === 0) return i;
  }
}

function checkProper(p) {
  let cnt = 0;
  for (let i of p) {
    if (i === "(") cnt++;
    else {
      if (cnt === 0) return false;
      cnt--;
    }
  }
  return true;
}

function solution(p) {
  let res = "";
  if (p === "") return res;
  let index = isBalanced(p);
  let u = p.slice(0, index + 1);
  let v = p.slice(index + 1);

  if (checkProper(u)) {
    res = u + solution(v);
  } else {
    res = "(";
    res += solution(v);
    res += ")";
    u = u.slice(1, u.length - 1);
    let newU = "";
    for (let i = 0; i < u.length; i++) {
      if (u[i] === "(") newU += ")";
      else newU += "(";
    }
    res += newU;
  }
  return res;
}
/* u 올바르지 않으면
 * 1. 빈문자열에 첫번째 문자 ( 추가
 * 2. v에 대해 이어붙임
 * 3. ) 추가
 * 4. u 첫번쨰와 마지막 제거, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에서 붙임
 * 5. 반환
 */

const case1 = "(()())()";
const case2 = ")(";
const case3 = "()))((()";

console.log(solution(case1));
console.log(solution(case2));
console.log(solution(case3));

/**
 * 개수 맞을 때
 * 빈 - 빈
 * 두 균형잡힌 문자열로 분리 u, v -> u는 더이상 분리 x
 * u 반환
 * u 올바르면 v에 대해 다시 수행
 * u 올바르지 않으면
 * 1. 빈문자열에 첫번째 문자 ( 추가
 * 2. v에 대해 이어붙임
 * 3. ) 추가
 * 4. u 첫번쨰와 마지막 제거, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에서 붙임
 * 5. 반환
 */

/**
 * dfs / bfs
 *
 * const visited = new Set();
 * function dfs(node) {
 *  visited.add(node);
 *  for(const neighbor of graph[node])
 *  if(!visited.has(neighbor)) {
 *   dfs(neighbor);
 *  }
 * }
 *
 */
