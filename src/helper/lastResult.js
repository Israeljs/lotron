const results = require("../database/results")
const resultsJson = JSON.parse(results)

const lastResult = (quantity) => {
  let games = []

  if (quantity > 0) {
    for (let i = 0; i < quantity; i++) {
      games.push(`concurso: ${resultsJson[i].concurso}`, resultsJson[i].dezenas.map(Number))
    }
  } else {
    const allResults = resultsJson.map((resultJson)=> resultJson.dezenas.map(Number))
    
    return allResults
  }
  
  return games
}
// console.log(lastResult()) todos os resultados
// console.log(lastResult(1)) // último resultado
module.exports = lastResult
