const fetch = require('node-fetch');

const resultsFetcher = async () => {
  const response = await fetch(
    'https://servicebus2.caixa.gov.br/portaldeloterias/api/lotofacil/'
  );
  return response.json();
};

const tt = async () => {
  const data = await resultsFetcher();
  return data;
};

tt().then((data) => console.log(data));
