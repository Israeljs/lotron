// const idealList = [3, 4, 5, 6]
const idealList = [2, 3, 4, 5, 6]

const idealNumber = (numberLength) => {
  const result = idealList.includes(numberLength)
  return result
}

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

  return [idealNumber(sequenceNumber), `sequências: ${sequenceNumber}`, '4-42 3-28 5-20', countedSequence]
}
const arr = [01, 02, 03, 05, 06, 07, 08, 10, 11, 12, 13, 14] // [ true, 'sequências: 3', '4-42 3-28 5-20', [ 3, 4, 5 ] ]
console.log(sequenceFilter(arr))

module.exports = sequenceFilter