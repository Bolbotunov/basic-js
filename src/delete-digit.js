const { NotImplementedError } = require('../extensions/index.js');

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
  const digits = String(n).split('');
  let max = 0;
  for (let i = 0; i < digits.length; i++) {
    const tempArray = [...digits];
    tempArray.splice(i, 1);
    const tempNumber = Number(tempArray.join(''));
    if (tempNumber > max) {
      max = tempNumber;
    }
  }

  return max;
}

module.exports = {
  deleteDigit
};
