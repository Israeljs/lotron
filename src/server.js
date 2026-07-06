//require('dotenv').config();
// const cors = require('cors');

const app = require('./api');

// app.use(cors({
//   origin: '*'
// }));

// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => console.log('ouvindo porta', port));

