/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let newString = '';

  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      newString += `${count}${str[i]}`;
      count = 1;
    }
  }
  // console.log(newString);

  newString = newString.split('').filter(el => el !== '1').join('');
  // console.log(newString);
  return newString;
}

module.exports = encodeLine;
