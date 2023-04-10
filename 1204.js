// 키 회전
function rotateKey(key) {
  const len = key.length;
  let res = Array.from(Array(len), () => new Array(len).fill(0));
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      res[j][len - i - 1] = key[i][j];
    }
  }
  return res;
}

// 키를 넣었을 때 모두 1인지
function check(map) {
  const lock_len = map.length / 3;
  for (let i = lock_len; i < lock_len * 2; i++) {
    for (let j = lock_len; j < lock_len * 2; j++) {
      if (map[i][j] !== 1) return false;
    }
  }
  return true;
}

function solution(key, lock) {
  let result = 0;

  let map = Array.from(Array(lock.length * 3), () =>
    new Array(lock.length * 3).fill(0)
  );

  for (let i = lock.length; i < lock.length * 2; i++) {
    for (let j = lock.length; j < lock.length * 2; j++) {
      map[i][j] = lock[i - lock.length][j - lock.length];
    }
  }

  for (let rotate = 0; rotate < 4; i++) {
    let newKey = rotateKey(key);
    for (let x = 0; x < key.length * 2; x++) {
      for (let y = 0; y < key.length * 2; y++) {
        for (let i = 0; i < key.length; i++) {
          for (let j = 0; j < key.length; j++) {
            map[x + i][y + j] += newKey[i][j];
          }
        }
        if (check(map) === true) {
          console.log(true);
          return true;
        }

        for (let i = 0; i < key.length; i++) {
          for (let j = 0; j < key.length; j++) {
            map[x + i][y + j] -= newKey[i][j];
          }
        }
      }
    }
  }
  console.log(false);
  return result;
}

const key = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 1],
];
const lock = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

solution(key, lock);
