const graph = {
  1: [2, 3],
  2: [4],
  3: [5],
  4: [],
  5: [],
};

function BFS(start) {
  const queue = [start];
  const visited = new Set(queue);

  while (queue.length > 0) {
    const node = queue.shift();

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

BFS(1);
