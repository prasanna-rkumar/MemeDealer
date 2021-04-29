const { fetchSubRedditPosts } = require("./utils/fetchSubredditPosts");
const { randomRange } = require("./utils/randomRange");

module.exports = {
  meme: (msg, args) => {
    fetchSubRedditPosts().then((posts) => {
      const { title, url, subreddit_name_prefixed: subreddit } = getRandomPost(posts)
      msg.channel.send(title + "\n" + url + "\n" + "from " + subreddit)
    }).catch((e) => {
      console.log(e)
      msg.channel.send("Unable to download memes")
    })
  }
};

function getRandomPost(posts) {
  const randomInt = randomRange(0, posts.length - 1)
  const post = posts[randomInt].data
  if (post.is_video) {
    return getRandomPost(posts)
  }
  return post;
}
