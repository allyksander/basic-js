import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const s2Arr = s2.split('')

  return s1.split('').filter(item => {
    if (s2Arr.indexOf(item) >= 0) {
      s2Arr.splice(s2Arr.indexOf(item), 1)
      return item
    }
  }).length
}