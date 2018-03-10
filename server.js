const express = require('express');
const Twitter = require('twitter');
const config = require('./config');

const  twitter = new Twitter(config);
const params = { count: 50};

const app = express();

app.get('/api/twitter', async (req, res) => {
  const result = await twitter.get('statuses/home_timeline', params)
  res.send(result);
});

app.get('/api/twitter/following', async (req, res) => {
  const result = await twitter.get('friends/list', params)
  res.send(result);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));