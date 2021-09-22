import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  
  if (date) {
    try {
      if (Date(date).toString() === 'Invalid Date') {
        throw new Error('Invalid date!')
      } else {
        let dateHandled = null
        if (typeof date === 'object') {
          dateHandled = date.getMonth()
        } else {
          dateHandled = parseInt(Date(date).getMonth())
        }

        if ((dateHandled >= 0 && dateHandled <= 1) || dateHandled === 11) {
          return 'winter'
        } else if (dateHandled >= 2 && dateHandled <= 4) {
          return 'spring'
        } else if (dateHandled >= 5 && dateHandled <= 7) {
          return 'summer'
        } else {
          return 'autumnn'
        }
      }
    } catch (error) {
      throw new Error('Invalid date!')
    }
  } else {
    return 'Unable to determine the time of year!'
  }
}