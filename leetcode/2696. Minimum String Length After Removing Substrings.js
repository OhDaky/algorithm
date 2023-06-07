var minLength = function (s) {
  let res = s;
  while (res.includes("AB") || res.includes("CD")) {
    if (res.includes("AB")) res = res.replace("AB", "");
    if (res.includes("CD")) res = res.replace("CD", "");
  }

  return res.length;
};
