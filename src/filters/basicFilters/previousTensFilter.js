// De 7 a 11 são o número de dezenas que repetem do concurso anterior
const lastResult = require('../../helper/lastResult')

const previousTensFilter = (game) => {
  const resultLast = lastResult(1)[1]
  let count = 0
  let result = false

  game.forEach((ten) => {
    if (resultLast.includes(ten)) count += 1
  })
  // Observa-se o padrão de dez dezenas do concurso anterior no início do ciclo das dezenas
  if (count >= 7 && count <= 11) result = true

  return [result, `anteriores: ${count}`, '9-32 8-24 10-21 7-9 11-8']
}

module.exports = previousTensFilter

// const game =       [
//   1,  2,  4,  6,  8,  9,
//  12, 13, 15, 16, 18, 
//  19, 22, 23, 26
// ]
// console.log(previousTensFilter(game)[0])

// node src/filters/basicFilters/previousTensFilter.js 
