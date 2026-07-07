const fetch = require('node-fetch');

const resultsFetcher = async () => {
  const response = await fetch(
    'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/'
  );
  return response.json();
};

const lotofacilResults = async () => {
  const results = []
  const concourse = await resultsFetcher()
  const number = Number(concourse.numero)
  console.log(number);

  for (let i = number; i > 0; i--) {
    results.push(await resultsFetcher())
  }
  return results
};

lotofacilResults().then((data) => console.log(data));
// console.log(lotofacilResults());
