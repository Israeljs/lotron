// filtra os jogos cujo o número de dezenas em sequência se 
// encontra entre '2' e '6'.
const isItAnIdealNumber = require('../../helper/isItAnIdealNumber')

const idealNumber = [2, 3, 4, 5, 6]

const sequenceFilter = (dezena) => {
  let count = 1
  const countedSequence = []

  for (let i = 1; i <= dezena.length; i++) {
    if (dezena[i] === (dezena[i - 1] + 1)) {
      count += 1
    } else {
      if (count > 1) {
        countedSequence.push(count)
        count = 1
      }
    }
  }
  const sequenceNumber = countedSequence.length

  return [isItAnIdealNumber(sequenceNumber, idealNumber), `sequências: ${sequenceNumber}`, '4-42 3-28 5-20', countedSequence]
}
const arr = [01, 02, 03, 05, 06, 07, 08, 10, 11, 12, 13, 14] // [ true, 'sequências: 3', '4-42 3-28 5-20', [ 3, 4, 5 ] ]
console.log(sequenceFilter(arr))

module.exports = sequenceFilter