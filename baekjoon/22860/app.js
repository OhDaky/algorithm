const fs = require("fs");
const input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const folders = [];
const pathTable = {};

for (let i = 1; i <= N + M; i++) {
  const [path, file, type] = input[i].split(" ");
  const pathFolders = path.split("/");
  const parentFolder = pathFolders[pathFolders.length - 2];
  const folderName = pathFolders[pathFolders.length - 1];

  if (!pathTable[folderName]) {
    const newFolder = { folderName, files: new Set(), folders: new Set() };
    folders.push(newFolder);
    pathTable[folderName] = newFolder;
  }

  if (type === "0") {
    pathTable[folderName].files.add(file);
  } else {
    pathTable[folderName].folders.add(file);
  }

  if (parentFolder && pathTable[parentFolder]) {
    pathTable[parentFolder].folders.add(folderName);
  }
}

const Q = +input[N + M + 1];
const findFolders = input.slice(N + M + 2, N + M + 2 + Q);

findFolders.forEach((path) => {
  const folderNames = path.split("/");
  const findFolder = folderNames[folderNames.length - 1];

  let uniqueCount = 0;
  let totalCount = 0;
  const visited = new Set();

  function dfs(folderName) {
    const folder = pathTable[folderName];
    if (!folder || visited.has(folderName)) return;

    visited.add(folderName);
    folder.files.forEach((file) => {
      totalCount++;
      if (!visited.has(file)) {
        uniqueCount++;
        visited.add(file);
      }
    });

    folder.folders.forEach(dfs);
  }

  dfs(findFolder);
  console.log(`${uniqueCount} ${totalCount}`);
});
