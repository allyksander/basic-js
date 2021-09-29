import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let strArray = str.split('')
  strArray.forEach((item, index) => {
    let counter
    if (item === strArray[index + 1]) {
      counter = 1
      checkNext(strArray, index)
      strArray.splice(index, counter, `${counter}${item}`)

      function checkNext(arr, index) {
        if (arr[index] === arr[index + 1]) {
          counter++
          index++
          checkNext(arr, index)
        }
        return
      }
    } else {
      counter = 1
    }
  })
  return strArray.join('')
}