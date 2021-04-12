/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new Error('Not implemented');
  let arr = email.split('@').reverse();

  // console.log(arr[0]);

  return arr[0];
}

module.exports = getEmailDomain;
