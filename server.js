const express = require('express');
const Twitter = require('twitter');
const config = require('./config');

const  T = new Twitter(config);
const params = { count: 50};


const app = express();

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/twitter', async (req, res) => {
  // const result = await T.get('statuses/retweets_of_me', params)
  const result = await T.get('statuses/home_timeline', params)
  res.send({ express: result});
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));