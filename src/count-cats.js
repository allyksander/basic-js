import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const CATS_EARS = '^^';
export default function countCats(backyard) {

  if (Array.isArray(backyard)) {
    let catsCount = 0;

    backyard.forEach(row => {
      if (Array.isArray(row)) {
        row.forEach(item => {
          if (item === CATS_EARS) {
            catsCount++;
            console.log('cat')
          }
        })
      }
    })

    return catsCount;
  } else {
    return 0
  }
}