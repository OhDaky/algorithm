function solution(n, m, arr) {
  let cnt = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] !== arr[j]) cnt++;
    }
  }

  console.log(cnt);
  return cnt;
}

function solution2(n, m, arr) {
  let cnt = 0;
  let weight = new Array(m + 1).fill(0); // 무게 당 볼링공 수
  for (let el of arr) {
    weight[el] += 1;
  }

  for (let i = 1; i < m + 1; i++) {
    n -= weight[i];
    cnt += weight[i] * n;
  }

  console.log(cnt);
  return cnt;
}

solution2(5, 3, [1, 3, 2, 3, 2]);
solution2(8, 5, [1, 5, 4, 3, 2, 4, 5, 2]);

/**
 * 앞에서 고른 것 - 다른 거 전부 고르기
 */
