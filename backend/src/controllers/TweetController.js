const Tweet = require('../models/Tweet')

module.exports = {
  async index(req, res) {
    const tweets = await Tweet.find({}).sort('-createdAt') //Syntaxe do mongoose

    res.json(tweets)
  },

  async store(req, res) {
    console.log(req);
    const tweet = await Tweet.create(req.body)

    //Evento tweet
    req.io.emit('tweet', tweet)

    res.json(tweet)
  }
}
