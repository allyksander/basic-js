import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let stat = {}

  domains.map(item => item.split('.').reverse())
    .sort((a, b) => a.length - b.length)
    .map(item => {
      item.reduce((concat, current) => {
        const dns = concat + '.' + current

        stat.hasOwnProperty(dns) ? stat[dns]++ : stat[dns] = 1
        
        return dns
      }, '')
    })

  return stat
}