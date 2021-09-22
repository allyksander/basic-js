import { NotImplementedError } from '../extensions/index.js';

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
export default function getSumOfDigits(n) {
  if (n) {

    let result = null
    function handler(n) {
      const arrNumber = n.toString().split('').map(item => parseInt(item))

      if (arrNumber.length > 1) {
        handler(arrNumber.reduce((sum, current) => sum + current, 0))
      } else {
        result = arrNumber[0]
      }
      return result
    }

    return handler(n)
  }
}