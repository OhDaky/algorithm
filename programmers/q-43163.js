function solution(begin, target, words) {
  let answer = 0;

  const queue = [begin];
  const visited = {[begin] : 0};

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === target) break;

    for (const word of words) {
      if (isConnected(word, node) && !visited[word]) {
        visited[word] = visited[node] + 1;
        queue.push(word);
      }
    }
  }
  console.log(visited[target] ? visited[target]: 0)
  return visited[target] ? visited[target] : 0;
}

const isConnected = (str1, str2) => {
  let res = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) res++;
  }
  return res === str1.length - 1 ? true : false;
}


solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);
solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])