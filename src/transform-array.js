import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  try {
    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!")
    }
  } catch {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }


  const tempArray = arr.slice()

  tempArray.forEach((element, index) => {
    switch (element) {
      case '--discard-next':
        if (tempArray[index + 1]) {
          tempArray.splice(index, 2)
        } else {
          tempArray.splice(index, 1)
        }
        break;
      case '--double-next':
        if (tempArray[index + 1]) {
          element = tempArray[index + 1]
        } else {
          tempArray.splice(index, 1)
        }
        break;
      case '--discard-prev':
        if (tempArray[index - 1]) {
          tempArray.splice(index - 1, 2)
        } else {
          tempArray.splice(index, 1)
        }
        break;
      case '--double-prev':
        if (tempArray[index - 1]) {
          tempArray.splice(index - 1, 2, tempArray[index - 1], tempArray[index - 1])
        } else {
          tempArray.splice(index, 1, tempArray[index - 1])
        }
        break;
      default:
      // handledArray.push(element)
    }
  })
  return tempArray
}