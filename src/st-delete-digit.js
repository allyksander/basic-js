import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  if (n && typeof n === 'number') {
    const arrNumber = n.toString().split('').map(item => parseInt(item))
    const arrSumAfterDelete = []
    arrNumber.map((item, index) => {
      const arrAfterDelete = arrNumber.slice()
      arrAfterDelete.splice(index, 1)
      const num = arrAfterDelete.join('')
      arrSumAfterDelete.push(parseInt(num))
    })
    return Math.max.apply(null, arrSumAfterDelete)
  }
}