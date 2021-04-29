const axios = require('axios');

module.exports = {
  fetchSubRedditPosts: () => {
    return new Promise((resolve, reject) => {
      axios.get("https://www.reddit.com/r/ProgrammerHumor/top.json").then((resp) => {
        resolve(resp.data.data.children)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}