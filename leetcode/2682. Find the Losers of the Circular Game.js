/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */

var circularGameLosers = function(n, k) {
  let answer  = [];
  let visited = [1];
  let turn = 1;
  for(let i=2; i<= n; i++) {
      answer.push(i);
  }
  
  let visit = 1;

  // visited에 중복
  while(visited.filter((item, index) => visited.indexOf(item) !== index).length < 1) {
      visit += turn * k;
      if (visit > n) visit = visit % n;
      if (visit === 0) visit = n;
      turn++;
      answer = answer.filter((el) => el !== visit);
      visited.push(visit);
  }

  return answer;
};