const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || 
  Object.keys(date).length > 0 || 
  isNaN(date.getMonth())) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth() + 1;

  if (month >= 3 && month < 6) return 'spring';
  if (month >= 6 && month < 9) return 'summer';
  if (month >= 9 && month < 12) return 'fall';

  return 'winter';
}

module.exports = {
  getSeason
};
