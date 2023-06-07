var makeSmallestPalindrome = function (s) {
  let res = s.split("");
  for (let i = 0; i < s.length / 2; i++) {
    if (res[i] !== res[s.length - 1 - i]) {
      res[i] > res[s.length - 1 - i]
        ? (res[i] = res[s.length - i - 1])
        : (res[s.length - i - 1] = res[i]);
    }
  }

  return res.join("");
};
