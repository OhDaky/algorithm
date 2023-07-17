const fs = require("fs");
const filePath = __dirname + "/input.txt";
//   process.platform === linux? /dev/stdin
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split("").map(Number);

const stack = [];
let removed = 0;

for (let i = 0; i < N; i++) {
  const compare = arr[i];

  while (stack.length > 0 && stack[stack.length - 1] < compare && removed < K) {
    stack.pop();
    removed++;
  }
  stack.push(compare);
}

while (removed < K) {
  stack.pop();
  removed++;
}

console.log(stack.join(""));

/* 시간초과 코드
let cnt = 0;

while (cnt < K) {
  compare(arr, cnt);
  cnt++;
}

console.log(arr.join(""));

function compare(arr, cnt = 0) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
      ++cnt;
      return;
    }
  }
}

코드 해석
이 코드는 지금까지 제거된 자릿수를 추적하기 위해 빈 스택과 변수 removed를 초기화합니다.
for 루프를 사용하여 입력된 숫자의 자릿수를 반복합니다.
각 숫자에 대해 스택의 맨 위 요소와 비교하여 더 큰지 확인합니다.
현재 숫자가 더 크고 여전히 남은 제거가 있는 경우(removed < K), stack.pop()을 사용하여 스택에서 맨 위 요소를 제거합니다. 이는 더 작은 숫자를 제거하여 더 큰 숫자를 얻을 수 있음을 나타냅니다. 전체 수.
while 루프가 끝나면 현재 숫자가 스택으로 푸시됩니다.

메인 루프가 완료되면 남은 제거가 있는지 확인하고(removed < K) 스택 끝에서 나머지 숫자를 제거합니다.
마지막으로 스택의 숫자를 결합하여 가장 큰 숫자를 형성하고 result 변수에 할당합니다.
결과는 콘솔에 출력됩니다.

스택 기반 접근 방식은 맨 위 요소가 지금까지 만난 가장 큰 숫자를 나타내는 스택을 효과적으로 유지합니다. 제거 한계(K)에 도달하지 않는 한 스택에서 더 작은 숫자를 제거합니다. 이렇게 하면 제거 후 스택의 숫자가 가능한 가장 큰 숫자가 됩니다.


 */
