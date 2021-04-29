require('dotenv').config();
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const botCommands = require('./BotCommands');
const { getCommandAndArguments } = require('./utils/getCommandAndArguments');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content.startsWith(prefix)) {
    const { command, args } = getCommandAndArguments(msg.content.toString().replace(prefix, ""));
    switch (command) {
      case "meme":
        botCommands.meme(msg, args);
        break;
      default:
        console.log('no matching commands')
    }
  }
});