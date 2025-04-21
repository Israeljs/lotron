// Verifica se um número 'count' está no array 'idealNumber' retornando true ou false
const isItAnIdealNumber = (count, idealNumber) => {
  const result = idealNumber.includes(count)
  return result
}

module.exports = isItAnIdealNumber
