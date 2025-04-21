// filtra os jogos cujo o número de dezenas ímpares se encontra entre '6' e '10'.
const isItAnIdealNumber = require('../../helper/isItAnIdealNumber')

const oddFilter = (jogo) => {
  let odd = 0
  const idealNumber = [06, 07, 08, 09, 10]

  jogo.forEach((dezena) => {
    if (dezena % 2 != 0) odd += 1
  })

  return [isItAnIdealNumber(odd, idealNumber), `ímpares: ${odd}`, '8-30 7-25 9-20 6-11 10-7']
}
// const arr = [1,  2,  5,  7,  9, 11, 13, 14, 17, 18, 19, 20, 21, 23, 24]
// console.log(oddFilter(arr))
module.exports = oddFilter
