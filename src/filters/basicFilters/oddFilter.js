const oddFilter = (jogo) => {
  let odd = 0
  let result = false
  const idealNumber = [06, 07, 08, 09, 10]

  jogo.forEach((dezena) => {
    if (dezena % 2 != 0) odd += 1
  })

  if (idealNumber.includes(odd)) result = true

  return [result, `ímpares: ${odd}`, '8-30 7-25 9-20 6-11 10-7']
}
// const arr =    [
//   1,  2,  5,  7,  9, 11,
//  13, 14, 17, 18, 19, 20,
//  21, 23, 24 
// ]
// console.log(oddFilter(arr))
module.exports = oddFilter