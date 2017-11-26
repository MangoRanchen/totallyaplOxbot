const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

{
  '!video': {
    execute: getVideo,
    description: 'get a youtube video by search word'
  },
  '!weather': {
    execute: getWeather,
    description: 'get current weather for the given city, defaults to Stockholm'
  },
  '!roll': {
    execute: roll,
    description: 'roll from 1-100'
  },
  '!help': {
    execute: showHelp
  },

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
