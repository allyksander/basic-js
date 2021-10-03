import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (str) {
    const {
      repeatTimes = options.repeatTimes || 1,
      addition = options.addition || '',
      separator = options.separator || '+',
      additionRepeatTimes = options.additionRepeatTimes || 1,
      additionSeparator = options.additionSeparator || '|'
    } = options

    const additionArr = []
    if (addition) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        additionArr.push(String(addition))
      }
    }

    const strArr = []
    if (repeatTimes > 0) {
      for (let i = 0; i < repeatTimes; i++) {
        strArr.push(`${String(str)}${additionArr.join(additionSeparator)}`)
      }
    }
    return strArr.join(separator)
  }
}