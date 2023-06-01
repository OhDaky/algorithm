function solution(numbers, target) {
  var answer = 0;
  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);
  console.log(answer);
  return answer;
}

// dfs

const numbers1 = [1, 1, 1, 1, 1];
const target1 = 3;
// expected 5

const numbers2 = [4, 1, 2, 1];
const target2 = 4;
// expected 2

solution(numbers1, target1);
solution(numbers2, target2);
