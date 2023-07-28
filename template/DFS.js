const graph = {
  1: [2, 3],
  2: [4],
  3: [5],
  4: [],
  5: [],
};

const visited = new Set(); // 방문한 노드

function DFS(node) {
  visited.add(node);
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      DFS(neighbor);
    }
  }
}

dfs(1);
