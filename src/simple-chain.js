import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
// export default {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };



// let chainMaker = {
export default {
  links: [],
  getLength() {
    return this.links.length
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      value = ' ( ) '
    }
    this.links.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position === 'number' || Number.isInteger(position) || typeof this.links[position - 1] !== 'undefined') {
      this.links.splice(position - 1, 1)
      return this
    } else {
      throw new Error("You can't remove incorrect link!")
    }
  },
  reverseChain() {
    this.links.reverse()
    return this
  },
  finishChain() {
    const result = this.links.join('~~')
    this.links = []
    return result
  }
}