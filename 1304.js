function isRight(arr) {
  let cnt = 0;
  for (let i of arr) {
    if (i === "(") cnt++;
    else cnt--;

    if (cnt < 0) return false;
  }
  return cnt === 0 ? true : false;
}

function solution(str) {
  let res = [];
  const arr = str.split("");
  let cntStart = 0;
  let cntEnd = 0;
  let u = [];
  let v = [];

  function DFS(arr) {
    /* u 올바르지 않으면
     * 1. 빈문자열에 첫번째 문자 ( 추가
     * 2. v에 대해 이어붙임
     * 3. ) 추가
     * 4. u 첫번쨰와 마지막 제거, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에서 붙임
     * 5. 반환
     */

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "(") cntStart++;
      else cntEnd++;

      if (cntStart === cntEnd) {
        u = arr.slice(0, i + 1);
        v = arr.slice(i + 1, arr.length + 1);
        i = arr.length;
      }
    }

    if (isRight(u) && isRight(v)) res = [...res, ...u, ...v];
    if (isRight(u) && !isRight(v)) res = [...res, ...u];

    if (!isRight(u)) {
      let newArr = ["(", ...v, ")"];
      let newU = u.slice(1, u.length - 1);
      for (let i of newU) {
        i === "(" ? (i = ")") : (i = "(");
      }
      newArr = [...newArr, ...newU];
      DFS(newArr);
    }

    if (!isRight(v)) {
      DFS(v);
    }
    return u.join("").concat(v.join(""));
  }

  DFS(arr);
  console.log(res.join(""));
  return res.join("");
}

const case1 = "(()())()";
const case2 = ")(";
const case3 = "()))((()";

solution(case1);
solution(case2);
solution(case3);

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
