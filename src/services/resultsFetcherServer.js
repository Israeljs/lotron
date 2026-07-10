const fetch = require('node-fetch');
const fs = require('fs')

const resultsFetcher = async () => {
  const response = await fetch(
    'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/'
  );
  return response.json();
};

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
