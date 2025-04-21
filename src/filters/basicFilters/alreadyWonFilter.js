// Verificar se o jogo não fez 14 ou 15 pontos
const lastResult = require('../../helper/lastResult')

const isEqual = (result, game) => {
  let count = 0
  let isTrue = false

  result.forEach((ten) => {
    if (game.includes(ten)) count += 1
  })

  if (count < 14) isTrue = true

  return isTrue
}

const alreadyWonFilter = (game) => {
  allResults = lastResult()
  // console.log(allResults);

  return allResults.every((oneResult) => isEqual(oneResult, game))
}
      
module.exports = alreadyWonFilter
