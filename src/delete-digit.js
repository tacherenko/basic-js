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
  const digitArray = Array.from(String(n));
  let maxNumber = 0;

  for (let i = 0; i < digitArray.length; i++) {
    const currentDigitArray = [...digitArray];
    currentDigitArray.splice(i, 1);

    const currentNumber = Number(currentDigitArray.join(''));

    if (maxNumber < currentNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
