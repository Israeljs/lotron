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

  return allResults.every((result) => isEqual(result.map(Number), game))
}
      
module.exports = alreadyWonFilter
