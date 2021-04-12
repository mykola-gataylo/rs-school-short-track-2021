/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let totalSum = 0;

  const N = String(n).split('').map((el) => Number(el));

  for (let i = 0; i < N.length; i++) {
    sum += N[i];

    if (sum > 9) {
      sum = String(sum).split('').map((el) => Number(el));

      for (let k = 0; k < sum.length; k++) {
        totalSum += sum[k];
      }
      return totalSum;
    }
  }
  return sum;
}

module.exports = getSumOfDigits;
