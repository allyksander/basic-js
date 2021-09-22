import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  if (matrix && Array.isArray(matrix)) {
    const matrixHadled = JSON.parse(JSON.stringify(matrix))

    matrix.slice().map((row, indexR) => {
      row.map((item, indexI) => {
        let counter = 0
        if (typeof row[indexI - 1] !== 'undefined' && row[indexI - 1] === true) {
          counter++
        }
        if (typeof row[indexI + 1] !== 'undefined' && row[indexI + 1] === true) {
          counter++
        }
        const prevRow = matrix[indexR - 1]
        if (typeof prevRow !== 'undefined') {
          for (let i = -1; i < 2; i++) {
            if (typeof prevRow[indexI + i] !== 'undefined' && prevRow[indexI + i] === true) {
              counter++
            }
          }
        }
        const nextRow = matrix[indexR + 1]
        if (typeof nextRow !== 'undefined') {
          for (let i = -1; i < 2; i++) {
            if (typeof nextRow[indexI + i] !== 'undefined' && nextRow[indexI + i] === true) {
              counter++
            }
          }
        }
        matrixHadled[indexR][indexI] = counter
      })
    })
    return matrixHadled
  }
}