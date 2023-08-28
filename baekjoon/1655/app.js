const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
const nums = input.slice(1).map(Number);
class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  insert(num) {
    this.heap.push(num);
    let idx = this.heap.length - 1;
    while (idx > 1 && this.heap[Math.floor(idx / 2)] < this.heap[idx]) {
      [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
        this.heap[idx],
        this.heap[Math.floor(idx / 2)],
      ];
      idx = Math.floor(idx / 2);
    }
  }
  delete() {
    const max = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let idx = 1;
    while (true) {
      let left = idx * 2;
      let right = idx * 2 + 1;
      let largest = idx;
      if (left < this.heap.length && this.heap[left] > this.heap[largest])
        largest = left;
      if (right < this.heap.length && this.heap[right] > this.heap[largest])
        largest = right;
      if (largest !== idx) {
        [this.heap[idx], this.heap[largest]] = [
          this.heap[largest],
          this.heap[idx],
        ];
        idx = largest;
      } else {
        break;
      }
    }
    return max;
  }
  size() {
    return this.heap.length - 1;
  }
  top() {
    return this.heap[1];
  }
}

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  insert(num) {
    this.heap.push(num);
    let idx = this.heap.length - 1;
    while (idx > 1 && this.heap[Math.floor(idx / 2)] > this.heap[idx]) {
      [this.heap[Math.floor(idx / 2)], this.heap[idx]] = [
        this.heap[idx],
        this.heap[Math.floor(idx / 2)],
      ];
      idx = Math.floor(idx / 2);
    }
  }
  delete() {
    const min = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let idx = 1;
    while (true) {
      let left = idx * 2;
      let right = idx * 2 + 1;
      let smallest = idx;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest !== idx) {
        [this.heap[idx], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[idx],
        ];
        idx = smallest;
      } else {
        break;
      }
    }
    return min;
  }
  size() {
    return this.heap.length - 1;
  }
  top() {
    return this.heap[1];
  }
}

// 코드의 나머지 부분 (위에서 제공된 부분을 활용)

const maxHeap = new MaxHeap();
const minHeap = new MinHeap();

const res = [];

for (let i = 0; i < N; i++) {
  const num = nums[i];

  if (maxHeap.size() === 0 || num <= maxHeap.top()) {
    maxHeap.insert(num);
  } else {
    minHeap.insert(num);
  }

  while (maxHeap.size() > minHeap.size() + 1) {
    minHeap.insert(maxHeap.delete());
  }
  while (minHeap.size() > maxHeap.size()) {
    maxHeap.insert(minHeap.delete());
  }

  res.push(maxHeap.top());
}

console.log(res.join("\n"));
