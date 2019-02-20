const Tweet = require('../models/Tweet')

module.exports = {
  async index(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt') //Syntaxe do mongoose

    res.json(tweets)
  },

  async store(req, res) {
    const tweet = await Tweet.create(req.body)

    //Evento tweet
    req.io.emit('tweet', tweet)

    res.json(tweet)
  },

  async delete(req, res) {
    const tweet = await Tweet.findById(req.params.id)

    await tweet.remove()

    //Evento delete
    req.io.emit('delete', tweet)

    res.json({
      message: "Tweet removido com sucesso",
      id: tweet._id
    })
  }
}
