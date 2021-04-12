/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxDigit = Number;
  let arrFromN = String(n).split('').map(Number);

  maxDigit = Math.max(...arrFromN.map(function (item, i) {
    num = arrFromN.slice();
    num.splice(i, 1);
    return num.join('');
  }));

  return maxDigit;
}

module.exports = deleteDigit;
