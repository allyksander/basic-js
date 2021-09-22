import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  if (names && Array.isArray(names)) {
    names.forEach(name => {
      let counter = 0
      
      names.forEach((item, index) => {
        if (item === name) {
          counter++
          if (counter > 1) {
            names.splice(index, 1, `${item}(${counter - 1})`)
          }
        }
        if (index === names.length) {
          counter = 0
        }
      })
    })
    return names
  }
}
renameFiles(["file", "file", "image", "file(1)", "file"])