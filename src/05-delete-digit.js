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
  // throw new Error('Not implemented');

  let maxDigit = Number;
  const arrFromN = String(n).split('').map(Number);
  // console.log(arrFromN);

  maxDigit = Math.max(...arrFromN.map((item, i) => {
    const num = arrFromN.slice();
    // console.log(num);
    num.splice(i, 1);
    // console.log(num);
    return num.join('');
  }));

  // console.log(maxDigit);
  return maxDigit;
}

module.exports = deleteDigit;
