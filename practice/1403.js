function solution(n, arr) {
  let res = new Array(n + 2).fill().map(() => new Set());
  let fails = [];
  let members = arr.length;
  for (let i = 0; i <= n + 1; i++) {
    for (let j = 0; j < members; j++) {
      if (arr[j] === i) {
        res[i].add(j);
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    fails.push([i, res[i].size / members]);
    members -= res[i].size;
  }
  fails.sort((a, b) => b[1] - a[1]);
  fails = fails.map((el) => el[0]);
  return fails;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
