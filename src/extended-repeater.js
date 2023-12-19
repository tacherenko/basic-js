const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = '';

  if (options.addition !== undefined || options.additionRepeatTimes || options.additionSeparator) {
    addition = buildString(`${options.addition}`, options.additionRepeatTimes, options.additionSeparator || '|');
  }

  let result = buildString(`${str}${addition}`, options.repeatTimes, options.separator);

  function buildString(value = '', repeatTimes = 0, separator = '+') {
    if (repeatTimes <= 0) {
      return value;
    }

    const repeatedString = new Array(repeatTimes).fill(value).join(separator);
    return repeatedString;
  }

  return result;
}

module.exports = {
  repeater
};
