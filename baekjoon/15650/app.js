const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let [N, M] = [];

rl.on("line", (line) => {
  [N, M] = line.split(" ").map(Number);
}).on("close", () => {
  const combination = (arr, r) => {
    if (r === 1) return arr.map((value) => [value]);

    const result = [];
    arr.forEach((value, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = combination(rest, r - 1);
      const attached = combinations.map((comb) => [value, ...comb]);
      result.push(...attached);
    });
    return result;
  };

  const numbers = Array.from({ length: N }, (_, i) => i + 1);
  const results = combination(numbers, M);

  results.forEach((comb) => {
    console.log(comb.join(" "));
  });
});
