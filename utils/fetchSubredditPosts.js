const axios = require('axios');
const { randomRange } = require('./randomRange');
const SUB_REDDITS = require('../constants/SUB_REDDITS.json')

module.exports = {
  fetchSubRedditPosts: () => {
    const subreddit = getRandomSubreddit();
    return new Promise((resolve, reject) => {
      axios.get(`https://www.reddit.com/${subreddit}/top.json`).then((resp) => {
        console.log(subreddit)
        resolve(resp.data.data.children)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

function getRandomSubreddit() {
  const randomInt = randomRange(0, SUB_REDDITS.length - 1)
  return SUB_REDDITS[randomInt];
}