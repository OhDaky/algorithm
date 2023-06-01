function solution(players, callings) {
  let playerMap = {};
  let index = -1;
  let temp = undefined;

  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    index = playerMap[callings[i]];
    temp = players[index - 1];
    players[index - 1] = callings[i];
    players[index] = temp;
    playerMap[callings[i]] = index - 1;
    playerMap[temp] = index;
  }

  return players;
}
