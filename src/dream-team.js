import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 */
export default function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const checkedTeammates = members.filter(item => typeof item === 'string')

    const teamNameLetters = []

    checkedTeammates.map(name => teamNameLetters.push(name.trim().toUpperCase()[0]))

    return teamNameLetters.sort().join('')
  } else {
    return false
  }
}