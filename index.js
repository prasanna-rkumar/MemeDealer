require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const https = require('https');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    https.get("https://preview.redd.it/moa6icoexwv61.jpg?width=640&crop=smart&auto=webp&s=17eaebc955116881dc8b13bc23e023cd96d53bb1", (resp) => {
      const path = `${__dirname}/assets/moa6icoexwv61.jpg`;
      const filePath = fs.createWriteStream(path);
      resp.pipe(filePath);
      filePath.on('finish', () => {
        filePath.close();
        console.log('Download Completed');
        msg.channel.send("Testing message.", {
          files: [
            "./assets/moa6icoexwv61.jpg",
          ]
        });
      })
    })

  }
});