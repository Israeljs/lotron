const gameServer = require('../services/gameServer')

module.exports = {
  gameFilter: async (req, res) => {
    let quantity = req.params.id
    const games = await gameServer.gameFilter(quantity);
    return res.status(200).json(games)
  },
}
