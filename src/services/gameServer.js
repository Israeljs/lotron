const gameGenerator = require('../helper/gameGenerator')
const sumOfTensFilter = require('../filters/basicFilters/sumOfTensFilter')
const alreadyWonFilter = require('../filters/basicFilters/alreadyWonFilter')
const previousTensFilter = require('../filters/basicFilters/previousTensFilter')
const fibonacciFilter = require('../filters/basicFilters/fibonacciFilter')
const oddFilter = require('../filters/basicFilters/oddFilter')
const frameFilter = require('../filters/basicFilters/frameFilter')
const isolatedTensFilter = require('../filters/basicFilters/isolatedTensFilter')
const sequenceFilter = require('../filters/basicFilters/sequenceFilter')

const gameFilter = (quantity) => {
  const games = []

  for (let i = 0; i < quantity; i++) {
    games.push(gameGenerator())
  }

  // const gamesFiltered = games.filter((game) => sumOfTensFilter(game)[0])
  const gamesFiltered = games.filter((game) => sequenceFilter(game)[0])
    // .filter((game) => alreadyWonFilter(game))
    // .filter((game) => previousTensFilter(game)[0])
    // .filter((game) => fibonacciFilter(game)[0])
    // .filter((game) => oddFilter(game)[0])
    // .filter((game) => frameFilter(game)[0])
    // .filter((game) => isolatedTensFilter(game)[0])
    // .filter((game) => sequenceFilter(game)[0])

  console.log(games.length)
  console.log(gamesFiltered.length)

  return gamesFiltered
}
console.log(gameFilter(50))

module.exports = gameFilter
