const express = require('express');
const Twitter = require('twitter');
const config = require('./config');

const  T = new Twitter(config);
const params = { count: 50};

let tweetsList = [];

const fetchTweet = async () => {
  const result = await T.get('statuses/retweets_of_me', params)
  result.forEach(tweet => tweetsList.push(tweet.text));
  // console.log(tweetsList);
};


fetchTweet()

const app = express();

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/twitter', (req, res) => {
  res.send({ express: tweetsList});
});

const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Listening on port ${port}`));
app.listen(port);