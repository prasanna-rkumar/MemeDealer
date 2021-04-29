const { downloadFile } = require("./utils/downloadFile");
const { fetchSubRedditPosts } = require("./utils/fetchSubredditPosts");
const { randomRange } = require("./utils/randomRange");

module.exports = {
  meme: (msg, args) => {
    fetchSubRedditPosts().then((posts) => {
      const randomInt = randomRange(0, posts.length)
      const { title, url } = posts[randomInt].data

      downloadFile(url, (filepath) => {
        console.log(filepath)
        msg.channel.send(title, {
          files: [
            `${filepath}`
          ]
        });
      })
    }).catch((e) => {
      console.log(e)
      msg.channel.send("Unable to download memes")
    })
  }
};