/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const openCode = ["(", "{", "["];
  const closeCode = [")", "}", "]"];

  let stack = [];
  let curr = '';

  if(s.length < 1) return true;

  for(let i of s) {
      if(closeCode.includes(i)) {
          curr = stack.pop();
          if (!curr || curr !== openCode[closeCode.indexOf(i)]) return false;
      } else {
      stack.push(i);
      }
  }

  return stack.length === 0;
};