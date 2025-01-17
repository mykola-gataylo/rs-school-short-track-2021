/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrSorted = arr.filter((item) => item !== -1);

  arrSorted.sort((a, b) => a - b);

  // console.log(arrSorted);

  const array = arr.map((item) => (item !== -1 ? arrSorted.shift() : -1));

  // console.log(arr);

  return array;
}

module.exports = sortByHeight;
