// embaralha um array e fatia as 15 primeiras posições em outro array.
const gameGenerator = () => {
  const arrLoto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
  for (var j, x, i = arrLoto.length; i; j = Math.floor(Math.random() * i), x = arrLoto[--i], arrLoto[i] = arrLoto[j], arrLoto[j] = x);
  return arrLoto.slice(0, 15).sort((a, b) => a - b);
}
// console.log(gameGenerator())
module.exports = gameGenerator
