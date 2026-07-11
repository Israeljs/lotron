const fetch = require('node-fetch');
const fs = require('fs')

// Pega um resultado da lotofácil por vez na api da caixa
const resultsFetcher = async () => {
  const response = await fetch(
    'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/'
  );
  return response.json();
};

// pega todos resultados da lotofácil
const lotofacilResults = async () => {
  const results = []
  const concourse = await resultsFetcher()
  // const number = Number(concourse.numero)
  const number = 2
  // console.log(number);

  for (let i = number; i > 0; i--) {
    results.push(await resultsFetcher())
  }
  return results
};

// Cria um arquivo .json com todos os dados dos concurso da lotofácil
lotofacilResults().then((data) => {
  fs.writeFile(
    'src/database/results.json',
    JSON.stringify(data, null, 2),
    { encoding: 'utf-8', flag: 'w' },
    (err) => {
      if (err) console.error(err);
    }
  );
});
