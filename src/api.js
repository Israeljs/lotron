const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({
  origin: '*'
}));

const resultRouter = require('./routes/resultRouter')
const gameRouter = require('./routes/gameRouter')

app.use(express.json());

app.use('/result/', resultRouter)
app.use('/game/', gameRouter)

module.exports = app
