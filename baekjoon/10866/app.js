const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? "/dev/stdin"
const input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
const arr = input.slice(1);
const res = [];
const dequeue = [];

arr.forEach((el) => {
  if (el.includes("push_front")) {
    let num = Number(el.split(" ")[1]);
    dequeue.unshift(num);
  } else if (el.includes("push_back")) {
    let num = Number(el.split(" ")[1]);
    dequeue.push(num);
  } else if (el === "pop_front") {
    res.push(dequeue.length > 0 ? dequeue.shift() : -1);
  } else if (el === "pop_back") {
    res.push(dequeue.length > 0 ? dequeue.pop() : -1);
  } else if (el === "size") {
    res.push(dequeue.length);
  } else if (el === "empty") {
    res.push(dequeue.length === 0 ? 1 : 0);
  } else if (el === "front") {
    res.push(dequeue.length > 0 ? dequeue[0] : -1);
  } else if (el === "back") {
    res.push(dequeue.length > 0 ? dequeue[dequeue.length - 1] : -1);
  }
});

console.log(res.join("\n"));
