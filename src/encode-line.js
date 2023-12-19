const { NotImplementedError } = require('../extensions/index.js');

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
  let encodedExpr = '';
  let charStack = [];

  str.split('').forEach((char, i) => {
    if (charStack.length === 0 || charStack.includes(char)) {
      charStack.push(char);
    } else {
      encodedExpr += (charStack.length === 1 ? '' : charStack.length) + charStack[0];
      charStack = [char];
    }

    if (i === str.length - 1) {
      encodedExpr += (charStack.length === 1 ? '' : charStack.length) + charStack[0];
    }
  });

  return encodedExpr;
}

module.exports = {
  encodeLine
};
