const frame = [01, 02, 03, 04, 05, 06, 10, 11, 15, 16, 20, 21, 22, 23, 24, 25]
const numeroIdeal = [7, 8, 9, 10, 11, 12]

const idealNumber = (dezenaMoldura) => {
  const result = numeroIdeal.includes(dezenaMoldura)
  return result
}

const frameFilter = (game) => {

  let countFrame = 0

  game.forEach((ten) => {
    let areThere = frame.includes(ten)
    if (areThere) {
      countFrame += 1
    }
  })
  return [idealNumber(countFrame), `frame: ${countFrame}`, '10-32 9-29 11-19 8-12']
}

module.exports = frameFilter
