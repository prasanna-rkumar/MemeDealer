require('dotenv').config();
const Discord = require('discord.js');
const botCommands = require('./BotCommands');
const { getCommandAndArguments } = require('./utils/getCommandAndArguments');

const client = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PREFIX = "!";

client.login(TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(PREFIX)) {
    const { command, args } = getCommandAndArguments(msg.content.toString().replace(PREFIX, ""));
    switch (command) {
      case "meme":
        botCommands.meme(msg, args);
        break;
      default:
        console.log('no matching commands')
    }
  }
});