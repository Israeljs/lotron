const fetch = require('node-fetch')
const fs = require('fs')
const oldResults = require('../database/resultss')
console.log(oldResults[0].numero);

// Retorna o último resultado da lotofácil
const lastResultFetcher = async () => {
  const response = await fetch(
    'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/'
  );
  return response.json()
};
//lastResultFetcher().then((res) => console.log(res))

// Retorna qualquer resultados da lotofácil
const anyResultFetcher = async (draw) => {
  const response = await fetch(
    `https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/${draw}`
  );
  return response.json()
};
// anyResultFetcher(3732).then((res) => console.log(res))

// Retorna todos os resultados da lotofácil
const lotofacilResults = async () => {
  const results = []
  const lastResult = await lastResultFetcher()
  const lastResultNumber = Number(lastResult.numero)
  // const number = 2

  for (let i = lastResultNumber; i > 3732; i--) {
    results.push(await anyResultFetcher(i))
  }
  return results
};

// Cria um arquivo .json com todos os dados dos concurso da lotofácil
lotofacilResults().then((data) => {
  fs.writeFile(
    'src/database/resultsss.js',
    JSON.stringify(data, null, 2),
    { encoding: 'utf-8', flag: 'w' },
    (err) => {
      if (err) console.error(err)
    }
  );
});
