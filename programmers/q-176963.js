function solution(name, yearning, photo) {
  var answer = [];
  let obj = new Object();
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    answer[i] = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (obj[photo[i][j]]) answer[i] += obj[photo[i][j]];
    }
  }
  return answer;
}
