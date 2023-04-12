function solution(N, arr) {
  let res = 0;
  let heap = [];
  for (let i of arr) {
    heap.push([i, [...arr]]);
  }

  while (heap.length !== 1) {
    let one = heap[0][0];
    let two = heap[1][0];
    let sum = one + two;
    heap = heap.slice(2);

    for (let i = 0; i < heap.length; i++) {
      heap[i][1] = [sum, ...arr.filter((el) => el !== one && el !== two)];
    }
    res += sum;
  }

  return 2 * res + heap[0][0];
}

console.log(solution(3, [10, 20, 40]));

/*
10 20
30 40  = 100

10 20 30 50 80 90
*/
