const lastResult = require('../helper/lastResult')
// const gameGenerator = require('../helper/gameGenerator')
const sumOfTensFilter = require('../filters/basicFilters/sumOfTensFilter')
// const alreadyWonFilter = require('../filters/basicFilters/alreadyWonFilter')
const previousTensFilter = require('../filters/basicFilters/previousTensFilter')
const fibonacciFilter = require('../filters/basicFilters/fibonacciFilter')
const oddFilter = require('../filters/basicFilters/oddFilter')
const frameFilter = require('../filters/basicFilters/frameFilter')
const sequenceFilter = require('../filters/basicFilters/sequenceFilter')

const percentage = (numerator ,denominator) => {
// return `${(numerator/denominator)*100}%`
return (numerator/denominator)*100
}

const games = lastResult()


const gameFilter = () => {
  console.log(games.length) //3189
    //  const gamesFiltered = games.filter((game) => frameFilter(game)[0]) // 99%
  // const gamesFiltered = games.filter((game) => sumOfTensFilter(game)[0]) // 95%
  // const gamesFiltered = games.filter((game) => previousTensFilter(game)[0]) // 96%
  // const gamesFiltered = games.filter((game) => fibonacciFilter(game)[0]) // 98%
  // const gamesFiltered = games.filter((game) => oddFilter(game)[0]) // 95%
  const gamesFiltered = games.filter((game) => sumOfTensFilter(game)[0]) // 95%
    // .filter((game) => alreadyWonFilter(game))
    .filter((game) => previousTensFilter(game)[0])
    .filter((game) => fibonacciFilter(game)[0])
    .filter((game) => oddFilter(game)[0])
    .filter((game) => frameFilter(game)[0])
    .filter((game) => sequenceFilter(game)[0])


  console.log(gamesFiltered.length)
  console.log(`${Math.floor(percentage(gamesFiltered.length, games.length))}%`) // (`${Math.floor(percentage(2234, 3189))}%`)

  // return gamesFiltered
  return true
}
 gameFilter()

module.exports = gameFilter