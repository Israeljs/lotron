//require('dotenv').config();

const app = require('./api');

// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => console.log('ouvindo porta', port));

